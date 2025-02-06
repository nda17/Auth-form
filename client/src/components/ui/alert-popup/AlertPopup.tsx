import styles from '@/components/ui/alert-popup/AlertPopup.module.scss';
import { IAlertPopup } from '@/components/ui/alert-popup/alert-popup.interface';
import Heading from '@/components/ui/heading/Heading';
import { useClickOutside } from '@/hooks/useClickOutside';
import { useAlertPopupStore } from '@/store/alert-popup-store/alert-popup-store';
import { useVeilBackgroundStore } from '@/store/veil-background-store/veil-background-store';
import clsx from 'clsx';
import { FC, useRef } from 'react';

const AlertPopup: FC<IAlertPopup> = ({ removeHandler, text }) => {
	const popupRef = useRef(null);

	const changeVisibleVeilBackground = useVeilBackgroundStore(
		state => state.setVisible
	);
	const visiblePopup = useAlertPopupStore(state => state.visible);
	const changeVisiblePopup = useAlertPopupStore(state => state.setVisible);
	const id = useAlertPopupStore(state => state.itemId);
	const clearStatePopup = useAlertPopupStore(state => state.clear);

	const closePopup = () => {
		changeVisibleVeilBackground();
		changeVisiblePopup();
	};

	useClickOutside(popupRef, () => closePopup());

	return (
		visiblePopup && (
			<div className={styles.wrapper} ref={popupRef}>
				<Heading text="Are you sure ?" />
				<span className={styles.text}>{text}</span>
				<div className={clsx(styles['buttons-wrapper'])}>
					<button
						aria-label="Delete"
						className={styles.button}
						type="button"
						onClick={() => {
							removeHandler(id);
							closePopup();
							clearStatePopup();
						}}
					>
						Delete
					</button>
					<button
						aria-label="Cancel"
						className={styles.button}
						type="button"
						onClick={() => {
							clearStatePopup();
							closePopup();
						}}
					>
						Cancel
					</button>
				</div>
			</div>
		)
	);
};

export default AlertPopup;
