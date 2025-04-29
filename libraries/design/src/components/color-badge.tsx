import { cva } from 'class-variance-authority'
import { twMerge } from 'tailwind-merge'
import { Badge, type BadgeProps } from './badge.js'

export interface ColorBadgeProps extends BadgeProps {
	/**
	 * Color of the badge.
	 *
	 * Default to `sky`
	 */
	color?: 'sky' | 'purple' | 'cyan' | 'green' | 'pink' | 'indigo' | 'lime' | 'steel-gray' | undefined
}

const variants = cva(['pds:border'], {
	variants: {
		color: {
			sky: 'pds:bg-sky-100 pds:dark:bg-sky-1000 pds:border-sky-500 pds:dark:border-sky-600',
			purple: 'pds:bg-purple-100 pds:dark:bg-purple-1000 pds:border-purple-400 pds:dark:border-purple-600',
			cyan: 'pds:bg-cyan-100 pds:dark:bg-cyan-900 pds:border-cyan-600 pds:dark:border-cyan-500',
			green: 'pds:bg-green-100 pds:dark:bg-green-1000 pds:border-green-500 pds:dark:border-green-600',
			pink: 'pds:bg-pink-100 pds:dark:bg-pink-1000 pds:border-pink-500 pds:dark:border-pink-600',
			indigo: 'pds:bg-indigo-100 pds:dark:bg-indigo-1000 pds:border-indigo-600 pds:dark:border-indigo-700',
			lime: 'pds:bg-lime-100 pds:dark:bg-lime-1000 pds:border-lime-500 pds:dark:border-lime-600',
			'steel-gray':
				'pds:bg-steel-gray-100 pds:dark:bg-steel-gray-950 pds:border-steel-gray-500 pds:dark:border-steel-gray-600',
		},
	},
	defaultVariants: {
		color: 'sky',
	},
})

export function ColorBadge({ className, children, color = 'sky' }: ColorBadgeProps) {
	return <Badge className={twMerge(variants({ color }), className)}>{children}</Badge>
}
