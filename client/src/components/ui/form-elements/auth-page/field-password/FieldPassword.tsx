import styles from '@/components/ui/form-elements/auth-page/field-password/FieldPassword.module.scss'
import { IField } from '@/components/ui/form-elements/form.interface'
import FontAwesomeIcon from '@/components/ui/icons/FontAwesomeIcon'
import clsx from 'clsx'
import { forwardRef, useState } from 'react'

const FieldPassword = forwardRef<HTMLInputElement, IField>(
	({ error, type = 'text', style, ...rest }, ref) => {
		const [typeInputPassword, setTypeInputPassword] = useState(true)

		const toggleVisiblePassword = () => {
			setTypeInputPassword(!typeInputPassword)
		}

		return (
			<div className={clsx(styles['wrapper-input'])} style={style}>
				<label className={clsx(styles['label-input'])}>
					<input
						className={clsx(styles['input-field'])}
						ref={ref}
						type={typeInputPassword ? type : 'text'}
						{...rest}
						autoComplete="on"
					/>
					<span
						className={clsx(styles['toggle-visible-password'])}
						onClick={toggleVisiblePassword}
					>
						{typeInputPassword ? (
							<FontAwesomeIcon name="FaRegEye" fill="white" />
						) : (
							<FontAwesomeIcon name="FaRegEyeSlash" fill="white" />
						)}
					</span>
				</label>
				{error?.message ===
					'Min length should more 6 symbols. Contains 1 number 0-9, 1 Latin letter a-z, 1 Latin letter A-Z' && (
					<p className={styles.error}>{error.message.toString()}</p>
				)}
			</div>
		)
	}
)

export default FieldPassword
