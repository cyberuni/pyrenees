import { getCSSPropValues } from '../../utils/style.js'
import type { ChartsOption } from './chart.js'

export function defineChartOption(option: ChartsOption, element = globalThis.document.body): ChartsOption {
	const { title, ...rest } = option
	return {
		title: defineTitle(title, element),
		...rest,
	}
}

function defineTitle(title: ChartsOption['title'], element: HTMLElement): ChartsOption['title'] {
	const [fontFamily, fontSize] = getCSSPropValues(element, '--pds-font-lato', '--pds-heading-text-md')
	if (Array.isArray(title)) {
		return title
	}
	return {
		textStyle: { fontFamily, fontSize },
		...title,
	}
}
