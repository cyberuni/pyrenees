import type { ThemeVars } from '@storybook/theming'

export interface DarkModeParam {
	current?: 'light' | 'dark' | undefined
	darkClass?: string | undefined
	lightClass?: string | undefined
	dark?: Partial<ThemeVars> | undefined
	stylePreview?: boolean | undefined
	classTarget?: 'html' | 'body' | undefined
}

const defaultDarkModeParam: DarkModeParam = {
	current: 'dark',
	darkClass: 'dark',
	lightClass: 'light',
	stylePreview: true,
	classTarget: 'html',
}

/**
 * Defines a dark mode parameter for Storybook stories.
 *
 * @param darkMode - Optional dark mode parameter that overrides default values
 * @returns A Storybook parameter object with the configured dark mode settings
 */
export function defineDarkModeParam(darkMode?: DarkModeParam | undefined) {
	return {
		darkMode: {
			...defaultDarkModeParam,
			...darkMode,
		},
	}
}
