import type { EChartsOption } from 'echarts'
import * as echarts from 'echarts'
import { useEffect } from 'react'
import { twMerge } from '../../../internal/utils/tw-merge.js'

export interface ChartProps {
	/**
	 * The element id of the chart
	 */
	id: string
	option: EChartsOption
	className?: string | undefined
}

export function Chart({ id, className, option }: ChartProps) {
	useEffect(() => {
		const myChart = echarts.init(document.getElementById(id))

		// Draw the chart
		myChart.setOption(option)
	}, [option])
	return <div id={id} className={twMerge('pds:w-80 pds:h-80', className)} />
}
