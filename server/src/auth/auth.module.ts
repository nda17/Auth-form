import { SocialMediaAuthController } from '@/auth/social-media/social-media-auth.controller'
import { SocialMediaAuthService } from '@/auth/social-media/social-media-auth.service'
import { GithubStrategy } from '@/auth/strategies/github.strategy'
import { GoogleStrategy } from '@/auth/strategies/google.strategy'
import { EmailModule } from '@/email/email.module'
import { PrismaService } from '@/prisma.service'
import { UserModule } from '@/user/user.module'
import { Module } from '@nestjs/common'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { JwtModule } from '@nestjs/jwt'
import { getJwtConfig } from 'src/config/jwt.config'
import { AuthController } from './auth.controller'
import { AuthService } from './auth.service'
import { RefreshTokenService } from './refresh-token.service'
import { JwtStrategy } from './strategies/jwt.strategy'

@Module({
	imports: [
		JwtModule.registerAsync({
			imports: [ConfigModule],
			inject: [ConfigService],
			useFactory: getJwtConfig
		}),
		UserModule,
		EmailModule
	],
	controllers: [AuthController, SocialMediaAuthController],
	providers: [
		JwtStrategy,
		PrismaService,
		AuthService,
		RefreshTokenService,
		GoogleStrategy,
		GithubStrategy,
		SocialMediaAuthService
	]
})
export class AuthModule {}
