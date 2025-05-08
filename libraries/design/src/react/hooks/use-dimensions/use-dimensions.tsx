import { useEffect, useState } from 'react'

export interface Dimensions {
	width?: number
	height?: number
	left?: number
	top?: number
}

function getDimensions(target: HTMLElement | Window | null): Dimensions {
	if (target instanceof HTMLElement) {
		return target.getBoundingClientRect()
	}
	if (target === null) {
		return {}
	}
	return {
		width: target.innerWidth,
		height: target.innerHeight
	}
}

/**
 * This hook is used to retrieve the dimensions of the window or element provided.
 */
export function useDimensions(element?: {
	ref: React.MutableRefObject<HTMLElement | null> | null
}) {
	const [dimensions, setDimensions] = useState<Dimensions>(
		getDimensions(element === undefined ? window : element.ref?.current ?? null)
	)

	useEffect(() => {
		let isMounted = true
		const target = element === undefined ? window : element.ref?.current ?? null
		function handleResize() {
			if (isMounted) setDimensions(getDimensions(target))
		}
		let resizeObserver: ResizeObserver | null = null
		if (target instanceof HTMLElement) {
			resizeObserver = new ResizeObserver(handleResize)
			resizeObserver.observe(target)
		} else if (element === undefined) {
			window.addEventListener('resize', handleResize)
		}
		return () => {
			isMounted = false
			if (element === undefined) {
				window.removeEventListener('resize', handleResize)
			} else if (target) {
				resizeObserver?.disconnect()
			}
		}
	}, [])

	return dimensions
}
