import type { AriaRole } from 'react'
import { twMerge } from '../../internal/utils/tw-merge.js'

export type IconSize = 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | '3xl' | '4xl' | '5xl'

export interface IconProps {
	/**
	 * Add new classnames to the Icon
	 */
	className?: string | undefined
	/**
	 * Add a string value that labels the Icon
	 */
	ariaLabel?: string | undefined
	/**
	 * Removing the Icon from the accessibility tree. Default is true.
	 */
	ariaHidden?: boolean | undefined
	/**
	 * The size of the Icon. Default to `md`
	 */
	size?: IconSize | undefined
	/**
	 * It is used to scale the Icon
	 */
	viewBox?: string | undefined
	/**
	 * Add a focusable option to the Icon. Default is false.
	 */
	focusable?: boolean | undefined
	/**
	 * WAI-ARIA role of the Icon. Default to `img'
	 */
	role?: AriaRole | undefined
	/**
	 * WAI-ARIA title of the Icon. If not specified the default title will be used.
	 */
	title?: string | undefined
}

export function styleIcon({
	size = 'md',
	viewBox,
	ariaHidden = true,
	ariaLabel,
	className,
	focusable = false,
	role = 'img',
	...passThrough
}: IconProps) {
	return {
		'aria-label': ariaLabel,
		'aria-hidden': ariaHidden,
		className: twMerge('pds:fill-current', className),
		focusable,
		height: `${iconSizes[size]}px`,
		width: `${iconSizes[size]}px`,
		role,
		viewBox,
		...passThrough,
	}
}

const iconSizes = {
	xxs: 10,
	xs: 12,
	sm: 14,
	md: 16,
	lg: 20,
	xl: 24,
	xxl: 28,
	'3xl': 32,
	'4xl': 40,
	'5xl': 48,
} satisfies Record<IconSize, number>
