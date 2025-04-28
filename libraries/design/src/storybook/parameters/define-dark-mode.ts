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

export function defineDarkMode(darkMode?: DarkModeParam | undefined) {
	return {
		darkMode: {
			...defaultDarkModeParam,
			...darkMode,
		},
	}
}
