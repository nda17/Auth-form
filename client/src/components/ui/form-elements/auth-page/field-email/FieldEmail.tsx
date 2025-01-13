import styles from '@/components/ui/form-elements/auth-page/field-email/FieldEmail.module.scss';
import { IField } from '@/components/ui/form-elements/form.interface';
import clsx from 'clsx';
import { forwardRef } from 'react';

const FieldEmail = forwardRef<HTMLInputElement, IField>(
	({ error, type = 'text', style, ...rest }, ref) => {
		return (
			<div className={clsx(styles['wrapper-input'])} style={style}>
				<label className={clsx(styles['label-input'])}>
					<input
						className={clsx(styles['input-field'])}
						ref={ref}
						type={type}
						{...rest}
						autoComplete="on"
					/>
				</label>
				{error?.message === 'Please enter a valid email' && (
					<p className={styles.error}>{error.message.toString()}</p>
				)}
			</div>
		);
	}
);

export default FieldEmail;
