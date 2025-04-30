import { twJoin } from 'tailwind-merge'
import { Badge, type BadgeProps } from './badge.js'

export function CodeBadge({ className, ...props }: BadgeProps) {
	return (
		<Badge
			{...props}
			className={twJoin(
				'pds:font-mono pds:bg-black/10 pds:dark:bg-white/10 pds:border-steel-gray-500 pds:dark:border-steel-gray-500 pds:border pds:border-solid',
				className,
			)}
		/>
	)
}
