import { IVeilBackgroundStore } from '@/store/veil-background-store/veil-background-store.interface'
import { create } from 'zustand'

export const useVeilBackgroundStore = create<IVeilBackgroundStore>(
	(set) => ({
		visible: false,
		setVisible: () => set((state) => ({ visible: !state.visible }))
	})
)
