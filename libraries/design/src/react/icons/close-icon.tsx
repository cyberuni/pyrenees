import { forwardRef, type ForwardedRef } from 'react'
import { styleIcon, type IconProps } from '../utils/style_icon.js'

export const CloseIcon = forwardRef(
	({ title = 'Close Icon', ...rest }: IconProps, ref: ForwardedRef<SVGSVGElement>) => {
		const props = styleIcon(rest)
		return (
			<svg {...props} ref={ref} viewBox="0 0 12 12">
				{!props['aria-hidden'] && <title>{title}</title>}

				<path d="m10.55.7.7.7a.5.5 0 0 1 0 .71L7.36 6l3.9 3.89a.5.5 0 0 1 0 .7l-.71.71a.5.5 0 0 1-.71 0l-3.9-3.89-3.88 3.9a.5.5 0 0 1-.7 0l-.71-.71a.5.5 0 0 1 0-.71L4.54 6 .64 2.11a.5.5 0 0 1 0-.7L1.36.7a.5.5 0 0 1 .7 0l3.9 3.89L9.84.69a.5.5 0 0 1 .7 0" />
			</svg>
		)
	},
)
