import type { Meta, StoryObj } from '@storybook/react'
import { Chart } from './chart.js'

const meta: Meta = {
	title: 'components/charts/Chart',
	parameters: {
		layout: 'centered',
	},
}

export default meta

export const Basic: StoryObj = {
	render() {
		return (
			<Chart
				id="main"
				option={{
					title: {
						text: 'ECharts Getting Started Example',
					},
					tooltip: {},
					xAxis: {
						data: ['shirt', 'cardigan', 'chiffon', 'pants', 'heels', 'socks'],
					},
					yAxis: {},
					series: [
						{
							name: 'sales',
							type: 'bar',
							data: [5, 20, 36, 10, 10, 20],
						},
					],
				}}
			/>
		)
	},
}
