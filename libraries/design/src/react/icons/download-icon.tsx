import { forwardRef, type ForwardedRef } from 'react'
import { styleIcon, type IconProps } from '../utils/style_icon.js'

export const DownloadIcon = forwardRef(
	({ title = 'Download Icon', ...rest }: IconProps, ref: ForwardedRef<SVGSVGElement>) => {
		const props = styleIcon(rest)
		return (
			<svg {...props} ref={ref} viewBox="0 0 16 16">
				{!props['aria-hidden'] && <title>{title}</title>}

				<path d="M9 1.14v6.1h1.9a.5.5 0 0 1 .35.85l-2.9 2.9a.5.5 0 0 1-.7 0l-2.9-2.9a.5.5 0 0 1 .35-.85H7v-6.1a.5.5 0 0 0-.58-.5A7 7 0 0 0 .5 7.76v.5c0 4.2 3.1 7.25 7.5 7.25s7.5-3.05 7.5-7.25v-.5A7 7 0 0 0 9.58.65a.5.5 0 0 0-.58.5" />
			</svg>
		)
	},
)
