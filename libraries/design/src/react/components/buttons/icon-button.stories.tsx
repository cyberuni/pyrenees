import type { Meta, StoryObj } from '@storybook/react'
import { expect, userEvent, within } from '@storybook/test'
import { useState } from 'react'
import {
	defineLayoutParam,
	ResultPanel,
	SpecCell,
	SpecCodeCell,
	SpecRow,
	SpecTable,
	StorySwatch,
} from '../../../storybook/index.js'
import { AbacusIcon } from '../../icons/abacus-icon.js'
import { CopilotIcon } from '../../icons/copilot-icon.js'
import { IconButton } from '../../index.js'

const meta: Meta = {
	title: 'components/buttons/IconButton',
	component: IconButton,
	argTypes: {
		children: { control: false },
		className: { control: { type: 'text' } },
	},
	parameters: defineLayoutParam('centered'),
}

export default meta

type Story = StoryObj<typeof IconButton>

export const Playground: Story = {
	args: {
		children: <CopilotIcon />,
	},
}

export const DataAttributes: Story = {
	tags: ['!snapshot'],
	args: {
		children: <CopilotIcon />,
		'data-testid': 'test-button',
		'data-metrics': 'app-page-feature-action',
		'data-anything': 'anything you want',
	},
	render(args) {
		const [message, setMessage] = useState('')
		return (
			<StorySwatch message={<ResultPanel value={message} />}>
				<IconButton
					{...args}
					onPress={(e) =>
						setMessage(
							JSON.stringify(
								{
									'data-testid': e.target.getAttribute('data-testid'),
									'data-metrics': e.target.getAttribute('data-metrics'),
									'data-anything': e.target.getAttribute('data-anything'),
								},
								null,
								'  ',
							),
						)
					}
				/>
			</StorySwatch>
		)
	},
	async play({ canvasElement }) {
		const canvas = within(canvasElement)
		const btn = await canvas.findByTestId('test-button')
		await expect(btn).toBeInTheDocument()
		await userEvent.click(btn)
	},
}

export const Size: Story = {
	render() {
		return (
			<SpecTable>
				<SpecRow>
					<SpecCell>Small</SpecCell>
					<SpecCell>
						<div className="pds:flex pds:gap-2">
							<IconButton size="sm">
								<CopilotIcon size="xs" />
							</IconButton>
							<IconButton size="sm">
								<AbacusIcon size="xs" />
							</IconButton>
							<IconButton size="sm" isDisabled>
								<CopilotIcon size="xs" />
							</IconButton>
						</div>
					</SpecCell>
					<SpecCodeCell>
						<div>size: sm</div>
						<div>h-6 w-6</div>
						<div>icon#size: xs</div>
					</SpecCodeCell>
				</SpecRow>
				<SpecRow>
					<SpecCell>Medium</SpecCell>
					<SpecCell>
						<div className="pds:flex pds:gap-2">
							<IconButton size="md">
								<CopilotIcon />
							</IconButton>
							<IconButton size="md">
								<AbacusIcon />
							</IconButton>
							<IconButton size="md" isDisabled>
								<CopilotIcon />
							</IconButton>
						</div>
					</SpecCell>
					<SpecCodeCell>
						<div>size: md</div>
						<div>h-8 w-8</div>
					</SpecCodeCell>
					<SpecCell>Default</SpecCell>
				</SpecRow>
				<SpecRow>
					<SpecCell>Large</SpecCell>
					<SpecCell>
						<div className="pds:flex pds:gap-2">
							<IconButton size="lg">
								<CopilotIcon />
							</IconButton>
							<IconButton size="lg">
								<AbacusIcon />
							</IconButton>
							<IconButton size="lg" isDisabled>
								<CopilotIcon />
							</IconButton>
						</div>
					</SpecCell>
					<SpecCodeCell>
						<div>size: lg</div>
						<div>h-10 w-10</div>
					</SpecCodeCell>
				</SpecRow>
			</SpecTable>
		)
	},
}

export const Appearance: Story = {
	render() {
		return (
			<SpecTable>
				<SpecRow>
					<SpecCell>Primary</SpecCell>
					<SpecCell>
						<IconButton appearance="primary">
							<AbacusIcon />
						</IconButton>
					</SpecCell>
					<SpecCodeCell>
						<div>appearance: primary</div>
					</SpecCodeCell>
				</SpecRow>
				<SpecRow>
					<SpecCell>Secondary (default)</SpecCell>
					<SpecCell>
						<IconButton>
							<AbacusIcon />
						</IconButton>
					</SpecCell>
					<SpecCodeCell>
						<div>appearance: secondary</div>
					</SpecCodeCell>
				</SpecRow>
				<SpecRow>
					<SpecCell>Tertiary</SpecCell>
					<SpecCell>
						<IconButton appearance="tertiary">
							<AbacusIcon />
						</IconButton>
					</SpecCell>
					<SpecCodeCell>
						<div>appearance: tertiary</div>
					</SpecCodeCell>
				</SpecRow>
				<SpecRow>
					<SpecCell>Secondary Clear</SpecCell>
					<SpecCell>
						<IconButton appearance="secondary-clear">
							<AbacusIcon />
						</IconButton>
					</SpecCell>
					<SpecCodeCell>
						<div>appearance: secondary-clear</div>
					</SpecCodeCell>
				</SpecRow>
				<SpecRow>
					<SpecCell>Tertiary Clear</SpecCell>
					<SpecCell>
						<IconButton appearance="tertiary-clear">
							<AbacusIcon />
						</IconButton>
					</SpecCell>
					<SpecCodeCell>
						<div>appearance: tertiary-clear</div>
					</SpecCodeCell>
				</SpecRow>
				<SpecRow>
					<SpecCell>Primary Destructive</SpecCell>
					<SpecCell>
						<IconButton appearance="primary-destructive">
							<AbacusIcon />
						</IconButton>
					</SpecCell>
					<SpecCodeCell>
						<div>appearance: primary-destructive</div>
					</SpecCodeCell>
				</SpecRow>
				<SpecRow>
					<SpecCell>Secondary Destructive</SpecCell>
					<SpecCell>
						<IconButton appearance="secondary-destructive">
							<AbacusIcon />
						</IconButton>
					</SpecCell>
					<SpecCodeCell>
						<div>appearance: secondary-destructive</div>
					</SpecCodeCell>
				</SpecRow>
			</SpecTable>
		)
	},
}
