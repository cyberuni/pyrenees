import type { Meta, StoryObj } from '@storybook/react'
import { CloseButton } from './close-button.js'

const meta: Meta<typeof CloseButton> = {
	title: 'components/buttons/CloseButton',
	component: CloseButton,
	parameters: {
		layout: 'centered',
	},
	argTypes: {
		appearance: {
			control: 'select',
			options: [
				'primary',
				'secondary',
				'secondary-clear',
				'tertiary',
				'tertiary-clear',
				'primary-destructive',
				'secondary-destructive',
			],
			description: 'The visual style of the button',
			defaultValue: 'tertiary-clear',
		},
		isDisabled: {
			control: 'boolean',
			description: 'Whether the button is disabled',
		},
		size: {
			control: 'select',
			options: ['sm', 'md', 'lg'],
			description: 'The size of the button',
		},
		onClick: { action: 'clicked' },
	},
}

export default meta
type Story = StoryObj<typeof CloseButton>

export const Default: Story = {}

export const Disabled: Story = {
	args: {
		isDisabled: true,
	},
}

export const CustomChild: Story = {
	args: {
		children: <span>×</span>,
	},
}
