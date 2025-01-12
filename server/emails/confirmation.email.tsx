import * as React from 'react'

const VerificationEmail = ({ url }: { url: string }) => {
	return (
		<div>
			<h1>Welcome!</h1>

			<p>
				You received this email because someone included it during
				registration. If it was you, click the link to verify your email
				address.
			</p>

			<a href={url} aria-label='Confirm email address'>Confirm email address</a>

			<p>or copy the link and paste it into your browser</p>

			<a
				href={url}
				aria-label='Text to copy and paste into the browser for verification or follow the link'
				target="_blank"
				style={{
					color: '#A981DC'
				}}
			>
				{url}
			</a>

			<p
				style={{
					color: '#FC0303'
				}}
			>
				This letter was generated and sent by a robot. You do not need to
				respond to it. If you have a question, please contact
				info@winwidget.ru
			</p>
		</div>
	)
}

export default VerificationEmail
