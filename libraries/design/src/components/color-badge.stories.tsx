import type { Meta, StoryObj } from '@storybook/react'
import { ColorBadge } from './color-badge.js'

const meta = {
	title: 'Components/ColorBadge',
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
	args: {
		children: 'Default',
	},
}

export const WithCustomClassName: Story = {
	args: {
		color: 'sky',
		children: 'Custom Class',
		className: 'pds:px-6 pds:py-2',
	},
}

export const AllColors: Story = {
	render: () => (
		<div className="pds:flex pds:flex-wrap pds:gap-2">
			<ColorBadge color="sky">Sky</ColorBadge>
			<ColorBadge color="purple">Purple</ColorBadge>
			<ColorBadge color="cyan">Cyan</ColorBadge>
			<ColorBadge color="green">Green</ColorBadge>
			<ColorBadge color="pink">Pink</ColorBadge>
			<ColorBadge color="indigo">Indigo</ColorBadge>
			<ColorBadge color="lime">Lime</ColorBadge>
			<ColorBadge color="steel-gray">Steel Gray</ColorBadge>
		</div>
	),
}
