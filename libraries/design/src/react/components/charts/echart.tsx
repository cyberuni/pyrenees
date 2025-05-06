import type { EChartsOption as Options } from 'echarts'
import * as echarts from 'echarts'
import { useEffect } from 'react'
import { twMerge } from '../../../internal/utils/tw-merge.js'

export interface EChartProps {
	/**
	 * The element id of the chart
	 */
	id: string
	option: EChartsOption
	className?: string | undefined
}

export type EChartsOption = { [k in keyof Options]?: Options[k] | undefined }

export function EChart({ id, className, option }: EChartProps) {
	useEffect(() => {
		const myChart = echarts.init(document.getElementById(id))

		// Draw the chart
		myChart.setOption(option as any)
	}, [option])
	return <div id={id} className={twMerge('pds:w-80 pds:h-80', className)} />
}
