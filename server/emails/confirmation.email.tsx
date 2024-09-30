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

			<a href={url}>Confirm email address</a>

			<p>or copy the link and paste it into your browser</p>

			<a
				href={url}
				target="_blank"
				style={{
					color: '#A981DC'
				}}
			>
				{url}
			</a>
		</div>
	)
}

export default VerificationEmail
