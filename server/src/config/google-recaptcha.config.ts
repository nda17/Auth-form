import { ConfigService } from '@nestjs/config'
import { GoogleRecaptchaModuleOptions } from '@nestlab/google-recaptcha/interfaces/google-recaptcha-module-options'
import { isDev } from '../utils/is-dev.util'

export const getGoogleRecaptchaConfig = async (
	configService: ConfigService
): Promise<GoogleRecaptchaModuleOptions> => ({
	secretKey: configService.get<string>('RECAPTCHA_SECRET_KEY'),
	response: req => req.headers.recaptcha,
	skipIf: () => isDev(configService)
	// debug: isDev(configService)
})
