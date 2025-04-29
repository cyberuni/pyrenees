import type { Preview } from '@storybook/react'
import { defineDarkModeParam, ThemedDocsContainer, withThemedStoryRoot } from '../src/storybook/index.js'

import '../fonts/lato.css'
import '../src/tailwind.css'

const preview: Preview = {
	decorators: [
		withThemedStoryRoot({
			style: {
				fontFamily: 'var(--pds-font-lato)',
				color: 'var(--pds-text-color-primary)',
			},
			themes: {
				dark: { style: { backgroundColor: 'var(--pds-color-steel-gray-1150)' }, 'data-theme': 'dark' },
				light: { style: { backgroundColor: 'var(--pds-color-steel-gray-150)' }, 'data-theme': 'light' },
			},
		}),
	],
	parameters: {
		backgrounds: { disable: true },
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
		docs: { container: ThemedDocsContainer },
		...defineDarkModeParam(),
	},
}

export default preview
