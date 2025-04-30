import { twMerge } from '../../internal/utils/tw-merge.js'
import { classNames } from '../../utils/classNames.js'
import { resolveClassName, type ClassName, type ClassNameState } from '../utils/class-name.js'
import type { ButtonRenderProps } from './button.types.js'

export const buttonTheme = {
	className: {
		fontSize: {
			sm: 'twds:text-xs',
			md: 'twds:text-xs/4',
			lg: 'twds:text-sm',
		},
		height: {
			sm: 'twds:h-6',
			md: 'twds:h-8',
			lg: 'twds:h-10',
		},

		padding: {
			sm: 'twds:px-2 twds:py-1',
			md: 'twds:px-3 twds:py-1.5',
			lg: 'twds:px-3 twds:py-2.5',
			calc({ size }: ClassNameState<ButtonRenderProps>) {
				return buttonTheme.className.padding[size ?? 'md']
			},
		},
		color: {
			primary: 'twds:text-white twds:dark:text-blue-100',
			secondary: 'twds:text-blue-600 twds:dark:text-blue-400',
			tertiary: 'twds:text-steel-gray-700 twds:dark:text-steel-gray-400',
			'tertiary-clear': 'twds:text-steel-gray-700 twds:dark:text-steel-gray-400',
			'primary-destructive': 'twds:text-white twds:dark:text-red-100',
			'secondary-destructive': 'twds:text-red-500 twds:dark:text-red-400',
			calc({
				appearance,
				isPressed,
				isHovered,
				isDisabled,
			}: Pick<ClassNameState<ButtonRenderProps>, 'appearance' | 'isPressed' | 'isHovered' | 'isDisabled'>) {
				switch (appearance) {
					case 'primary':
						return buttonTheme.className.color.primary
					case 'secondary':
					case 'secondary-clear':
						return classNames(
							buttonTheme.className.color.secondary,
							!isPressed && !isDisabled && isHovered && 'twds:text-blue-700 twds:dark:text-blue-300',
							isPressed && 'twds:active:text-blue-800 twds:dark:active:text-blue-200',
						)
					case 'tertiary':
					case 'tertiary-clear':
						return classNames(
							buttonTheme.className.color.tertiary,
							!isPressed && !isDisabled && isHovered && 'twds:text-steel-gray-800 twds:dark:text-steel-gray-300',
							isPressed && 'twds:active:text-steel-gray-900 twds:dark:active:text-steel-gray-200',
						)
					case 'primary-destructive':
						return buttonTheme.className.color['primary-destructive']
					case 'secondary-destructive':
						return classNames(
							buttonTheme.className.color['secondary-destructive'],
							!isPressed && !isDisabled && isHovered && 'twds:text-red-600 twds:dark:text-red-300',
							isPressed && 'twds:active:text-red-700 twds:dark:active:text-red-200',
						)
				}
			},
		},
		bg: {
			primary: 'twds:bg-blue-600 twds:dark:bg-blue-700',
			secondary: 'twds:bg-white twds:dark:bg-steel-gray-1150',
			'secondary-clear': 'twds:bg-transparent',
			tertiary: 'twds:bg-white twds:dark:bg-steel-gray-1150',
			'tertiary-clear': 'twds:bg-transparent',
			'primary-destructive': 'twds:bg-red-500 twds:dark:bg-red-600',
			'secondary-destructive': 'twds:bg-white twds:dark:bg-steel-gray-1150',
			calc({
				appearance,
				isPressed,
				isHovered,
				isDisabled,
			}: Pick<ClassNameState<ButtonRenderProps>, 'appearance' | 'isPressed' | 'isHovered' | 'isDisabled'>) {
				switch (appearance) {
					case 'primary':
						return classNames(
							buttonTheme.className.bg.primary,
							!isPressed && !isDisabled && isHovered && 'twds:bg-blue-700 twds:dark:bg-blue-600',
							isPressed && 'twds:active:bg-blue-800 twds:dark:active:bg-blue-500',
						)
					case 'secondary':
					case 'secondary-clear':
						return classNames(
							buttonTheme.className.bg.secondary,
							!isPressed && !isDisabled && isHovered && 'twds:bg-blue-100 twds:dark:bg-blue-700',
							isPressed && 'twds:active:bg-blue-200 twds:dark:active:bg-blue-600',
						)
					case 'tertiary':
					case 'tertiary-clear':
						return classNames(
							buttonTheme.className.bg.tertiary,
							!isPressed && !isDisabled && isHovered && 'twds:bg-steel-gray-200 twds:dark:bg-steel-gray-800',
							isPressed && 'twds:active:bg-steel-gray-300 twds:dark:active:bg-steel-gray-700',
						)
					case 'primary-destructive':
						return classNames(
							buttonTheme.className.bg['primary-destructive'],
							!isPressed && !isDisabled && isHovered && 'twds:bg-red-600 twds:dark:bg-red-500',
							isPressed && 'twds:active:bg-red-700 twds:dark:active:bg-red-400',
						)
					case 'secondary-destructive':
						return classNames(
							buttonTheme.className.bg['secondary-destructive'],
							!isPressed && !isDisabled && isHovered && 'twds:bg-red-100 twds:dark:bg-red-700',
							isPressed && 'twds:active:bg-red-200 twds:dark:active:bg-red-600',
						)
				}
			},
		},
		border: {
			secondary: 'twds:border twds:border-steel-gray-300 twds:dark:border-blue-700',
			tertiary: 'twds:border-steel-gray-300 twds:dark:border-steel-gray-900',
			'secondary-destructive': 'twds:border-steel-gray-300 twds:dark:border-steel-gray-900',
			calc({
				appearance,
				isPressed,
				isHovered,
				isDisabled,
			}: Pick<ClassNameState<ButtonRenderProps>, 'appearance' | 'isPressed' | 'isHovered' | 'isDisabled'>) {
				switch (appearance) {
					case 'primary':
					case 'secondary-clear':
					case 'tertiary-clear':
					case 'primary-destructive':
						return 'twds:border-0'
					case 'secondary':
						return classNames(
							buttonTheme.className.border.secondary,
							!isPressed && !isDisabled && isHovered && 'twds:border-blue-700 twds:dark:border-blue-500',
							isPressed && 'twds:active:border-blue-800 twds:dark:active:border-blue-400',
						)
					case 'tertiary':
						return classNames(
							buttonTheme.className.border.tertiary,
							!isPressed && !isDisabled && isHovered && 'twds:border-steel-gray-800 twds:dark:border-steel-gray-600',
							isPressed && 'twds:active:border-steel-gray-900 twds:dark:active:border-steel-gray-500',
						)
					case 'secondary-destructive':
						return classNames(
							buttonTheme.className.border['secondary-destructive'],
							!isPressed && !isDisabled && isHovered && 'twds:border-red-600 twds:dark:border-red-500',
							isPressed && 'twds:active:border-red-700 twds:dark:active:border-red-400',
						)
				}
			},
		},
		outline: {
			calc({ isFocused, isFocusVisible }: Pick<ClassNameState<ButtonRenderProps>, 'isFocused' | 'isFocusVisible'>) {
				return (
					(isFocused || isFocusVisible) &&
					'twds:focus-visible:outline twds:focus-visible:outline-2 twds:focus-visible:outline-offset-1 twds:focus-visible:outline-blue-500 twds:dark:focus-visible:outline-blue-400'
				)
			},
		},
		calc(state: ClassNameState<ButtonRenderProps>, className: ClassName<ButtonRenderProps>) {
			const { size } = state
			return twMerge(
				resolveClassName(
					{
						...state,
						defaultClassName: classNames(
							'twds:font-lato twds:font-semibold',
							'twds:relative twds:box-border twds:whitespace-nowrap',
							'twds:cursor-pointer twds:data-disabled:cursor-not-allowed',
							'twds:border-solid twds:rounded',
							'twds:flex twds:items-center twds:justify-center twds:gap-x-0.5',
							'twds:max-w-full',
							size && buttonTheme.className.fontSize[size],
							size && buttonTheme.className.height[size],
							buttonTheme.className.padding.calc(state),
							buttonTheme.className.color.calc(state),
							'twds:data-disabled:opacity-40',
							buttonTheme.className.bg.calc(state),
							buttonTheme.className.border.calc(state),
							buttonTheme.className.outline.calc(state),
						),
					},
					className,
				),
			)
		},
	},
} as const
