import * as React from 'react'

export default function VerificationEmail({ url }: { url: string }) {
	return (
		<div>
			<h1>Email confirmation</h1>

			<p>
				Someone created a _____ account with this email address. If it was you,
				click on the link to verify your email address:
			</p>

			<a href={url}>Confirm your email address</a>

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
