import type { Meta, StoryObj } from '@storybook/react'
import { StatusBadge } from '../../index.js'

const meta: Meta<typeof StatusBadge> = {
	title: 'components/badges/StatusBadge/status',
	component: StatusBadge,
	parameters: {
		layout: 'centered',
	},
}

export default meta
type Story = StoryObj<typeof StatusBadge>

export const Default: Story = {
	name: 'default = info',
	args: {},
}

export const ErrorStatus: Story = {
	name: 'error',
	args: {
		status: 'error',
	},
}

export const Warning: Story = {
	name: 'warning',
	args: {
		status: 'warning',
	},
}

export const Caution: Story = {
	name: 'caution',
	args: {
		status: 'caution',
	},
}

export const Success: Story = {
	name: 'success',
	args: {
		status: 'success',
	},
}

export const Info: Story = {
	name: 'info',
	args: {
		status: 'info',
	},
}
