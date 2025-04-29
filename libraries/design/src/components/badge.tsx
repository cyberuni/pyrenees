import type { PropsWithChildren } from 'react'
import { twJoin } from 'tailwind-merge'

/**
 * Props for the Badge component.
 */
export type BadgeProps = PropsWithChildren<{
	className?: string | undefined
}>

/**
 * Renders a styled badge component.
 */
export function Badge({ className, ...props }: BadgeProps) {
	return (
		<span
			{...props}
			className={twJoin(
				'pds:box-border pds:inline-flex pds:items-center pds:justify-center',
				'pds:border-solid pds:rounded-sm pds:px-1 pds:min-h-5 pds:text-xs pds:text-primary',
				className,
			)}
		/>
	)
}
