import { ConfigService } from '@nestjs/config'
import * as dotenv from 'dotenv'

dotenv.config()

export const isDev = (configService: ConfigService) =>
	configService.get('MODE') === 'development'
