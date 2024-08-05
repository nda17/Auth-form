import { RequestMethod } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import 'colors'
import * as cookieParser from 'cookie-parser'
import { AppModule } from './app.module'

async function bootstrap() {
	const app = await NestFactory.create(AppModule)

	app.setGlobalPrefix('api', {
		exclude: [
			{ path: 'auth/google', method: RequestMethod.GET },
			{ path: 'auth/google/redirect', method: RequestMethod.GET },
			{ path: 'auth/github', method: RequestMethod.GET },
			{ path: 'auth/github/redirect', method: RequestMethod.GET },
			{ path: 'verify-email', method: RequestMethod.GET }
		]
	})

	if (process.env.MODE === 'development') {
		app.use(require('morgan')('dev'))
	}

	app.use(cookieParser())
	app.enableCors({
		origin: '*',
		credentials: true,
		exposedHeaders: 'set-cookie'
	})

	const PORT = process.env.PORT || 5000

	await app.listen(PORT, () =>
		console.log(
			`🚀🚀🚀 Server running in ${process.env.NODE_ENV} mode at http://localhost:${PORT} 🚀🚀🚀`
				.white.bgRed.bold
		)
	)
}
bootstrap()
