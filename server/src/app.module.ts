import { AuthModule } from '@/auth/auth.module'
import { getGoogleRecaptchaConfig } from '@/config/google-recaptcha.config'
import { FileModule } from '@/file/file.module'
import { UserModule } from '@/user/user.module'
import { Module } from '@nestjs/common'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { GoogleRecaptchaModule } from '@nestlab/google-recaptcha'

@Module({
	imports: [
		ConfigModule.forRoot({
			isGlobal: true
		}),
		GoogleRecaptchaModule.forRootAsync({
			imports: [ConfigModule],
			useFactory: getGoogleRecaptchaConfig,
			inject: [ConfigService]
		}),
		AuthModule,
		UserModule,
		FileModule
	]
})
export class AppModule {}
