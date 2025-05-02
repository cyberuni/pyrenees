import type { Meta, StoryObj } from '@storybook/react'
import { expect, userEvent, within } from '@storybook/test'
import { useState } from 'react'
import { ResultPanel } from '../index.js'

const meta: Meta<typeof ResultPanel> = {
	component: ResultPanel,
	parameters: {
		sourceLink: 'components/result_panel.tsx',
	},
}

export default meta

type Story = StoryObj<typeof ResultPanel>

export const Basic: Story = {
	render() {
		const [result, setResult] = useState<unknown[]>([])
		return (
			<div className="twds-flex twds-flex-col">
				<button
					type="button"
					data-testid="add"
					className="twds-text-primary dark:twds-text-primary-dark twds-bg-primary dark:twds-bg-black twds-rounded"
					onClick={() => setResult((v) => [...v, { a: 1 }])}
				>
					Add Result
				</button>
				<ResultPanel value={JSON.stringify(result)} />
			</div>
		)
	},
	async play({ canvasElement }) {
		const canvas = within(canvasElement)
		const btn = await canvas.findByTestId('add')
		await userEvent.click(btn)
		const result = await canvas.findByTestId('result-panel')
		expect(result.innerText).toEqual(`[{"a":1}]`)
	},
}

export const CustomLabel: Story = {
	render() {
		return <ResultPanel label="Custom Label" value={JSON.stringify({ a: 1 }, null, 2)} />
	},
}

export const CustomCSS: Story = {
	render() {
		return (
			<ResultPanel
				className="twds-bg-blue-300 twds-rounded-md twds-border-solid twds-p-2 twds-border-white"
				value={JSON.stringify({ a: 1 }, null, '\t')}
			/>
		)
	},
}

export const AsSamp: Story = {
	args: {
		elementType: 'samp',
		value: JSON.stringify({ a: 1, b: 2, c: 3 }, null, '\t'),
	},
}

export const AsCode: Story = {
	args: {
		elementType: 'code',
		value: JSON.stringify({ a: 1, b: 2, c: 3 }, null, '\t'),
	},
}

export const AsKbd: Story = {
	args: {
		elementType: 'kbd',
		value: JSON.stringify({ a: 1, b: 2, c: 3 }, null, '\t'),
	},
}
