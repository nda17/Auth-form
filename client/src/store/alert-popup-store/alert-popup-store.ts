import { IAlertPopupStore } from '@/store/alert-popup-store/alert-popup-store.interface'
import { create } from 'zustand'

export const useAlertPopupStore = create<IAlertPopupStore>((set) => ({
	itemId: '',
	visible: false,
	addId: (id: string) => set(() => ({ itemId: id })),
	clear: () => set({ itemId: '' }),
	setVisible: () => set((state) => ({ visible: !state.visible }))
}))
