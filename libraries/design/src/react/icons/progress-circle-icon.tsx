import { forwardRef, type ForwardedRef } from 'react'
import { styleIcon, type IconProps } from '../utils/style_icon.js'

export const ProgressCircleIcon = forwardRef(
	({ title = 'Progress Circle Icon', ...rest }: IconProps, ref: ForwardedRef<SVGSVGElement>) => {
		const props = styleIcon(rest)
		return (
			<svg {...props} ref={ref} viewBox="0 0 16 16">
				{!props['aria-hidden'] && <title>{title}</title>}

				<path d="M8 16A8 8 0 0 1 8 0a8 8 0 0 1 0 16M8 3a5 5 0 1 0 .01 10.01A5 5 0 0 0 8 3" opacity=".2" />
				<path d="m13.29 13.29-1.42-1.42a.5.5 0 0 1-.01-.69A5 5 0 0 0 13 8a5 5 0 0 0-4.53-4.98.5.5 0 0 1-.47-.5v-2a.5.5 0 0 1 .52-.5 8.01 8.01 0 0 1 5.5 13.25.5.5 0 0 1-.73.02" />
			</svg>
		)
	},
)
