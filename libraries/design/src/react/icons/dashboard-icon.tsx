import { forwardRef, type ForwardedRef } from 'react'
import { styleIcon, type IconProps } from '../utils/style_icon.js'

export const DashboardIcon = forwardRef(
	({ title = 'Dashboard Icon', ...rest }: IconProps, ref: ForwardedRef<SVGSVGElement>) => {
		const props = styleIcon(rest)
		return (
			<svg {...props} ref={ref} viewBox="0 0 14 14">
				{!props['aria-hidden'] && <title>{title}</title>}

				<path d="M5.5 6h-5a.5.5 0 0 1-.5-.5v-5A.5.5 0 0 1 .5 0h5a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-.5.5m8.5-.5v-5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0-.5.5v5a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 .5-.5m-8 8v-5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0-.5.5v5a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 .5-.5m8 0v-5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0-.5.5v5a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 .5-.5" />
			</svg>
		)
	},
)
