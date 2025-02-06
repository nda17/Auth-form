import CookieConsentPopup from '@/components/ui/cookie-consent-popup/CookieConsentPopup';
import Cookies from 'js-cookie';
import { usePathname } from 'next/navigation';
import { FC, useEffect, useState } from 'react';

const CookieConsentProvider: FC = () => {
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
