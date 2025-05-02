import type { Meta, StoryObj } from '@storybook/react'
import { CloseButton } from './close-button.js'

const meta: Meta<typeof CloseButton> = {
	title: 'components/buttons/CloseButton/size',
	component: CloseButton,
	parameters: {
		layout: 'centered',
	},
}

export default meta
type Story = StoryObj<typeof CloseButton>

export const Small: Story = {
	name: 'sm',
	args: {
		appearance: 'primary',
		size: 'sm',
	},
}

export const Medium: Story = {
	name: 'md',
	args: {
		appearance: 'primary',
		size: 'md',
	},
}
export const Large: Story = {
	name: 'lg',
	args: {
		appearance: 'primary',
		size: 'lg',
	},
}
