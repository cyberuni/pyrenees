import { ctx } from './color-theme.ctx.js'

export type ColorTheme = 'dark' | 'light'

/**
 * Returns the current color theme based on document attributes and system preferences.
 *
 * @returns {ColorTheme} The current color theme ('dark' or 'light').
 */
export function getColorTheme(): ColorTheme {
	const root = ctx.getDocumentElement()
	const dataTheme = root.getAttribute('data-theme')
	if (dataTheme) return dataTheme as ColorTheme

	if (root.classList.contains('dark')) return 'dark'
	if (root.classList.contains('light')) return 'light'

	const isDarkScheme = ctx.matchMedia('(prefers-color-scheme: dark)').matches
	return isDarkScheme ? 'dark' : 'light'
}

/**
 * Observes changes in the color theme and calls the provided callback when it changes.
 *
 * @param callback - A function to be called when the color theme changes.
 * @returns {MutationObserver} The observer instance, which can be used to disconnect the observer.
 */
export function observeColorTheme(callback: (theme: ColorTheme) => void) {
	const observer = new MutationObserver(() => {
		callback(getColorTheme())
	})

	observer.observe(ctx.getDocumentElement(), {
		attributes: true,
		attributeFilter: ['class', 'data-theme'],
	})
	return observer
}
