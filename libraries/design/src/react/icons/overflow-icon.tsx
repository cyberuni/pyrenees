import { forwardRef, type ForwardedRef } from 'react'
import { styleIcon, type IconProps } from '../utils/style_icon.js'

export const OverflowIcon = forwardRef(
	({ title = 'Overflow Icon', ...rest }: IconProps, ref: ForwardedRef<SVGSVGElement>) => {
		const props = styleIcon(rest)
		return (
			<svg {...props} ref={ref} viewBox="0 0 16 4">
				{!props['aria-hidden'] && <title>{title}</title>}

				<path d="M0 2.07v-.14C0 .81.83 0 2 0s2 .81 2 1.93v.14C4 3.19 3.17 4 2 4s-2-.81-2-1.93m6-.14v.14C6 3.19 6.83 4 8 4s2-.81 2-1.93v-.14C10 .81 9.17 0 8 0S6 .81 6 1.93m6 0v.14C12 3.19 12.83 4 14 4s2-.81 2-1.93v-.14C16 .81 15.17 0 14 0s-2 .81-2 1.93" />
			</svg>
		)
	},
)
