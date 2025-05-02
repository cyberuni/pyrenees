import type { Meta, StoryObj } from '@storybook/react'
import { CloseButton } from './close-button.js'

const meta: Meta<typeof CloseButton> = {
	title: 'components/buttons/CloseButton/variant',
	component: CloseButton,
	parameters: {
		layout: 'centered',
	},
}

export default meta
type Story = StoryObj<typeof CloseButton>

export const Primary: Story = {
	name: 'primary',
	args: {
		appearance: 'primary',
	},
}

export const Secondary: Story = {
	name: 'secondary',
	args: {
		appearance: 'secondary',
	},
}

export const SecondaryClear: Story = {
	name: 'secondary-clear',
	args: {
		appearance: 'secondary-clear',
	},
}

export const Tertiary: Story = {
	name: 'tertiary',
	args: {
		appearance: 'tertiary',
	},
}

export const TertiaryClear: Story = {
	name: 'tertiary-clear',
	args: {
		appearance: 'tertiary-clear',
	},
}

export const PrimaryDestructive: Story = {
	name: 'primary-destructive',
	args: {
		appearance: 'primary-destructive',
	},
}

export const SecondaryDestructive: Story = {
	name: 'secondary-destructive',
	args: {
		appearance: 'secondary-destructive',
	},
}
