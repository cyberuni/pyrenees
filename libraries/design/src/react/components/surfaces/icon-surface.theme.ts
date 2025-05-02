import type { ClassNameValue } from 'tailwind-merge'
import { classNames } from '../../../utils/classNames.js'

export type IconSurfaceRenderProps = {
	size?: 'sm' | 'md' | undefined
}

export const iconSurfaceTheme = {
	className: {
		calc({ size = 'md' }: IconSurfaceRenderProps, ...classList: ClassNameValue[]) {
			return classNames(
				'twds-grid twds-items-center twds-justify-items-center twds-justify-center',
				size === 'md' ? 'twds-w-5 twds-h-5' : 'twds-w-4 twds-h-4',
				...classList,
			)
		},
	},
}
