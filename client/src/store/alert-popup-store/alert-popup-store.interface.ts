export interface IAlertPopupStore {
	itemId: string
	visible: boolean
	setVisible: () => void
	addId: (id: string) => void
	clear: () => void
}
