import { useEffect } from 'react'

const useClickOutside = (
	ref: React.MutableRefObject<HTMLElement | null>,
	callback: () => void
) => {
	const handleClick = (event: MouseEvent) => {
		if (ref.current && !ref.current.contains(event.target as Node)) {
			callback()
		}
	}

	useEffect(() => {
		document.addEventListener('mouseup', handleClick)

		return () => {
			document.removeEventListener('mouseup', handleClick)
		}
	}, [])
}

export { useClickOutside }
