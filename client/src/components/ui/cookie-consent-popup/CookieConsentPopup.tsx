'use client';
import styles from '@/components/ui/cookie-consent-popup/CookieConsentPopup.module.scss';
import { ICookieConsent } from '@/components/ui/cookie-consent-popup/cookie-consent.interface';
import MaterialIcon from '@/components/ui/icons/MaterialIcon';
import { PUBLIC_PAGES } from '@/config/pages/public.config';
import clsx from 'clsx';
import Cookies from 'js-cookie';
import { NextPage } from 'next';
import Link from 'next/link';
import { MouseEvent, useEffect, useState } from 'react';

const CookieConsentPopup: NextPage<ICookieConsent> = status => {
	const [showPopup, setShowPopup] = useState(`${status}`);

	const accept = (e: MouseEvent<HTMLAnchorElement>) => {
		e.preventDefault();
		Cookies.set('cookieConsent', 'status:accept', { expires: 365 });
		setShowPopup('hide');
	};

	useEffect(() => {
		setShowPopup(`${status.status}`);
	}, [status]);

	return showPopup === 'show' ? (
		<div className={clsx(styles['wrapper-cookie'])}>
			<div className={clsx(styles['wrapper-content'])}>
				<div className={styles.heading}>
					<div className={clsx(styles['image-cookie'])}>
						<MaterialIcon name="MdCookie" fill="#dd850b" />
					</div>
					<h1 className={clsx(styles['text-heading'])}>Cookie consent</h1>
				</div>

				<div className={clsx(styles['text-wrapper'])}>
					<p className={clsx(styles['text-consent'])}>
						We use cookies to obtain statistics and personalize services
						and offers,{' '}
						<Link href={PUBLIC_PAGES.COOKIE_NOTICE}>
							<span className={clsx(styles['more-link'])}>read more</span>
						</Link>
						. By continuing to use the site without you consent to the use
						of cookies.
					</p>
				</div>
			</div>
			<button
				type="button"
				onClick={(e: any) => accept(e)}
				className={clsx(styles['button-accept'])}
			>
				Accept
			</button>
		</div>
	) : null;
};

export default CookieConsentPopup;
