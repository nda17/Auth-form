import CookieConsentPopup from '@/components/ui/cookie-consent-popup/CookieConsentPopup';
import Cookies from 'js-cookie';
import { NextPage } from 'next';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const CookieConsentProvider: NextPage = () => {
	const [confirm, setConfirm] = useState(true);
	const pathname = usePathname();

	const getCookieConsent = () => {
		Cookies.get('cookieConsent') ? setConfirm(true) : setConfirm(false);
	};

	useEffect(() => {
		getCookieConsent();
	}, [confirm, pathname]);
	return <CookieConsentPopup status={!confirm ? 'show' : 'hide'} />;
};

export default CookieConsentProvider;
