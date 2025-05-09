import { forwardRef, type ForwardedRef } from 'react'
import { styleIcon, type IconProps } from '../utils/style_icon.js'

export const MenuIcon = forwardRef(({ title = 'Menu Icon', ...rest }: IconProps, ref: ForwardedRef<SVGSVGElement>) => {
	const props = styleIcon(rest)
	return (
		<svg {...props} ref={ref} viewBox="0 0 12 10">
			{!props['aria-hidden'] && <title>{title}</title>}

			<path d="M11.5 6H.5a.5.5 0 0 1-.5-.5v-1A.5.5 0 0 1 .5 4h11a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5m.5-4.5v-1a.5.5 0 0 0-.5-.5H.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 .5-.5m0 8v-1a.5.5 0 0 0-.5-.5H.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 .5-.5" />
		</svg>
	)
})
