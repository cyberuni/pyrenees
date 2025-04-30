import type { Meta, StoryObj } from '@storybook/react'
import { defineLayoutParam, defineStoryRootParam } from '../../storybook/index.js'
import { AppContainer, Page } from './index.js'

export default {
	title: 'components/AppContainer',
	component: AppContainer,
	tags: ['new', 'cat:container'],
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

export const Specification: StoryObj = {
	render() {
		return (
			<AppContainer>
				<Page className="pds:flex pds:justify-center pds:items-center pds:relative">
					The <code>AppContainer</code> claim the full screen width and height, and flex its children.
					<div className="pds:top-0 pds:left-0 pds:absolute">top-left</div>
					<div className="pds:top-0 pds:right-0 pds:absolute">top-right</div>
					<div className="pds:bottom-0 pds:left-0 pds:absolute">bottom-left</div>
					<div className="pds:right-0 pds:bottom-0 pds:absolute">bottom-right</div>
				</Page>
			</AppContainer>
		)
	},
}
