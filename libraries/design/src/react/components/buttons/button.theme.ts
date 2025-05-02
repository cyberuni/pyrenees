import { twMerge } from '../../../internal/utils/tw-merge.js'
import { classNames } from '../../../utils/classNames.js'
import { resolveClassName, type ClassName, type ClassNameState } from '../../utils/class-name.js'
import type { ButtonRenderProps } from './button.types.js'

export const buttonTheme = {
	className: {
		fontSize: {
			sm: 'pds:text-xs',
			md: 'pds:text-xs/4',
			lg: 'pds:text-sm',
		},
		height: {
			sm: 'pds:h-6',
			md: 'pds:h-8',
			lg: 'pds:h-10',
		},

		padding: {
			sm: 'pds:px-2 pds:py-1',
			md: 'pds:px-3 pds:py-1.5',
			lg: 'pds:px-3 pds:py-2.5',
			calc({ size }: ClassNameState<ButtonRenderProps>) {
				return buttonTheme.className.padding[size ?? 'md']
			},
		},
		color: {
			primary: 'pds:text-white pds:dark:text-blue-100',
			secondary: 'pds:text-blue-600 pds:dark:text-blue-400',
			tertiary: 'pds:text-steel-gray-700 pds:dark:text-steel-gray-400',
			'tertiary-clear': 'pds:text-steel-gray-700 pds:dark:text-steel-gray-400',
			'primary-destructive': 'pds:text-white pds:dark:text-red-100',
			'secondary-destructive': 'pds:text-red-500 pds:dark:text-red-400',
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
							!isPressed && !isDisabled && isHovered && 'pds:text-blue-700 pds:dark:text-blue-300',
							isPressed && 'pds:active:text-blue-800 pds:dark:active:text-blue-200',
						)
					case 'tertiary':
					case 'tertiary-clear':
						return classNames(
							buttonTheme.className.color.tertiary,
							!isPressed && !isDisabled && isHovered && 'pds:text-steel-gray-800 pds:dark:text-steel-gray-300',
							isPressed && 'pds:active:text-steel-gray-900 pds:dark:active:text-steel-gray-200',
						)
					case 'primary-destructive':
						return buttonTheme.className.color['primary-destructive']
					case 'secondary-destructive':
						return classNames(
							buttonTheme.className.color['secondary-destructive'],
							!isPressed && !isDisabled && isHovered && 'pds:text-red-600 pds:dark:text-red-300',
							isPressed && 'pds:active:text-red-700 pds:dark:active:text-red-200',
						)
				}
			},
		},
		bg: {
			primary: 'pds:bg-blue-600 pds:dark:bg-blue-700',
			secondary: 'pds:bg-white pds:dark:bg-steel-gray-1150',
			'secondary-clear': 'pds:bg-transparent',
			tertiary: 'pds:bg-white pds:dark:bg-steel-gray-1150',
			'tertiary-clear': 'pds:bg-transparent',
			'primary-destructive': 'pds:bg-red-500 pds:dark:bg-red-600',
			'secondary-destructive': 'pds:bg-white pds:dark:bg-steel-gray-1150',
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
							!isPressed && !isDisabled && isHovered && 'pds:bg-blue-700 pds:dark:bg-blue-600',
							isPressed && 'pds:active:bg-blue-800 pds:dark:active:bg-blue-500',
						)
					case 'secondary':
					case 'secondary-clear':
						return classNames(
							buttonTheme.className.bg.secondary,
							!isPressed && !isDisabled && isHovered && 'pds:bg-blue-100 pds:dark:bg-blue-700',
							isPressed && 'pds:active:bg-blue-200 pds:dark:active:bg-blue-600',
						)
					case 'tertiary':
					case 'tertiary-clear':
						return classNames(
							buttonTheme.className.bg.tertiary,
							!isPressed && !isDisabled && isHovered && 'pds:bg-steel-gray-200 pds:dark:bg-steel-gray-800',
							isPressed && 'pds:active:bg-steel-gray-300 pds:dark:active:bg-steel-gray-700',
						)
					case 'primary-destructive':
						return classNames(
							buttonTheme.className.bg['primary-destructive'],
							!isPressed && !isDisabled && isHovered && 'pds:bg-red-600 pds:dark:bg-red-500',
							isPressed && 'pds:active:bg-red-700 pds:dark:active:bg-red-400',
						)
					case 'secondary-destructive':
						return classNames(
							buttonTheme.className.bg['secondary-destructive'],
							!isPressed && !isDisabled && isHovered && 'pds:bg-red-100 pds:dark:bg-red-700',
							isPressed && 'pds:active:bg-red-200 pds:dark:active:bg-red-600',
						)
				}
			},
		},
		border: {
			secondary: 'pds:border pds:border-steel-gray-300 pds:dark:border-blue-700',
			tertiary: 'pds:border-steel-gray-300 pds:dark:border-steel-gray-900',
			'secondary-destructive': 'pds:border-steel-gray-300 pds:dark:border-steel-gray-900',
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
						return 'pds:border-0'
					case 'secondary':
						return classNames(
							buttonTheme.className.border.secondary,
							!isPressed && !isDisabled && isHovered && 'pds:border-blue-700 pds:dark:border-blue-500',
							isPressed && 'pds:active:border-blue-800 pds:dark:active:border-blue-400',
						)
					case 'tertiary':
						return classNames(
							buttonTheme.className.border.tertiary,
							!isPressed && !isDisabled && isHovered && 'pds:border-steel-gray-800 pds:dark:border-steel-gray-600',
							isPressed && 'pds:active:border-steel-gray-900 pds:dark:active:border-steel-gray-500',
						)
					case 'secondary-destructive':
						return classNames(
							buttonTheme.className.border['secondary-destructive'],
							!isPressed && !isDisabled && isHovered && 'pds:border-red-600 pds:dark:border-red-500',
							isPressed && 'pds:active:border-red-700 pds:dark:active:border-red-400',
						)
				}
			},
		},
		outline: {
			calc({ isFocused, isFocusVisible }: Pick<ClassNameState<ButtonRenderProps>, 'isFocused' | 'isFocusVisible'>) {
				return (
					(isFocused || isFocusVisible) &&
					'pds:focus-visible:outline pds:focus-visible:outline-2 pds:focus-visible:outline-offset-1 pds:focus-visible:outline-blue-500 pds:dark:focus-visible:outline-blue-400'
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
							'pds:font-lato pds:font-semibold',
							'pds:relative pds:box-border pds:whitespace-nowrap',
							'pds:cursor-pointer pds:data-disabled:cursor-not-allowed',
							'pds:border-solid pds:rounded',
							'pds:flex pds:items-center pds:justify-center pds:gap-x-0.5',
							'pds:max-w-full',
							size && buttonTheme.className.fontSize[size],
							size && buttonTheme.className.height[size],
							buttonTheme.className.padding.calc(state),
							buttonTheme.className.color.calc(state),
							'pds:data-disabled:opacity-40',
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
