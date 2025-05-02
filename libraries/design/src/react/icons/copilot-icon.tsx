import { forwardRef, type ForwardedRef } from 'react'
import { styleIcon, type IconProps } from '../utils/style_icon.js'

export const CopilotIcon = forwardRef(
	({ title = 'Copilot Icon', ...rest }: IconProps, ref: ForwardedRef<SVGSVGElement>) => {
		const props = styleIcon(rest)
		return (
			<svg {...props} ref={ref} viewBox="0 0 20 20">
				{!props['aria-hidden'] && <title>{title}</title>}

				<path
					fillRule="evenodd"
					d="M8.84 5.23c.05.05.16.16.16.27 0 .05-.1.16-.16.22l-2.2.93-.92 2.19c-.06.05-.17.16-.22.16-.1 0-.22-.1-.27-.16l-.93-2.2-2.2-.92A.4.4 0 0 1 2 5.5c0-.1.05-.22.1-.27l2.2-.93.93-2.2q.09-.09.27-.1c.05 0 .16.05.22.1l.93 2.2zm6.9 6.84c.09.09.26.26.26.43 0 .09-.17.26-.26.34L12.3 14.3l-1.46 3.44c-.08.09-.25.26-.34.26-.17 0-.34-.17-.43-.26L8.61 14.3l-3.44-1.46A1 1 0 0 1 5 12.5a.7.7 0 0 1 .17-.43l3.44-1.46 1.46-3.44A.7.7 0 0 1 10.5 7c.09 0 .26.09.34.17l1.46 3.44zM18 7.5c0-.08-.08-.16-.12-.2l-1.56-.66-.66-1.56A.3.3 0 0 0 15.5 5a.3.3 0 0 0-.2.08l-.66 1.56-1.56.66a.3.3 0 0 0-.08.2q.01.08.08.16l1.56.66.66 1.56c.04.04.12.12.2.12.04 0 .12-.08.16-.12l.66-1.56 1.56-.66c.04-.04.12-.12.12-.16"
					fill="url(#a)"
				/>
				<defs>
					<linearGradient id="a" x1="7.5" y1="3" x2="18.1301" y2="11.1813" gradientUnits="userSpaceOnUse">
						<stop offset="0.187231" stopColor="#51BEE0" />
						<stop offset="1" stopColor="#9B51E0" />
					</linearGradient>
				</defs>
			</svg>
		)
	},
)
