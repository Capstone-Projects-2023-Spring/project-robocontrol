import { useEffect, useState } from 'react'

import debounce from 'lodash.debounce'

export const useWindowSize = (): {width: number, height: number} => {
	const [dimensions, setDimensions] = useState({ width: window.innerWidth, height: window.innerHeight })

	useEffect(() => {
		const handler = debounce(() => {
			setDimensions({ width: window.innerWidth, height: window.innerHeight })
		}, 10)

		window.addEventListener('scroll', handler)
		window.addEventListener('resize', handler)

		return () => {
			window.removeEventListener('scroll', handler)
			window.removeEventListener('resize', handler)
		}
	})

	return dimensions
}

export const getScrollY = (): {scroll: number} => {
	// eslint-disable-next-line react-hooks/rules-of-hooks
	const [scroll, setScroll] = useState({ scroll: window.scrollY })

	// eslint-disable-next-line react-hooks/rules-of-hooks
	useEffect(() => {
		const handler = debounce(() => {
			setScroll({ scroll: window.scrollY })
		}, 10)

		window.addEventListener('scroll', handler)
		window.addEventListener('resize', handler)

		return () => {
			window.removeEventListener('scroll', handler)
			window.removeEventListener('resize', handler)
		}
	})

	return scroll
}

export const scrollToTop = (): void =>{
	window.scrollTo({
		top: 0,
		behavior: 'smooth'
	})
}

export const SetVariableCssVars = (): void => {
	useEffect(() => {
		const setVh = debounce(() => {
			document.documentElement.style.setProperty('--vh', `${window.innerWidth}px`)
			document.documentElement.style.setProperty('--vh-npx', `${window.innerWidth}`)
		}, 10)

		window.addEventListener('resize', setVh)

		return () => {
			window.removeEventListener('resize', setVh)
		}
	})
}

function getWindowDimensions(): {width: number, height: number} {
	const { innerWidth: width, innerHeight: height } = window
	return {
		width,
		height
	}
}

export default function useWindowDimensions(): {width: number, height: number} {
	const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions())

	useEffect(() => {
		setWindowDimensions(getWindowDimensions())
	}, [])

	return windowDimensions
}
