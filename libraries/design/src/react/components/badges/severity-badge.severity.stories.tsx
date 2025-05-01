import type { Meta, StoryObj } from '@storybook/react'
import { SeverityBadge } from '../../index.js'

const meta: Meta<typeof SeverityBadge> = {
	title: 'components/badges/SeverityBadge/severity',
	component: SeverityBadge,
	parameters: {
		layout: 'centered',
	},
}

export default meta
type Story = StoryObj<typeof SeverityBadge>

export const Default: Story = {
	name: 'default = critical',
	args: {},
}

export const Critical: Story = {
	name: 'critical',
	args: {
		severity: 'critical',
	},
}

export const High: Story = {
	name: 'high',
	args: {
		severity: 'high',
	},
}

export const Medium: Story = {
	name: 'medium',
	args: {
		severity: 'medium',
	},
}

export const Low: Story = {
	name: 'low',
	args: {
		severity: 'low',
	},
}

export const Lowest: Story = {
	name: 'lowest',
	args: {
		severity: 'lowest',
	},
}
