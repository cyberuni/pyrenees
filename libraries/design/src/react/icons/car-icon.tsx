import { forwardRef, type ForwardedRef } from 'react'
import { styleIcon, type IconProps } from '../utils/style_icon.js'

export const CarIcon = forwardRef(({ title = 'Car Icon', ...rest }: IconProps, ref: ForwardedRef<SVGSVGElement>) => {
	const props = styleIcon(rest)
	return (
		<svg {...props} ref={ref} viewBox="0 0 18 14">
			{!props['aria-hidden'] && <title>{title}</title>}

			<path d="M16.01 6.2h.5a.5.5 0 0 0 .5-.5v-.95a.5.5 0 0 0-.5-.5h-1.04l-1.45-2.9a2 2 0 0 0-1.8-1.1H5.78a2 2 0 0 0-1.79 1.1l-1.45 2.9H1.5a.5.5 0 0 0-.5.5v.95a.5.5 0 0 0 .5.5H2v7.3a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 .5.5v1a.5.5 0 0 0 .5.5h1.01a.5.5 0 0 0 .5-.5zM5.99 9h-1a1 1 0 0 1 0-2h1a1 1 0 1 1 0 2M4.77 5a.34.34 0 0 1-.3-.48l1.17-2.33a.3.3 0 0 1 .3-.19h6.12q.2 0 .3.18l1.17 2.33a.34.34 0 0 1-.3.49zm8.24 4h-1a1 1 0 0 1 0-2h1a1 1 0 1 1 0 2" />
		</svg>
	)
})
