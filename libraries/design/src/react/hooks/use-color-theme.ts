import { useEffect, useState } from 'react'
import { getColorTheme, observeColorTheme, type ColorTheme } from '../../utils/color-theme.js'

export function useColorTheme() {
	const [colorTheme, setColorTheme] = useState<ColorTheme>(getColorTheme())

	useEffect(() => {
		const observer = observeColorTheme(setColorTheme)
		return () => observer.disconnect()
	}, [])
	return colorTheme
}
