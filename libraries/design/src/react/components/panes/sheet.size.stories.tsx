import type { Meta, StoryObj } from '@storybook/react'
import { expect, userEvent } from '@storybook/test'
import { useState } from 'react'
import { Button, Header } from '../../index.js'
import { Sheet } from './sheet.js'

const meta: Meta = {
	title: 'components/panes/Sheet/size',
	component: Sheet,
	tags: ['props'],
}

export default meta

type Story = StoryObj<typeof meta>

export const XS: Story = {
	name: 'xs',
	args: {
		title: 'Extra Small Sheet',
		size: 'xs',
	},
	render(args) {
		const [isOpen, setIsOpen] = useState(false)
		return (
			<>
				<Button onClick={() => setIsOpen(true)}>Open Sheet</Button>
				<Sheet {...args} isOpen={isOpen} onClose={() => setIsOpen(false)}>
					<Header title="Extra Small Sheet" />
				</Sheet>
			</>
		)
	},
	play: async ({ canvas }) => {
		const btn = await canvas.findByRole('button', { name: 'Open Sheet' })
		await userEvent.click(btn)
		await expect(canvas.getByText('Extra Small Sheet')).toBeInTheDocument()
	},
}

export const SM: Story = {
	name: 'sm',
	args: {
		title: 'Small Sheet',
		size: 'sm',
	},
	render(args) {
		const [isOpen, setIsOpen] = useState(false)
		return (
			<>
				<Button onClick={() => setIsOpen(true)}>Open Sheet</Button>
				<Sheet {...args} isOpen={isOpen} onClose={() => setIsOpen(false)}>
					<Header title="Small Sheet" />
				</Sheet>
			</>
		)
	},
	play: async ({ canvas }) => {
		const btn = await canvas.findByRole('button', { name: 'Open Sheet' })
		await userEvent.click(btn)
		await expect(canvas.getByText('Small Sheet')).toBeInTheDocument()
	},
}

export const MD: Story = {
	name: 'md',
	args: {
		title: 'Medium Sheet',
		size: 'md',
	},
	render(args) {
		const [isOpen, setIsOpen] = useState(false)
		return (
			<>
				<Button onClick={() => setIsOpen(true)}>Open Sheet</Button>
				<Sheet {...args} isOpen={isOpen} onClose={() => setIsOpen(false)}>
					<Header title="Medium Sheet" />
				</Sheet>
			</>
		)
	},
	play: async ({ canvas }) => {
		const btn = await canvas.findByRole('button', { name: 'Open Sheet' })
		await userEvent.click(btn)
		await expect(canvas.getByText('Medium Sheet')).toBeInTheDocument()
	},
}

export const LG: Story = {
	name: 'lg',
	args: {
		title: 'Large Sheet',
		size: 'lg',
	},
	render(args) {
		const [isOpen, setIsOpen] = useState(false)
		return (
			<>
				<Button onClick={() => setIsOpen(true)}>Open Sheet</Button>
				<Sheet {...args} isOpen={isOpen} onClose={() => setIsOpen(false)}>
					<Header title="Large Sheet" />
				</Sheet>
			</>
		)
	},
	play: async ({ canvas }) => {
		const btn = await canvas.findByRole('button', { name: 'Open Sheet' })
		await userEvent.click(btn)
		await expect(canvas.getByText('Large Sheet')).toBeInTheDocument()
	},
}

export const XL: Story = {
	name: 'xl',
	args: {
		title: 'Extra Large Sheet',
		size: 'xl',
	},
	render(args) {
		const [isOpen, setIsOpen] = useState(false)
		return (
			<>
				<Button onClick={() => setIsOpen(true)}>Open Sheet</Button>
				<Sheet {...args} isOpen={isOpen} onClose={() => setIsOpen(false)}>
					<Header title="Extra Large Sheet" />
				</Sheet>
			</>
		)
	},
	play: async ({ canvas }) => {
		const btn = await canvas.findByRole('button', { name: 'Open Sheet' })
		await userEvent.click(btn)
		await expect(canvas.getByText('Extra Large Sheet')).toBeInTheDocument()
	},
}
