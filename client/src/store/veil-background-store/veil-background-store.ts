import { IVeilBackgroundStore } from '@/store/hamburger-store/hamburger-store.interface'
import { create } from 'zustand'

export const useVeilBackgroundStore = create<IVeilBackgroundStore>(
	(set) => ({
		visible: false,
		setVisible: () => set((state) => ({ visible: !state.visible }))
	})
)
