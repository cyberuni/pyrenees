import { forwardRef, type ForwardedRef } from 'react'
import { styleIcon, type IconProps } from '../utils/style_icon.js'

export const InfoIcon = forwardRef(({ title = 'Info Icon', ...rest }: IconProps, ref: ForwardedRef<SVGSVGElement>) => {
	const props = styleIcon(rest)
	return (
		<svg {...props} ref={ref} viewBox="0 0 16 16">
			{!props['aria-hidden'] && <title>{title}</title>}

			<path d="M8 .5C3.6.5.5 3.55.5 7.75v.5c0 4.2 3.1 7.25 7.5 7.25s7.5-3.05 7.5-7.25v-.5C15.5 3.55 12.4.5 8 .5M7 3.97C7 3.4 7.41 3 8 3s1 .4 1 .97v.06C9 4.6 8.59 5 8 5s-1-.4-1-.97zm3 7.29a.5.5 0 0 1-.5.49h-3a.5.5 0 0 1-.5-.5v-.5a.5.5 0 0 1 .5-.5h.75v-2.5H6.5a.5.5 0 0 1-.5-.5v-.5a.5.5 0 0 1 .5-.5h1.75a.5.5 0 0 1 .5.5v3.48l.77.01a.5.5 0 0 1 .49.5z" />
		</svg>
	)
})
