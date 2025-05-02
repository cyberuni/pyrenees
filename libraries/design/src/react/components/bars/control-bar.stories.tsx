import type { Meta, StoryObj } from '@storybook/react'
import { tw } from '../../../index.js'
import { withStorySwatch } from '../../../storybook/index.js'
import { Button, CloseButton, ControlBar } from '../../index.js'

const meta: Meta<typeof ControlBar> = {
	title: 'components/layout/ControlBar',
	component: ControlBar,
	decorators: [withStorySwatch()],
}

export default meta

type Story = StoryObj<typeof ControlBar>

export const SingleControl: Story = {
	args: {
		children: <CloseButton />,
	},
}

export const WithMultipleControls: Story = {
	args: {
		children: (
			<>
				<Button appearance="secondary-clear">Export</Button>
				<Button appearance="primary">Refresh</Button>
			</>
		),
	},
}

export const CustomSpacing: Story = {
	args: {
		className: tw`pds:gap-4`,
		children: (
			<>
				<Button appearance="secondary-clear">Export</Button>
				<Button appearance="primary">Refresh</Button>
			</>
		),
	},
}

export const VerticalAlignment: Story = {
	args: {
		className: tw`pds:flex-col`,
		children: (
			<>
				<Button appearance="secondary-clear">Export</Button>
				<Button appearance="primary">Refresh</Button>
			</>
		),
	},
}
