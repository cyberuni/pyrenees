import type { Preview } from '@storybook/react'
import { defineDarkMode, defineStoryRoot, ThemedDocsContainer, withThemedStoryRoot } from '../src/storybook/index.js'

import '../fonts/lato.css'
import '../src/tailwind.css'

const preview: Preview = {
	decorators: [withThemedStoryRoot()],
	parameters: {
		...defineStoryRoot({
			style: {
				fontFamily: 'var(--pds-font-lato)',
				color: 'var(--pds-text-color-primary)',
			},
			themes: {
				dark: { style: { backgroundColor: 'var(--pds-color-steel-gray-1150)' } },
				light: { style: { backgroundColor: 'var(--pds-color-steel-gray-150)' } },
			},
		}),
		backgrounds: { disable: true },
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
		docs: { container: ThemedDocsContainer },
		...defineDarkMode(),
	},
}

export default preview
