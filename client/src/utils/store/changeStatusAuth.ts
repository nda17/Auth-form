import { setAuthStatus } from '@/store/auth-status/auth-status.slice'
import { useDispatch } from 'react-redux'

export const changeStatusAuth = async (status: boolean) => {
	const dispatch = useDispatch()

	dispatch(setAuthStatus(status))
}
