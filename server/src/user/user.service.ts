import { AuthDto } from '@/auth/dto/auth.dto';
import {
	IGithubProfile,
	IGoogleProfile
} from '@/auth/social-media/social-media-auth.types';
import isHasMorePagination from '@/pagination/is-has-more';
import { PaginationArgsWithSearchTerm } from '@/pagination/pagination.args';
import { PrismaService } from '@/prisma.service';
import { CreateUserDto } from '@/user/dto/create-user.dto';
import { UpdateUserDto } from '@/user/dto/update-user.dto';
import { UserResponse } from '@/user/user.response';
import {
	BadRequestException,
	Injectable,
	NotFoundException
} from '@nestjs/common';
import { Prisma, Role, type User } from '@prisma/client';
import { path } from 'app-root-path';
import { hash } from 'argon2';
import { exists, remove } from 'fs-extra';
import { promisify } from 'util';

@Injectable()
export class UserService {
	constructor(private prisma: PrismaService) {}

	private getSearchTermFilter(searchTerm: string): Prisma.UserWhereInput {
		return {
			OR: [
				{
					email: {
						contains: searchTerm,
						mode: 'insensitive'
					}
				},
				{
					name: {
						contains: searchTerm,
						mode: 'insensitive'
					}
				},
				{
					id: {
						contains: searchTerm,
						mode: 'insensitive'
					}
				}
			]
		};
	}

	async getAll(
		args?: PaginationArgsWithSearchTerm
	): Promise<UserResponse> {
		const searchTermQuery = args?.searchTerm
			? this.getSearchTermFilter(args?.searchTerm)
			: {};

		const totalCount = await this.prisma.user.count({
			where: searchTermQuery
		});

		const users = await this.prisma.user.findMany({
			skip: +args?.skip,
			take: +args?.take,
			where: searchTermQuery
		});

		const isHasMore = isHasMorePagination(
			totalCount,
			+args?.skip,
			+args.take
		);

		return { items: users, isHasMore };
	}

	async getById(id: string) {
		const user = await this.prisma.user.findUnique({
			where: { id }
		});

		if (!user) {
			throw new NotFoundException('User not found');
		}

		return user;
	}

	async getByEmail(email: string) {
		return this.prisma.user.findUnique({
			where: {
				email
			}
		});
	}

	async findOrCreateSocialUser(profile: IGoogleProfile | IGithubProfile) {
		let user = await this.getByEmail(profile.email);
		if (!user) {
			user = await this._createSocialUser(profile);
		}
		return user;
	}

	private async _createSocialUser(
		profile: IGoogleProfile | IGithubProfile
	): Promise<User> {
		const email = profile.email;
		const name =
			'firstName' in profile
				? `${profile.firstName} ${profile.lastName}`
				: profile.username;
		const picture = profile.picture || '';

		return this.prisma.user.create({
			data: {
				email,
				name,
				password: '',
				verificationToken: null,
				avatarPath: picture
			}
		});
	}

	async create(dto: AuthDto) {
		return this.prisma.user.create({
			data: {
				...dto,
				email: dto.email.toLowerCase(),
				password: await hash(dto.password)
			}
		});
	}

	async adminCreateUser(id: string, dto?: CreateUserDto) {
		const isSameUser = await this.prisma.user.findFirst({
			where: {
				email: dto.email
			}
		});

		if (isSameUser && dto.id !== isSameUser.id) {
			throw new BadRequestException('Email already exists');
		}

		const existingId = await this.prisma.user.findFirst({
			where: {
				id: dto.id
			}
		});

		if (existingId && id !== existingId.id) {
			throw new BadRequestException('Identifier already exists');
		}

		return this.prisma.user.create({
			data: {
				id: dto.id,
				email: dto.email.toLowerCase(),
				password: await hash(dto.password),
				name: dto.name,
				avatarPath: dto.avatarPath,
				rights: [
					dto.isUser ? Role.USER : null,
					dto.isAdmin ? Role.ADMIN : null,
					dto.isManager ? Role.MANAGER : null,
					dto.isPremium ? Role.PREMIUM : null
				].filter(role => role !== null)
			}
		});
	}

	async update(id: string, dto?: UpdateUserDto) {
		const user = await this.prisma.user.findUnique({
			where: {
				id
			}
		});

		if (!user) {
			throw new NotFoundException('User not found');
		}

		const isAdminRequest = dto.isAdminRequest || false;

		if (isAdminRequest) {
			const isSameUser = await this.prisma.user.findFirst({
				where: {
					email: dto.email
				}
			});

			if (isSameUser && id !== isSameUser.id) {
				throw new BadRequestException('Email already exists');
			}

			const existingId = await this.prisma.user.findFirst({
				where: {
					id: dto.id
				}
			});

			if (existingId && id !== existingId.id) {
				throw new BadRequestException('Identifier already exists');
			}

			return this.prisma.user.update({
				where: {
					id
				},
				data: {
					id: dto.id ? dto.id : user.id,
					email: dto.email ? dto.email.toLowerCase() : user.email,
					password: dto.password
						? await hash(dto.password)
						: user.password,
					name: dto.name,
					avatarPath: dto.avatarPath ? dto.avatarPath : user.avatarPath,
					rights: [
						dto.isUser ? Role.USER : null,
						dto.isAdmin ? Role.ADMIN : null,
						dto.isManager ? Role.MANAGER : null,
						dto.isPremium ? Role.PREMIUM : null
					].filter(role => role !== null)
				}
			});
		} else {
			return this.prisma.user.update({
				where: {
					id
				},
				data: {
					password: dto.password
						? await hash(dto.password)
						: user.password,
					name: dto.name,
					avatarPath: dto.avatarPath ? dto.avatarPath : user.avatarPath
				}
			});
		}
	}

	async delete(id: string) {
		const user = await this.getById(id);
		const avatarFile = `${path}${user?.avatarPath}`;

		if (await exists(avatarFile)) {
			const deleteFile = promisify(remove);

			try {
				await deleteFile(avatarFile);
			} catch (err) {
				console.error(`File ${user?.avatarPath} deletion error:`, err);
			}
		}

		return this.prisma.user.delete({
			where: {
				id
			}
		});
	}
}
