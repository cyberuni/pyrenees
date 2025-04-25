import type { Meta, StoryObj } from '@storybook/react'
import { Badge } from './badge'

const meta: Meta<typeof Badge> = {
	title: 'Components/Badge',
	component: Badge,
	parameters: {
		layout: 'centered',
	},
}

export default meta
type Story = StoryObj<typeof Badge>

export const BasicUsage: Story = {
	args: {
		children: 'Badge',
		className: 'pds:bg-blue-500 pds:text-white',
	},
}

export const WithIcon: Story = {
	args: {
		children: (
			<>
				<span className="pds:mr-1">🔥</span>
				<span>Hot Badge</span>
			</>
		),
		className: 'pds:bg-red-100 pds:text-red-800 pds:flex pds:items-center',
	},
}

export const MultipleBadges: Story = {
	render() {
		return (
			<div className="pds:flex pds:gap-2">
				<Badge className="pds:bg-blue-500 pds:text-white">Default</Badge>
				<Badge className="pds:bg-green-100 pds:text-green-800">Success</Badge>
				<Badge className="pds:bg-red-100 pds:text-red-800">Error</Badge>
			</div>
		)
	},
}
