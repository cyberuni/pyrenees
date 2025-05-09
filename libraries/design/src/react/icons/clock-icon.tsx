import { forwardRef, type ForwardedRef } from 'react'
import { styleIcon, type IconProps } from '../utils/style_icon.js'

export const ClockIcon = forwardRef(
	({ title = 'Clock Icon', ...rest }: IconProps, ref: ForwardedRef<SVGSVGElement>) => {
		const props = styleIcon(rest)
		return (
			<svg {...props} ref={ref} viewBox="0 0 16 17">
				{!props['aria-hidden'] && <title>{title}</title>}

				<path d="M8.78 2.03V1.01a.5.5 0 0 0-.5-.51h-.77a.5.5 0 0 0-.51.51v1.05Q7.49 2 8 2q.39 0 .78.03" />
				<path d="M15.01 9.24v-.46a6.6 6.6 0 0 0-6.23-6.75v5.74l3.49 2.24q.18.1.26.3.06.2-.03.39l-.35.68a.5.5 0 0 1-.45.28l-.23-.05-4.19-2.6A.5.5 0 0 1 7 8.56v-6.5A6.56 6.56 0 0 0 .99 8.78v.46c0 3.92 2.9 6.77 7.01 6.77s7.01-2.85 7.01-6.77" />
			</svg>
		)
	},
)
