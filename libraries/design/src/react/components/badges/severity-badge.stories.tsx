import type { Meta, StoryObj } from '@storybook/react'
import { SeverityBadge } from '../../index.js'

const meta: Meta<typeof SeverityBadge> = {
	title: 'components/badges/SeverityBadge',
	component: SeverityBadge,
	parameters: {
		layout: 'centered',
	},
}

export default meta
type Story = StoryObj<typeof SeverityBadge>

export const SeverityVariants: Story = {
	render: () => (
		<div className="pds:flex pds:flex-col pds:gap-4">
			<div className="pds:flex pds:gap-2 pds:items-center">
				<SeverityBadge severity="critical" />
				<SeverityBadge severity="high" />
				<SeverityBadge severity="medium" />
				<SeverityBadge severity="low" />
				<SeverityBadge severity="lowest" />
			</div>
		</div>
	),
}
