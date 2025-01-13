import { getMailerConfig } from '@/config/mailer.config';
import { EmailService } from '@/email/email.service';
import { MailerModule } from '@nestjs-modules/mailer';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
	imports: [
		MailerModule.forRootAsync({
			imports: [ConfigModule],
			useFactory: getMailerConfig,
			inject: [ConfigService]
		})
	],
	providers: [EmailService],
	exports: [EmailService]
})
export class EmailModule {}
