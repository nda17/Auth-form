import styles from '@/components/screens/legal-documentation/privacy-policy/PrivacyPolicy.module.scss';
import Heading from '@/components/ui/heading/Heading';
import SubHeading from '@/components/ui/sub-heading/SubHeading';
import { NextPage } from 'next';

const PrivacyPolicy: NextPage = () => {
	return (
		<div className={styles.wrapper}>
			<Heading text="Privacy Policy" />

			<SubHeading text="1. Processed data" />
			<p>1.1. We do not collect your personal data using the Site.</p>
			<br />
			<p>
				1.2. All data collected on the Site is provided and accepted in
				anonymized form (hereinafter referred to as “Anonymized Data”).
			</p>
			<br />
			<p>
				1.3. Anonymized data includes the following information, which is
				not allow you to be identified:
			</p>
			<br />
			<p>
				1.3.1. Information you provide about yourself yourself using online
				forms and software modules of the Site, including name and
				telephone number and/or email address.
			</p>
			<br />
			<p>
				1.3.2. Data that is transferred in anonymized form to automatic
				mode depending on the settings you use software.
			</p>
			<br />
			<p>
				1.4. The administration has the right to establish requirements for
				the composition Anonymized User data that is collected using Site.
			</p>
			<br />
			<p>
				1.5.If certain information is not marked as mandatory, its
				provision or disclosure is at the {`User's`} discretion. At the
				same time, you give informed consent to access of an unlimited
				number of persons to such data. The specified data becomes publicly
				available from the moment it is provided and/or disclosed in
				another form.
			</p>
			<br />
			<p>
				1.6. The Administration verifies the accuracy of the data provided
				and the {`User's`} data; it is necessary to agree on their
				processing in accordance with this Policy, believing that the User
				applies in good faith, considers and makes all necessary efforts to
				keep such information up to date and obtains all necessary consents
				for its use.
			</p>
			<br />
			<p>
				1.7. You understand and accept the possibility of use on the Site
				software of third parties, as a result of which such parties can
				receive and transmit the data specified in the agreement to
				impersonal form.
			</p>
			<br />
			<p>
				1.8. Composition and conditions for collecting anonymized data
				using third party software are determined directly their copyright
				holders and may include:
			</p>
			<br />
			<p>* browser data (type, version, cookie);</p>
			<p>* device data and its location;</p>
			<p>* operating system data (type, version, screen resolution);</p>
			<p>* request data (time, referral source, IP address).</p>
			<br />
			<p>
				1.9. The administration is not responsible for the order use of the
				{`User's`} anonymized data by third parties.
			</p>
			<br />
			<SubHeading text="2. Purposes of data processing" />
			<p>
				2.1. The administration uses the data for the following purposes:
			</p>
			<br />
			<p>
				2.1.1. Processing incoming requests and communication with the
				User;
			</p>
			<br />
			<p>
				2.1.2. Information services, including newsletters advertising and
				information materials;
			</p>
			<br />
			<p>2.1.3. Carrying out marketing, statistical and other research;</p>
			<br />
			<p>2.1.4. Targeting advertising materials on the Site.</p>
			<br />

			<SubHeading text="3. Data protection requirements" />
			<p>
				3.1. The administration stores data and ensures it protection from
				unauthorized access and distribution in compliance with internal
				rules and regulations.
			</p>
			<br />
			<p>
				3.2. Confidentiality is maintained regarding the received data.
				except when they are made by the User publicly available, as well
				as when the technologies and third party software or settings used
				The software is intended to be open to the user exchange with these
				persons and/or other participants and users Internet networks.
			</p>
			<br />
			<p>
				3.3. In order to improve the quality of work, the Administration
				has the right to store log files about actions performed by the
				User within use of the Site for 1 (One) year.
			</p>
			<br />

			<SubHeading text="4. Data transfer" />
			<p>
				4.1. The administration has the right to transfer data to third
				parties in the following cases:
				<br />
			</p>
			<p>
				* The user has expressed his consent to such actions, including
				cases when the User uses the settings of the software used security
				that does not limit the provision of a certain information;
			</p>
			<p>
				* Transfer is necessary as part of the {`User's`} use functionality
				of the Site;
			</p>
			<p>
				* The transfer is required in accordance with the purposes of data
				processing;
			</p>
			<p>
				* In connection with the transfer of the Site into possession, use
				or property of such third party;
			</p>
			<p>
				* At the request of a court or other authorized government body
				within the framework of the procedure established by law;
			</p>
			<p>
				* To protect the rights and legitimate interests of the
				Administration in connection with violations committed by the User.
			</p>
			<br />

			<SubHeading text="5. Changes to the Privacy Policy" />
			<p>
				5.1. This Policy may be changed or terminated Administration
				unilaterally without prior User notifications. The new version of
				the Policy comes into force on the moment it is posted on the Site,
				unless otherwise provided by the new by the editors of the Policy.
			</p>
			<br />
			<p>
				5.2. The current version of the Policy is dated __________ 20__.
			</p>
		</div>
	);
};

export default PrivacyPolicy;
