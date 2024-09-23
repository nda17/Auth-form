import { IHamburgerInitialState } from '@/store/auth-status/auth-status.interface'
import { createSlice } from '@reduxjs/toolkit'

const initialState: IHamburgerInitialState = {
	isLoggedIn: false
}

export const authStatusSlice = createSlice({
	name: 'auth-status',
	initialState,
	reducers: {
		setAuthStatus: (state, action) => {
			state.isLoggedIn = action.payload
		}
	}
})

export const { setAuthStatus } = authStatusSlice.actions
export const { reducer } = authStatusSlice
