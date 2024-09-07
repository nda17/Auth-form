import styles from '@/components/screens/(auth)/login/auth-form/social-media-buttons/SocialMediaButtons.module.scss'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

const SocialMediaButtons = () => {
	const router = useRouter()

	return (
		<div className={styles.wrapper}>
			<button
				onClick={() => router.push('/auth/google')}
				className={styles.button}
				type="button"
			>
				<Image
					src="/google.svg"
					width={20}
					height={20}
					alt="google auth"
					className={styles.image}
				/>
			</button>
			<button
				onClick={() => router.push('/auth/github')}
				className={styles.button}
				type="button"
			>
				<Image
					src="/github.svg"
					width={20}
					height={20}
					alt="github auth"
					className={styles.image}
				/>
			</button>
		</div>
	)
}

export default SocialMediaButtons
