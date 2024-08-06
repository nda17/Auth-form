import { AuthService } from '@/auth/auth.service'
import { RefreshTokenService } from '@/auth/refresh-token.service'
import { SocialMediaAuthService } from '@/auth/social-media/social-media-auth.service'
import { TSocialProfile } from '@/auth/social-media/social-media-auth.types'
import { Controller, Get, Req, Res, UseGuards } from '@nestjs/common'
import { AuthGuard } from '@nestjs/passport'
import { Response } from 'express'

@Controller('auth')
export class SocialMediaAuthController {
	constructor(
		private readonly socialMediaAuthService: SocialMediaAuthService,
		private readonly authService: AuthService,
		private readonly refreshTokenService: RefreshTokenService
	) {}

	private _CLIENT_BASE_URL = 'http://localhost:3000/social-auth?accessToken='

	@Get('google')
	@UseGuards(AuthGuard('google'))
	async googleAuth() {}

	@Get('google/redirect')
	@UseGuards(AuthGuard('google'))
	async googleAuthRedirect(
		@Req() req: { user: TSocialProfile },
		@Res({ passthrough: true }) res: Response
	) {
		const user = await this.socialMediaAuthService.login(req)

		const { accessToken, refreshToken } =
			await this.authService.buildResponseObject(user)
		this.refreshTokenService.addRefreshTokenToResponse(res, refreshToken)

		return res.redirect(`${this._CLIENT_BASE_URL}${accessToken}`)
	}

	@Get('github')
	@UseGuards(AuthGuard('github'))
	async githubAuth() {}

	@Get('github/redirect')
	@UseGuards(AuthGuard('github'))
	async githubAuthRedirect(
		@Req() req: { user: TSocialProfile },
		@Res({ passthrough: true }) res: Response
	) {
		const user = await this.socialMediaAuthService.login(req)

		const { accessToken, refreshToken } =
			await this.authService.buildResponseObject(user)
		this.refreshTokenService.addRefreshTokenToResponse(res, refreshToken)

		return res.redirect(`${this._CLIENT_BASE_URL}${accessToken}`)
	}
}
