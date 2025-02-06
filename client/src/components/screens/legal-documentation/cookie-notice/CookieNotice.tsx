import styles from '@/components/screens/legal-documentation/cookie-notice/CookieNotice.module.scss';
import Heading from '@/components/ui/heading/Heading';
import { FC } from 'react';

const CookieNotice: FC = () => {
	return (
		<div className={styles.wrapper}>
			<Heading text="Cookie Notice" />
			<p>
				Our site, like most others, uses cookies and other similar
				technologies (pixel tags, etc.) to provide services that best suit
				your interests and needs, as well as collect statistical and
				marketing information to analyze and improve our services and
				sites.
				<br />
				<br />
				By using this site, you agree to use of cookies and other similar
				technologies in in accordance with this Notice.
				<br />
				<br />
				If you do not agree for us to use this file type, you must set your
				browser settings accordingly or not to use our site.
				<br />
				<br />
				Please note that when blocking or deleting cookies, we cannot
				guarantee the correct operation of our site in your browser.
				<br />
				<br />
				Cookies that are stored through the website do not contain
				information on the basis of which you can be identified. What What
				is a cookie and other similar technologies Cookie file is a small
				text file saved on your computer, smartphone or other device you
				use to visit Internet sites.
				<br />
				<br />
				Some pages you visit may also collect information using pixel tags
				and web beacons, which are electronic images called single pixel
				(1x1) or empty GIF images.
				<br />
				<br />
				Cookies may be placed on your device by us ({`"own"`} cookies) or
				other operators (cookies {`"third parties"`})
				<br />
				We use two types of cookies on the site: session cookies and
				{`"persistent cookies"`}.
				<br />
				Session cookies are temporary files that remain on the device until
				you leave the site.
				<br />
				Persistent cookies remain on the device for a long time time or
				until you manually delete them (how long is the cookie will remain
				on your device will depend on the duration or the “lifetime” of a
				particular file and your browser settings).
				<br />
				Cookies come in different types:
				<br />
				<br />
				Necessary. These files are needed to ensure proper operation site,
				use of its functions. Disabling the use of such files will lead to
				a drop in site performance, making it impossible use its components
				and services. Cookies related to productivity, efficiency and
				analytics. Data files allow you to analyze the interaction of
				visitors with the site, optimize website content, measure the
				effectiveness of advertising campaigns, providing information about
				the number of site visitors, time of its use, errors that occur.
				<br />
				<br />
				Functional cookies remember users who have already visited our
				website, their individual parameters (such as language and region,
				for example) and preferences, and help to individualize site
				content.
				<br />
				<br />
				Advertising cookies determine which websites you visit and how
				often what links you have selected that allows you to be shown
				advertisements that will be of interest to you. Electronic mail. We
				may also use technologies that allow track whether you opened, read
				or forwarded certain messages sent by us to your email mail. This
				is necessary to make our means of communication more useful for the
				user.
				<br />
				Buttons for accessing social networks. They are used to users could
				share a link to the page on social media networks or make an
				electronic bookmark.
				<br />
				These buttons are links to social networking websites, owned by
				third parties, who, in turn, may record information about your
				activity on the Internet, including on our website. Please see the
				relevant terms of use and privacy policies of such sites to
				understand how they use your data and how You can opt out of their
				use of your data or delete it.
				<br />
				<br />
				Third party web services.
				<br />
				We sometimes use third-party web services on this site. For
				example, to display certain elements (images, videos,
				presentations, etc.), organizing surveys, etc. As in in the case of
				social media access buttons, we cannot prevent these sites or
				external domains from collecting information about how you use the
				{`site's`} content.
				<br />
				<br />
				How to manage cookies?
				<br />
				Most internet browsers are initially configured to automatic
				acceptance of cookies. At any time you can change your browser
				settings to block cookies or alert you when they are sent to your
				device (refer to the manual using a specific browser).
				<br />
				Disabling cookies may affect your online experience. If you use
				multiple devices and/or browsers to Internet access, the
				corresponding settings must be changed in each of them.
				<br />
				<br />
				Final provisions
				<br />
				At our sole discretion, we may change this from time to time.
				Notification.
				<br />
				If you have any questions, you can contact us using contacts,
				posted on our website.
			</p>
		</div>
	);
};

export default CookieNotice;
