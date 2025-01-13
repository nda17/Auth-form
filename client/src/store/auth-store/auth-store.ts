import { IAuthStore } from '@/store/auth-store/auth-store.interface';
import { create } from 'zustand';

export const useAuthStore = create<IAuthStore>(set => ({
	auth: false,
	setAuth: () => set(state => ({ auth: !state.auth }))
}));
