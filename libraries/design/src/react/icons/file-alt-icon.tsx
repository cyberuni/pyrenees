import { forwardRef, type ForwardedRef } from 'react'
import { styleIcon, type IconProps } from '../utils/style_icon.js'

export const FileAltIcon = forwardRef(
	({ title = 'File Alt Icon', ...rest }: IconProps, ref: ForwardedRef<SVGSVGElement>) => {
		const props = styleIcon(rest)
		return (
			<svg {...props} ref={ref} viewBox="0 0 14 17">
				{!props['aria-hidden'] && <title>{title}</title>}

				<path d="M13.5 0H.5C.22 0 0 .23 0 .53v15.93c0 .3.22.53.5.53H8c1.1 0 2-.96 2-2.13v-1.6c0-.3.23-.54.51-.54H12c1.1 0 2-.96 2-2.12V.53c0-.3-.22-.53-.5-.53M9 9.82c0 .3-.22.53-.5.53h-5c-.28 0-.5-.24-.5-.53V9.3c0-.3.22-.53.5-.53h5c.28 0 .5.24.5.53zm2-4.25c0 .3-.22.53-.5.53h-7c-.28 0-.5-.23-.5-.53v-.53c0-.29.22-.53.5-.53h7c.28 0 .5.24.5.53z" />
			</svg>
		)
	},
)
