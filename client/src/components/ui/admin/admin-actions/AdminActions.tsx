import styles from '@/components/ui/admin/admin-actions/AdminActions.module.scss'
import { IAdminActions } from '@/components/ui/admin/admin-actions/admin-actions.interface'
import MaterialIcon from '@/components/ui/icons/MaterialIcon'
import { useAlertPopupStore } from '@/store/alert-popup-store/alert-popup-store'
import { useVeilBackgroundStore } from '@/store/veil-background-store/veil-background-store'
import { NextPage } from 'next'
import { useRouter } from 'next/navigation'

const AdminActions: NextPage<IAdminActions> = ({ editUrl, userId }) => {
	const { push } = useRouter()

	const changeVisibleVeilBackground = useVeilBackgroundStore(
		(state) => state.setVisible
	)
	const changeVisiblePopup = useAlertPopupStore(
		(state) => state.setVisible
	)
	const addIdInPopup = useAlertPopupStore((state) => state.addId)

	const changeStatePopup = () => {
		changeVisibleVeilBackground()
		changeVisiblePopup()
	}

	return (
		<div className={styles.wrapper}>
			<button className={styles.item} onClick={() => push(editUrl)}>
				<MaterialIcon name="MdEdit" />
			</button>
			<button
				className={styles.item}
				onClick={() => {
					changeStatePopup()
					addIdInPopup(userId)
				}}
			>
				<MaterialIcon name="MdClose" />
			</button>
		</div>
	)
}

export default AdminActions
