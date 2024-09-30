import VerificationEmail from '@email/confirmation.email'
import { MailerService } from '@nestjs-modules/mailer'
import { Injectable } from '@nestjs/common'
import { render } from '@react-email/render'

@Injectable()
export class EmailService {
	constructor(private readonly mailerService: MailerService) {}

	sendEmail(to: string, subject: string, html: string) {
		return this.mailerService.sendMail({
			to,
			subject,
			html
		})
	}

	sendVerification(to: string, verificationLink: string) {
		const html = render(VerificationEmail({ url: verificationLink }))
		return this.sendEmail(to, 'Confirmation Email', html)
	}
}
