import { createSlice } from '@reduxjs/toolkit'
import { IHamburgerInitialState } from './hamburger.interface'

const initialState: IHamburgerInitialState = {
	visible: false
}

export const hamburgerSlice = createSlice({
	name: 'hamburger',
	initialState,
	reducers: {
		setVisibleHamburger: (state, action) => {
			state.visible = action.payload
		}
	}
})

export const { setVisibleHamburger } = hamburgerSlice.actions
export const { reducer } = hamburgerSlice
