import styles from '@/components/ui/form-elements/admin-page/field-password/FieldPassword.module.scss'
import { IField } from '@/components/ui/form-elements/form.interface'
import clsx from 'clsx'
import { forwardRef } from 'react'

const FieldPassword = forwardRef<HTMLInputElement, IField>(
	({ error, type = 'text', style, ...rest }, ref) => {
		return (
			<div className={clsx(styles['wrapper-input'])} style={style}>
				<label className={clsx(styles['label-input'])}>
					<input
						placeholder="New password"
						className={clsx(styles['input-field'])}
						ref={ref}
						type={type}
						{...rest}
						autoComplete="on"
					/>
				</label>
				{error?.message ===
					'Min length should more 6 symbols. Contains 1 number 0-9, 1 Latin letter a-z, 1 Latin letter A-Z' && (
					<p className={clsx(styles['error-message'])}>{error.message}</p>
				)}
			</div>
		)
	}
)

export default FieldPassword
