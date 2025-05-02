import type { Meta, StoryObj } from '@storybook/react'
import { tw } from '../../../index.js'
import { BodyContainer } from '../../index.js'

const meta: Meta = {
	title: 'components/containers/BodyContainer',
	component: BodyContainer,
	tags: ['cat:container'],
}

export default meta

type Story = StoryObj<typeof BodyContainer>

export const Empty: Story = {}

export const IsLoading: Story = {
	args: {
		isLoading: true,
	},
}

export const WithContent: Story = {
	args: {
		children: 'content',
	},
}

export const OverrideWidth: Story = {
	args: {
		className: tw`pds:border-solid pds:w-38`,
		children: 'Overridden width',
	},
}

export const Overflow: Story = {
	args: {
		className: tw`pds:border pds:border-solid  pds:w-1/2 pds:h-[200px]`,
		overflow: true,
		children: (
			<>
				<h3 className="pds:font-bold pds:mb-2">Overflow Example</h3>
				<p>This is a short paragraph that fits within the container.</p>
				<p className="pds:mt-2">
					This is a longer paragraph containing approximately forty words. It demonstrates how text will behave when it
					flows within the container. The content might wrap to multiple lines depending on the available width of the
					parent container element.
				</p>
				<ul className="pds:mt-2">
					<li>List item 1</li>
					<li>List item 2</li>
					<li>List item 3</li>
					<li>List item 4</li>
					<li>List item 5</li>
				</ul>
			</>
		),
	},
}
