import type { Meta, StoryObj } from '@storybook/react'
import { expect, within } from '@storybook/test'
import { defineStorySwatchParam, withStorySwatch } from '../../../storybook/index.js'
import { CopilotIcon } from '../../icons/copilot-icon.js'
import { DashboardIcon } from '../../icons/dashboard-icon.js'
import { CloseButton, ControlBar, Header, Heading, IconButton, TitleContainer } from '../../index.js'

const meta: Meta<typeof Header> = {
	title: 'components/containers/Header',
	component: Header,
	decorators: [
		withStorySwatch({
			className: 'pds:w-80 pds:p-0 pds:items-stretch',
		}),
	],
	tags: ['cat:container'],
}

export default meta

type Story = StoryObj<typeof Header>

export const WithStringTitle: Story = {
	args: {
		title: 'String Title',
	},
	async play({ canvasElement }) {
		const canvas = await within(canvasElement)
		const title = await canvas.getByRole('heading', { name: 'String Title' })
		expect(title).toBeInTheDocument()
	},
}

export const WithHeadingTitle: Story = {
	args: {
		title: <Heading level={2}>H2 title</Heading>,
	},
	async play({ canvasElement }) {
		const canvas = await within(canvasElement)
		const title = await canvas.getByText('H2 title')
		expect(title.nodeName).toEqual('H2')
		expect(title.parentElement?.nodeName, 'parent should be div').toEqual('DIV')
	},
}

export const WithTitlePanel: Story = {
	args: {
		title: <TitleContainer title="Title" description="description" />,
	},
}

export const WithClose: Story = {
	args: {
		title: 'Title',
		controls: <CloseButton />,
	},
}

export const WithSingleControl: Story = {
	args: {
		title: 'Title',
		controls: (
			<IconButton>
				<CopilotIcon />
			</IconButton>
		),
	},
}

export const WithControlBar: Story = {
	parameters: defineStorySwatchParam({ className: 'pds:w-80 pds:p-0 pds:items-stretch' }),
	args: {
		title: 'Title',
	},
	render(args) {
		return (
			<Header
				{...args}
				controls={
					<ControlBar>
						<IconButton>
							<CopilotIcon />
						</IconButton>
						<IconButton>
							<CopilotIcon />
						</IconButton>
					</ControlBar>
				}
			/>
		)
	},
}

export const WithEverything: Story = {
	args: {
		title: <TitleContainer title="Title" description="description" icon={<DashboardIcon />} />,
		controls: (
			<ControlBar>
				<IconButton>
					<CopilotIcon />
				</IconButton>
				<IconButton>
					<CopilotIcon />
				</IconButton>
			</ControlBar>
		),
	},
}
