import { AuthDto } from '@/auth/dto/auth.dto'
import {
	IGithubProfile,
	IGoogleProfile
} from '@/auth/social-media/social-media-auth.types'
import { PrismaService } from '@/prisma.service'
import { UpdateUserDto } from '@/user/dto/update-user.dto'
import { Injectable, NotFoundException } from '@nestjs/common'
import type { User } from '@prisma/client'
import { hash } from 'argon2'

@Injectable()
export class UserService {
	constructor(private prisma: PrismaService) {}

	async getUserList(searchTerm: string) {
		return this.prisma.user.findMany({
			where: {
				email: {
					contains: searchTerm
				}
			},
			select: {
				id: true,
				name: true,
				email: true,
				verificationToken: true,
				rights: true,
				createdAt: true,
				password: false
			}
		})
	}

	async getUserById(id: string) {
		return this.prisma.user.findUnique({
			where: {
				id
			}
		})
	}

	async getUserByEmail(email: string) {
		return this.prisma.user.findUnique({
			where: {
				email
			}
		})
	}

	async findOrCreateSocialUser(profile: IGoogleProfile | IGithubProfile) {
		let user = await this.getUserByEmail(profile.email)
		if (!user) {
			user = await this._createSocialUser(profile)
		}
		return user
	}

	private async _createSocialUser(
		profile: IGoogleProfile | IGithubProfile
	): Promise<User> {
		const email = profile.email
		const name =
			'firstName' in profile
				? `${profile.firstName} ${profile.lastName}`
				: profile.username
		const picture = profile.picture || ''

		return this.prisma.user.create({
			data: {
				email,
				name,
				password: '',
				verificationToken: null,
				avatarPath: picture
			}
		})
	}

	async createUser(dto: AuthDto) {
		return this.prisma.user.create({
			data: {
				...dto,
				email: dto.email.toLowerCase(),
				password: await hash(dto.password)
			}
		})
	}

	async updateUser(id: string, dto?: UpdateUserDto) {
		const user = await this.prisma.user.findUnique({
			where: {
				id
			}
		})

		if (!user) {
			throw new NotFoundException('User not found')
		}

		const isSameUser = await this.prisma.user.findFirst({
			where: {
				email: dto.email
			}
		})

		if (isSameUser && id !== isSameUser.id) {
			throw new NotFoundException('Email busy')
		}

		return this.prisma.user.update({
			where: {
				id
			},
			data: {
				...dto,
				email: dto.email.toLowerCase(),
				password: dto.password ? await hash(dto.password) : user.password
			}
		})
	}

	async deleteUser(id: string) {
		return this.prisma.user.delete({
			where: {
				id
			}
		})
	}

	async getCountUsers() {
		return this.prisma.user.count()
	}
}
