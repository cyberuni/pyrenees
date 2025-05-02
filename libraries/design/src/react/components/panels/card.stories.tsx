import type { Meta, StoryObj } from '@storybook/react'
import { defineLayoutParam } from '../../../storybook/index.js'
import { CopilotIcon } from '../../icons/copilot-icon.js'
import { DashboardIcon } from '../../icons/dashboard-icon.js'
import { AppContainer, BodyContainer, Card, ControlBar, Header, IconButton, Page } from '../../index.js'

export default {
	title: 'components/panels/Card',
	component: Card,
	tags: ['new', 'cat:pane', 'version:1.0.0'],
	decorators: [
		(Story) => (
			<AppContainer>
				<Page>
					<Story />
				</Page>
			</AppContainer>
		),
	],
	parameters: defineLayoutParam('fullscreen'),
} satisfies Meta

export const BasicUsage: StoryObj = {
	render() {
		return (
			<BodyContainer>
				<Card>
					<Header
						title="Card Title"
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
					<BodyContainer>Card content</BodyContainer>
				</Card>
			</BodyContainer>
		)
	},
}
