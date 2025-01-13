import styles from '@/components/screens/(auth)/auth-form/social-media-buttons/SocialMediaButtons.module.scss';
import FontAwesomeIcon from '@/components/ui/icons/FontAwesomeIcon';
import { useRouter } from 'next/navigation';

const SocialMediaButtons = () => {
	const router = useRouter();

	return (
		<div className={styles.wrapper}>
			<button
				onClick={() => router.push('/auth/google')}
				className={styles.button}
				type="button"
			>
				<FontAwesomeIcon name="FaGoogle" fill="#000000" />
			</button>
			<button
				onClick={() => router.push('/auth/github')}
				className={styles.button}
				type="button"
			>
				<FontAwesomeIcon name="FaGithub" fill="#000000" />
			</button>
		</div>
	);
};

export default SocialMediaButtons;
