import { AuthDto } from '@/auth/dto/auth.dto';
import { ConfirmationEmailDto } from '@/auth/dto/confirmation-email.dto';
import { RestorePasswordDto } from '@/auth/dto/restore-password.dto';
import { EmailService } from '@/email/email.service';
import { PrismaService } from '@/prisma.service';
import { UserService } from '@/user/user.service';
import {
	BadRequestException,
	Injectable,
	NotFoundException,
	UnauthorizedException
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Role, type User } from '@prisma/client';
import { hash, verify } from 'argon2';
import * as dotenv from 'dotenv';
import generator from 'generate-password-ts';
import { omit } from 'lodash';

dotenv.config();
@Injectable()
export class AuthService {
	constructor(
		private jwt: JwtService,
		private userService: UserService,
		private emailService: EmailService,
		private prisma: PrismaService
	) {}

	private readonly TOKEN_EXPIRATION_ACCESS = '1h';
	private readonly TOKEN_EXPIRATION_REFRESH = '7d';

	async login(dto: AuthDto) {
		const user = await this.validateUser(dto);
		return this.buildResponseObject(user);
	}

	async register(dto: AuthDto) {
		const userExists = await this.userService.getUserByEmail(dto.email);
		if (userExists) {
			throw new BadRequestException('User already exists');
		}
		const user = await this.userService.createUser(dto);

		await this.emailService.sendVerification(
			user.email,
			`${process.env.MODE === 'production' ? process.env.PRODUCTION_HOST : process.env.DEVELOPMENT_HOST}/confirmation-email?token=${user.verificationToken}`
		);

		return this.buildResponseObject(user);
	}

	async getNewTokens(refreshToken: string) {
		const result = await this.jwt.verifyAsync(refreshToken);
		if (!result) {
			throw new UnauthorizedException('Invalid refresh token');
		}
		const user = await this.userService.getUserById(result.id);
		return this.buildResponseObject(user);
	}

	async confirmationEmail(dto: ConfirmationEmailDto) {
		const { verificationToken } = dto;

		const user = await this.prisma.user.findFirst({
			where: {
				verificationToken: verificationToken
			}
		});

		if (!user) {
			throw new NotFoundException('Token not exists!');
		}

		await this.prisma.user.update({
			where: {
				id: user.id
			},
			data: {
				verificationToken: null
			}
		});
	}

	async restorePassword(dto: RestorePasswordDto) {
		const { email } = dto;

		const user = await this.prisma.user.findUnique({
			where: {
				email: email
			}
		});

		if (!user) {
			throw new NotFoundException('User not found');
		}

		if (user) {
			const newPassword = generator.generate({
				length: 6,
				uppercase: true,
				lowercase: true,
				numbers: true,
				strict: true
			});

			await this.prisma.user.update({
				where: {
					id: user.id
				},
				data: {
					password: await hash(newPassword)
				}
			});

			await this.emailService.sendNewPassword(user.email, newPassword);
		}

		return;
	}

	async buildResponseObject(user: User) {
		const tokens = await this.issueTokens(user.id, user.rights);
		return { user: this.omitPassword(user), ...tokens };
	}

	private async issueTokens(userId: string, rights: Role[]) {
		const payload = { id: userId, rights };
		const accessToken = this.jwt.sign(payload, {
			expiresIn: this.TOKEN_EXPIRATION_ACCESS
		});
		const refreshToken = this.jwt.sign(payload, {
			expiresIn: this.TOKEN_EXPIRATION_REFRESH
		});
		return { accessToken, refreshToken };
	}

	private async validateUser(dto: AuthDto) {
		const user = await this.userService.getUserByEmail(dto.email);
		if (!user) {
			throw new UnauthorizedException('Email or password invalid');
		}
		const isValid = await verify(user.password, dto.password);
		if (!isValid) {
			throw new UnauthorizedException('Email or password invalid');
		}
		return user;
	}

	private omitPassword(user: User) {
		return omit(user, ['password']);
	}
}
