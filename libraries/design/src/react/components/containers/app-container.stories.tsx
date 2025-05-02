import type { Meta, StoryObj } from '@storybook/react'
import { defineLayoutParam, defineStoryRootParam } from '../../../storybook/index.js'
import { AppContainer, CodeBadge } from '../../index.js'

export default {
	title: 'components/containers/AppContainer',
	component: AppContainer,
	tags: ['new', 'cat:container'],
	parameters: {
		...defineLayoutParam('fullscreen'),
		...defineStoryRootParam({
			themes: {
				dark: {
					style: { backgroundColor: 'var(--pds-color-steel-gray-850)' },
				},
				light: {
					style: { backgroundColor: 'var(--pds-color-steel-gray-850)' },
				},
			},
		}),
	},
} satisfies Meta

export const Specification: StoryObj = {
	render() {
		return (
			<AppContainer className="pds:flex pds:justify-center pds:items-center pds:relative pds:text-xs">
				<p className="pds:text-center">
					The <CodeBadge>AppContainer</CodeBadge> claims the full screen width and height, and layout its children as
					flex.
				</p>
				<div className="pds:top-0 pds:left-0 pds:absolute">top-left</div>
				<div className="pds:top-0 pds:right-0 pds:absolute">top-right</div>
				<div className="pds:bottom-0 pds:left-0 pds:absolute">bottom-left</div>
				<div className="pds:right-0 pds:bottom-0 pds:absolute">bottom-right</div>
			</AppContainer>
		)
	},
}
