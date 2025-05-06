import { getCSSPropValues } from '../../utils/style.js'
import type { EChartsOption } from './echart.js'

export function defineChartOption(option: EChartsOption, element = globalThis.document.body): EChartsOption {
	const { title, ...rest } = option
	return {
		title: defineTitle(title, element),
		...rest,
	}
}

function defineTitle(title: EChartsOption['title'], element: HTMLElement): EChartsOption['title'] {
	const [fontFamily, fontSize] = getCSSPropValues(element, '--pds-font-lato', '--pds-heading-text-md')
	if (Array.isArray(title)) {
		return title
	}
	return {
		textStyle: { fontFamily, fontSize },
		...title,
	}
}
