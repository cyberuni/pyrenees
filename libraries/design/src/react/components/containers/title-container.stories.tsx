import type { Meta, StoryObj } from '@storybook/react'
import { expect, within } from '@storybook/test'
import { withStorySwatch } from '../../../storybook/index.js'
import { DashboardIcon } from '../../icons/dashboard-icon.js'
import { Heading, TitleContainer } from '../../index.js'

const meta: Meta<typeof TitleContainer> = {
	title: 'components/containers/TitleContainer',
	component: TitleContainer,
	decorators: [withStorySwatch()],
	tags: ['cat:container'],
}

export default meta

type Story = StoryObj<typeof TitleContainer>

export const StringTitle: Story = {
	args: {
		title: 'String Title',
	},
	async play({ canvasElement }) {
		const canvas = await within(canvasElement)
		const title = await canvas.getByRole('heading', { name: 'String Title' })
		expect(title).toBeInTheDocument()
	},
}

export const CustomTitle: Story = {
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

export const WithDescription: Story = {
	args: {
		title: 'Title',
		description: 'description',
	},
}

export const WithCustomDescription: Story = {
	args: {
		title: 'Title',
	},
	render(args) {
		return (
			<TitleContainer
				{...args}
				description={
					<span>
						<span className="pds:text-red-600">Custom</span> description
					</span>
				}
			/>
		)
	},
}
export const WithIcon: Story = {
	/**
	 * TODO: gap is set to `gap-1` instead of `gap-0.5` in figma.
	 * `gap-1` should be a better choice as it is more consistent with the overall design.
	 */
	args: {
		title: 'Title with Icon',
		icon: <DashboardIcon />,
	},
}
