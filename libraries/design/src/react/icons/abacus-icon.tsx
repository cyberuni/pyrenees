import { forwardRef, type ForwardedRef } from 'react'
import { styleIcon, type IconProps } from '../utils/style_icon.js'

export const AbacusIcon = forwardRef(
	({ title = 'Abacus Icon', ...rest }: IconProps, ref: ForwardedRef<SVGSVGElement>) => {
		const props = styleIcon(rest)
		return (
			<svg {...props} ref={ref} viewBox="0 0 14 14">
				{!props['aria-hidden'] && <title>{title}</title>}

				<path d="M13 2h.5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H13v1.5a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5V4H7v1.5a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5V4H3v1.5a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5V4H.5a.5.5 0 0 1-.5-.5v-1A.5.5 0 0 1 .5 2H1V.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5V2h2V.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5V2h4V.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5zm0 8h.5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H13v1.5a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5V12H9v1.5a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5V12H3v1.5a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5V12H.5a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5H1V8.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5V10h4V8.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5V10h2V8.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z" />
			</svg>
		)
	},
)
