import type { Meta, StoryObj } from '@storybook/react'
import { defineLayoutParam, defineStoryRootParam } from '../../../storybook/index.js'
import { CopilotIcon } from '../../icons/copilot-icon.js'
import { DashboardIcon } from '../../icons/dashboard-icon.js'
import { AppContainer, BodyContainer, ControlBar, Header, IconButton, Page } from '../../index.js'

export default {
	title: 'components/panels/Page',
	component: Page,
	tags: ['new', 'cat:pane', 'version:1.0.0'],
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
		return (
			<Page>
				<Header
					title="Page Header"
					controls={
						<ControlBar>
							<IconButton>
								<DashboardIcon />
							</IconButton>
							<IconButton>
								<CopilotIcon />
							</IconButton>
						</ControlBar>
					}
				/>
				<BodyContainer>Page content</BodyContainer>
			</Page>
		)
	},
}
