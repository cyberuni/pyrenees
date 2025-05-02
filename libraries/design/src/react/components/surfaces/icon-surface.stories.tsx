import type { Meta, StoryObj } from '@storybook/react'
import { defineLayoutParam, SpecCell, SpecCodeCell, SpecRow, SpecTable } from '../../../storybook/index.js'
import { CarIcon, IconSurface } from '../../index.js'

const meta: Meta = {
	component: IconSurface,
	parameters: defineLayoutParam('centered'),
	argTypes: {
		children: { control: false },
	},
}

export default meta

type Story = StoryObj<typeof IconSurface>

export const Playground: Story = {
	render: ({ className = 'pds-bg-steel-gray-600', ...args }) => (
		<SpecTable>
			<SpecRow>
				<SpecCell>
					<div>Small</div>
					<div>small size component</div>
					<div>- Button#size: sm</div>
				</SpecCell>
				<SpecCell>
					<IconSurface {...args} size="sm">
						<CarIcon size="sm" className="pds-fill-strata" />
					</IconSurface>
				</SpecCell>
				<SpecCodeCell>w-4 h-4</SpecCodeCell>
			</SpecRow>
			<SpecRow>
				<SpecCell>Medium</SpecCell>
				<SpecCell>
					<IconSurface {...args}>
						<CarIcon className="pds-fill-strata" />
					</IconSurface>
				</SpecCell>
				<SpecCodeCell>w-5 h-5</SpecCodeCell>
			</SpecRow>
		</SpecTable>
	),
}

export const OverrideClassName: Story = {
	render: () => (
		<SpecTable>
			<SpecRow>
				<SpecCell>Small</SpecCell>
				<SpecCell>
					<IconSurface size="sm" className="pds-bg-steel-gray-600">
						<CarIcon size="sm" className="pds-fill-strata" />
					</IconSurface>
				</SpecCell>
				<SpecCodeCell>w-4 h-4</SpecCodeCell>
			</SpecRow>
			<SpecRow>
				<SpecCell>Medium</SpecCell>
				<SpecCell>
					<IconSurface className="pds-bg-steel-gray-600">
						<CarIcon className="pds-fill-strata" />
					</IconSurface>
				</SpecCell>
				<SpecCodeCell>w-5 h-5</SpecCodeCell>
			</SpecRow>
		</SpecTable>
	),
}
