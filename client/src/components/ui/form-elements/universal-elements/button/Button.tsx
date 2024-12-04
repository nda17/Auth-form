import styles from '@/components/ui/form-elements/universal-elements/button/Button.module.scss'
import { IButton } from '@/components/ui/form-elements/universal-elements/button/button.interface'
import { NextPage } from 'next'

const Button: NextPage<IButton> = ({ children, className, ...rest }) => {
	return (
		<button className={styles.button} {...rest}>
			{children}
		</button>
	)
}

export default Button
