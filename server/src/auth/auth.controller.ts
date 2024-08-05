import {
	Body,
	Controller,
	Get,
	HttpCode,
	Post,
	Query,
	Req,
	Res,
	UnauthorizedException,
	UsePipes,
	ValidationPipe
} from '@nestjs/common'
import { Recaptcha } from '@nestlab/google-recaptcha'
import { Request, Response } from 'express'
import { AuthService } from './auth.service'
import { AuthDto } from './dto/auth.dto'
import { RefreshTokenService } from './refresh-token.service'

@Controller()
export class AuthController {
	constructor(
		private readonly authService: AuthService,
		private readonly refreshTokenService: RefreshTokenService
	) {}

	@UsePipes(new ValidationPipe())
	@HttpCode(200)
	@Recaptcha()
	@Post('auth/login')
	async login(@Body() dto: AuthDto, @Res({ passthrough: true }) res: Response) {
		const { refreshToken, ...response } = await this.authService.login(dto)

		this.refreshTokenService.addRefreshTokenToResponse(res, refreshToken)

		return response
	}

	@UsePipes(new ValidationPipe())
	@HttpCode(200)
	@Recaptcha()
	@Post('auth/register')
	async register(
		@Body() dto: AuthDto,
		@Res({ passthrough: true }) res: Response
	) {
		const { refreshToken, ...response } = await this.authService.register(dto)
		this.refreshTokenService.addRefreshTokenToResponse(res, refreshToken)
		return response
	}

	@HttpCode(200)
	@Get('verify-email')
	async verifyEmail(@Query('token') token?: string) {
		if (!token) {
			throw new UnauthorizedException('Token not passed')
		}

		return this.authService.verifyEmail(token)
	}

	@HttpCode(200)
	@Post('auth/access-token')
	async getNewTokens(
		@Req() req: Request,
		@Res({ passthrough: true }) res: Response
	) {
		const refreshTokenFromCookies =
			req.cookies[this.refreshTokenService.REFRESH_TOKEN_NAME]

		if (!refreshTokenFromCookies) {
			this.refreshTokenService.removeRefreshTokenFromResponse(res)
			throw new UnauthorizedException('Refresh token not passed')
		}

		const { refreshToken, ...response } = await this.authService.getNewTokens(
			refreshTokenFromCookies
		)

		this.refreshTokenService.addRefreshTokenToResponse(res, refreshToken)

		return response
	}

	@HttpCode(200)
	@Post('auth/logout')
	async logout(@Res({ passthrough: true }) res: Response) {
		this.refreshTokenService.removeRefreshTokenFromResponse(res)

		return true
	}
}
