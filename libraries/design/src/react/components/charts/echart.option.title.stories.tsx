import type { Meta, StoryObj } from '@storybook/react'
import { EChart } from './echart.js'
import { defineChartOption } from './options.js'

const meta: Meta = {
	title: 'components/charts/EChart/option/title',
	parameters: {
		layout: 'centered',
	},
}

export default meta

export const NoTitle: StoryObj = {
	render() {
		return (
			<EChart
				id="main"
				option={defineChartOption({
					xAxis: {
						data: ['shirt', 'cardigan', 'chiffon', 'pants', 'heels', 'socks'],
					},
					yAxis: {},
					series: [
						{
							name: 'sales',
							type: 'bar',
							color: '#333',
							data: [5, 20, 36, 10, 10, 20],
						},
					],
				})}
			/>
		)
	},
}

export const SingleTitle: StoryObj = {
	render() {
		return (
			<EChart
				id="main"
				option={defineChartOption({
					title: {
						text: 'ECharts Getting Started Example',
					},
					xAxis: {
						data: ['shirt', 'cardigan', 'chiffon', 'pants', 'heels', 'socks'],
					},
					yAxis: {},
					series: [
						{
							name: 'sales',
							type: 'bar',
							color: '#333',
							data: [5, 20, 36, 10, 10, 20],
						},
					],
				})}
			/>
		)
	},
}
