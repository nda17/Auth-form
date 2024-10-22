import { IHamburgerStore } from '@/store/hamburger-store/hamburger-store.interface'
import { create } from 'zustand'

export const useHamburgerStore = create<IHamburgerStore>((set) => ({
	visible: false,
	setVisible: () => set((state) => ({ visible: !state.visible }))
}))
