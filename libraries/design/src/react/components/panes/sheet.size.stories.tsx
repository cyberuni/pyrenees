import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { Button } from '../../index.js'
import { Sheet } from './sheet.js'

const meta: Meta = {
	title: 'components/panes/Sheet/size',
	component: Sheet,
	tags: ['props'],
}

export default meta

type Story = StoryObj<typeof meta>

export const ExtraSmall: Story = {
	args: {
		title: 'Extra Small Sheet',
		size: 'xs',
	},
	render(args) {
		const [isOpen, setIsOpen] = useState(false)
		return (
			<>
				<Button onClick={() => setIsOpen(true)}>Open Sheet</Button>
				<Sheet {...args} isOpen={isOpen} onClose={() => setIsOpen(false)} />
			</>
		)
	},
	// play: async ({ canvas }) => {
	// 	const btn = await canvas.findByRole('button', { name: 'Open Sheet' })
	// 	await userEvent.click(btn)
	// 	expect(canvas.getByText('Extra Small Sheet')).toBeInTheDocument()
	// },
}
