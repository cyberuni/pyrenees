import type { Meta, StoryObj } from '@storybook/react'
import { CodeBadge } from '../../index.js'

const meta: Meta<typeof CodeBadge> = {
	title: 'components/badges/CodeBadge',
	component: CodeBadge,
	parameters: {
		layout: 'centered',
	},
}

export default meta
type Story = StoryObj<typeof CodeBadge>

export const BasicUsage: Story = {
	args: {
		children: 'Badge Text',
	},
}
