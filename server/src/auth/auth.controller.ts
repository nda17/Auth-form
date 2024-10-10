import { AuthService } from '@/auth/auth.service'
import { AuthDto } from '@/auth/dto/auth.dto'
import { ConfirmationEmailDto } from '@/auth/dto/confirmation-email.dto'
import { RestorePasswordDto } from '@/auth/dto/restore-password.dto'
import { RefreshTokenService } from '@/auth/refresh-token.service'
import {
	Body,
	Controller,
	HttpCode,
	NotFoundException,
	Patch,
	Post,
	Req,
	Res,
	UnauthorizedException,
	UsePipes,
	ValidationPipe
} from '@nestjs/common'
import { Recaptcha } from '@nestlab/google-recaptcha'
import { Request, Response } from 'express'

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
	async login(
		@Body() dto: AuthDto,
		@Res({ passthrough: true }) res: Response
	) {
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
		const { refreshToken, ...response } =
			await this.authService.register(dto)
		this.refreshTokenService.addRefreshTokenToResponse(res, refreshToken)
		return response
	}

	@HttpCode(200)
	@Patch('auth/confirmation-email')
	async verifyEmail(@Body() dto: ConfirmationEmailDto) {
		if (!dto) {
			throw new NotFoundException('Token not passed')
		}

		return this.authService.confirmationEmail(dto)
	}

	@HttpCode(200)
	@Recaptcha()
	@Patch('/auth/restore-password')
	async restorePassword(@Body() dto: RestorePasswordDto) {
		if (!dto) {
			throw new NotFoundException('Email not passed')
		}

		return this.authService.restorePassword(dto)
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

		const { refreshToken, ...response } =
			await this.authService.getNewTokens(refreshTokenFromCookies)

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
