import type { Meta, StoryObj } from '@storybook/react'
import { StatusBadge } from '../../index.js'

const meta: Meta<typeof StatusBadge> = {
	title: 'components/badges/StatusBadge',
	component: StatusBadge,
	parameters: {
		layout: 'centered',
	},
}

export default meta
type Story = StoryObj<typeof StatusBadge>

export const StatusVariants: Story = {
	render: () => (
		<div className="pds:flex pds:flex-col pds:gap-4">
			<div className="pds:flex pds:gap-2 pds:items-center">
				<StatusBadge status="error" />
				<StatusBadge status="warning" />
				<StatusBadge status="caution" />
				<StatusBadge status="success" />
				<StatusBadge status="info" />
			</div>
		</div>
	),
}
