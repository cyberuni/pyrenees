import type { Preview } from '@storybook/react'
import { IntlProvider } from 'react-intl'
// @ts-ignore
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
		(Story) => (
			<IntlProvider locale="en-US" defaultLocale="en-US">
				<Story />
			</IntlProvider>
		),
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
