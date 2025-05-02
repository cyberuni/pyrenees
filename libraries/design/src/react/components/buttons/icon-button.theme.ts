import { twMerge } from '../../../internal/utils/tw-merge.js'
import { classNames } from '../../../utils/classNames.js'
import { resolveClassName, type ClassName, type ClassNameState } from '../../utils/class-name.js'
import { buttonTheme } from './button.theme.js'
import type { IconButtonRenderProps } from './icon-button.types.js'

export const iconButtonTheme = {
	className: {
		...buttonTheme.className,
		width: {
			sm: 'pds:w-6',
			md: 'pds:w-8',
			lg: 'pds:w-10',
		},
		calc(state: ClassNameState<IconButtonRenderProps>, className: ClassName<IconButtonRenderProps>) {
			const { size = 'md' } = state
			return twMerge(
				resolveClassName(
					{
						...state,
						defaultClassName: classNames(
							'pds:font-lato pds:font-semibold',
							'pds:relative pds:box-border pds:whitespace-nowrap',
							'pds:cursor-pointer pds:data-disabled:cursor-not-allowed',
							'pds:border-solid pds:rounded',
							'pds:flex pds:items-center pds:justify-center',
							'pds:max-w-full',
							iconButtonTheme.className.height[size],
							iconButtonTheme.className.width[size],
							iconButtonTheme.className.color.calc(state),
							'pds:data-disabled:opacity-40',
							iconButtonTheme.className.bg.calc(state),
							iconButtonTheme.className.border.calc(state),
							iconButtonTheme.className.outline.calc(state),
						),
					},
					className,
				),
			)
		},
	},
} as const
