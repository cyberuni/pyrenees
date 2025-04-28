import type { Preview } from '@storybook/react'
import { defineDarkMode, defineStoryRoot, ThemedDocsContainer, withThemedStoryRoot } from '../src/storybook/index.js'

import '../src/tailwind.css'

const preview: Preview = {
	decorators: [withThemedStoryRoot()],
	parameters: {
		...defineStoryRoot({
			dark: { backgroundColor: '#0B0F12' },
			light: { backgroundColor: '#E9EEF2' },
		}),
		backgrounds: {
			disable: true,
		},
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
		docs: {
			container: ThemedDocsContainer,
		},
		...defineDarkMode(),
	},
}

export default preview
