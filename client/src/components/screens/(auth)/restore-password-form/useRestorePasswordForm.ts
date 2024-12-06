import authService from '@/services/auth/auth.service'
import { IEmail } from '@/shared/types/form.types'
import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import { useRef, useTransition } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'
import { SubmitHandler, useForm } from 'react-hook-form'
import toast from 'react-hot-toast'

const useRestorePasswordForm = () => {
	const { register, handleSubmit, reset } = useForm<IEmail>()

	const router = useRouter()

	const [isPending, startTransition] = useTransition()

	const recaptchaRef = useRef<ReCAPTCHA>(null)

	const { mutate: mutateRestorePassword, isPending: isRestorePending } =
		useMutation({
			mutationKey: ['restore-password'],
			mutationFn: (data: IEmail) =>
				authService.getRestorePassword(
					data,
					recaptchaRef?.current?.getValue()
				),
			onSuccess() {
				startTransition(() => {
					toast.success('Temporary password sent by email')
					reset()
					router.replace('/login')
				})
			},
			onError(error) {
				if (axios.isAxiosError(error)) {
					toast.error(`Restore password: ${error.response?.data?.message}`)
					recaptchaRef.current.reset()
				}
			}
		})

	const onSubmit: SubmitHandler<IEmail> = (data) => {
		const token = recaptchaRef?.current?.getValue()

		if (!token) {
			toast.error('Pass the captcha!')
			return
		}

		mutateRestorePassword(data)
	}

	const isLoading = isPending || isRestorePending

	return {
		register,
		handleSubmit,
		onSubmit,
		recaptchaRef,
		isLoading
	}
}

export default useRestorePasswordForm
