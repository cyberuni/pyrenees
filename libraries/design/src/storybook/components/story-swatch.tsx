import type { CSSProperties } from '@just-web/css'
import type { ReactNode } from 'react'
import { twMerge } from '../../internal/utils/tw-merge.js'

export type StorySwatchProps = {
	children: ReactNode
	message?: ReactNode[] | ReactNode | undefined
	className?: string | undefined
	style?: CSSProperties | undefined
}

export function StorySwatch({ children, message, className, ...props }: StorySwatchProps) {
	return (
		<div className="pds:flex pds:flex-col pds:items-center pds:justify-center pds:gap-1">
			<div
				{...props}
				className={twMerge(
					'pds:box-border pds:flex pds:flex-col',
					'pds:bg-steel-gray-50 pds:dark:bg-steel-gray-1100',
					'pds:rounded-md',
					'pds:items-start pds:justify-start pds:p-16',
					className,
				)}
			>
				{children}
			</div>
			<section
				data-testid="story-swatch-message"
				className="pds:flex pds:flex-col pds:gap-1 pds:text-center pds:font-lato pds:italic pds:text-sm pds:text-primary pds:dark:text-primary-dark"
			>
				{Array.isArray(message)
					? message.map((msg, i) => (
							<div
								// biome-ignore lint/suspicious/noArrayIndexKey: Not sortable
								key={i}
							>
								{msg ?? `[${msg}]`}
							</div>
						))
					: message}
			</section>
		</div>
	)
}
