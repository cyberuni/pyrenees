import type { Meta, StoryObj } from '@storybook/react'
import { defineLayoutParam, defineStoryRootParam } from '../storybook/index.js'
import { AppContainer, Page } from './index.js'

export default {
	tags: ['new', 'cat:pane', 'version:1.0.0'],
	component: Page,
	decorators: [
		(Story) => (
			<AppContainer>
				<Story />
			</AppContainer>
		),
	],
	parameters: {
		...defineLayoutParam('fullscreen'),
		...defineStoryRootParam({
			themes: {
				dark: {
					style: { backgroundColor: 'var(--pds-color-steel-gray-850' },
				},
				light: {
					style: { backgroundColor: 'var(--pds-color-steel-gray-850' },
				},
			},
		}),
	},
} satisfies Meta

export const BasicUsage: StoryObj = {
	render() {
		return <Page className="pds:flex pds:justify-center pds:items-center">Page component.</Page>
	},
}
