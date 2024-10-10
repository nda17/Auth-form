import * as React from 'react'

const NewPasswordEmail = ({ password }: { password: string }) => {
	return (
		<div>
			<h1>Welcome!</h1>

			<p>
				You received this email because you specified it as the address for
				receiving a new temporary password to replace the one you forgot.
				Your new temporary password:
			</p>

			<p
				style={{
					color: '#A981DC'
				}}
			>
				{password}
			</p>

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

export default NewPasswordEmail
