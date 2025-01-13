import { AppModule } from '@/app.module';
import { RequestMethod } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import 'colors';
import * as cookieParser from 'cookie-parser';

export const bootstrap = async () => {
	const app = await NestFactory.create(AppModule);

	app.setGlobalPrefix('api', {
		exclude: [
			{ path: 'auth/google', method: RequestMethod.GET },
			{ path: 'auth/google/redirect', method: RequestMethod.GET },
			{ path: 'auth/github', method: RequestMethod.GET },
			{ path: 'auth/github/redirect', method: RequestMethod.GET },
			{ path: 'verify-email', method: RequestMethod.GET }
		]
	});

	if (process.env.MODE === 'development') {
		// eslint-disable-next-line @typescript-eslint/no-var-requires
		app.use(require('morgan')('dev'));
	}

	app.use(cookieParser());
	app.enableCors({
		origin: [process.env.PRODUCTION_HOST, process.env.DEVELOPMENT_HOST],
		credentials: true,
		exposedHeaders: 'set-cookie'
	});

	const port = process.env.PORT || 5000;

	await app.listen(port, () =>
		console.info(
			`🚀🚀🚀 Server running in ${process.env.MODE.toUpperCase()} mode at http://localhost:${port} 🚀🚀🚀`
				.bgRed.bold
		)
	);
};

bootstrap();
