import type { Meta, StoryObj } from '@storybook/react'
import { ColorBadge } from './color-badge.js'

const meta = {
	title: 'Components/ColorBadge/color',
	component: ColorBadge,
	argTypes: {
		color: {
			control: 'select',
			options: ['sky', 'purple', 'cyan', 'green', 'pink', 'indigo', 'lime', 'steel-gray'],
			description: 'Color variant of the badge',
		},
		children: {
			control: 'text',
			description: 'Content displayed inside the badge',
		},
	},
} satisfies Meta<typeof ColorBadge>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
	name: 'sky (default)',
	args: {
		children: 'Default',
	},
}

export const Sky: Story = {
	name: 'sky',
	args: {
		color: 'sky',
		children: 'Sky',
	},
}

export const Purple: Story = {
	name: 'purple',
	args: {
		color: 'purple',
		children: 'Purple',
	},
}

export const Cyan: Story = {
	name: 'cyan',
	args: {
		color: 'cyan',
		children: 'Cyan',
	},
}

export const Green: Story = {
	name: 'green',
	args: {
		color: 'green',
		children: 'Green',
	},
}

export const Pink: Story = {
	name: 'pink',
	args: {
		color: 'pink',
		children: 'Pink',
	},
}

export const Indigo: Story = {
	name: 'indigo',
	args: {
		color: 'indigo',
		children: 'Indigo',
	},
}

export const Lime: Story = {
	name: 'lime',
	args: {
		color: 'lime',
		children: 'Lime',
	},
}

export const SteelGray: Story = {
	name: 'steel-gray',
	args: {
		color: 'steel-gray',
		children: 'Steel Gray',
	},
}
