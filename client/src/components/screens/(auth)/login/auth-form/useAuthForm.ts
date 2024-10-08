import { useNavigationContext } from '@/providers/navigation-provider/NavigationProvider'
import authService from '@/services/auth/auth.service'
import { IFormData } from '@/shared/types/form.types'
import { setAuthStatus } from '@/store/auth-status/auth-status.slice'
import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import { useRef, useTransition } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'
import { SubmitHandler, useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import { useDispatch } from 'react-redux'

const useAuthForm = (isLogin: boolean) => {
	const { previousRoute } = useNavigationContext()

	const { register, handleSubmit, reset } = useForm<IFormData>()

	const router = useRouter()

	const [isPending, startTransition] = useTransition()

	const recaptchaRef = useRef<ReCAPTCHA>(null)

	const dispatch = useDispatch()

	const changeStateAuth = () => {
		dispatch(setAuthStatus(true))
	}

	const { mutate: mutateLogin, isPending: isLoginPending } = useMutation({
		mutationKey: ['login'],
		mutationFn: (data: IFormData) =>
			authService.main('login', data, recaptchaRef?.current?.getValue()),
		onSuccess() {
			startTransition(() => {
				changeStateAuth()
				toast.success('Successful login')
				reset()

				router.replace(previousRoute)
			})
		},
		onError(error) {
			if (axios.isAxiosError(error)) {
				toast.error(error.response?.data?.message)
				recaptchaRef.current.reset()
			}
		}
	})

	const { mutate: mutateRegister, isPending: isRegisterPending } =
		useMutation({
			mutationKey: ['register'],
			mutationFn: (data: IFormData) =>
				authService.main(
					'register',
					data,
					recaptchaRef?.current?.getValue()
				),
			onSuccess() {
				startTransition(() => {
					reset()
					toast.success('Successful register')
					router.push('/')
				})
			},
			onError(error) {
				if (axios.isAxiosError(error)) {
					toast.error(error.response?.data?.message)
					recaptchaRef.current.reset()
				}
			}
		})

	const onSubmit: SubmitHandler<IFormData> = (data) => {
		const token = recaptchaRef?.current?.getValue()

		if (!token) {
			toast.error('Pass the captcha!')
			return
		}

		isLogin ? mutateLogin(data) : mutateRegister(data)
	}

	const isLoading = isPending || isLoginPending || isRegisterPending

	return {
		register,
		handleSubmit,
		onSubmit,
		recaptchaRef,
		isLoading
	}
}

export default useAuthForm
