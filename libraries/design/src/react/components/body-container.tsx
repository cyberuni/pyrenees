import type { DataAttributeProps } from '@just-web/types'
import type { ComponentPropsWithoutRef } from 'react'
import { twMerge } from '../../internal/utils/tw-merge.js'
import { LoadingIcon } from '../icons/loading_icon.js'

export type BodyContainerProps = ComponentPropsWithoutRef<'div'> &
	DataAttributeProps & {
		/**
		 * Render a loading indicator instead of the content
		 */
		isLoading?: boolean | undefined
		/**
		 * Apply pds:overflow-auto
		 */
		overflow?: boolean | undefined
	}

/**
 * A container that host the main body content of a pane.
 *
 * For example the body of a `Page`,`Modal`, `Card`, `Sheet`.
 *
 *
 * The `BodyContainer` component is a reusable React component that renders a panel with a flexible height and optional loading indicator.
 */
export function BodyContainer({ children, isLoading, className, overflow, ...props }: BodyContainerProps) {
	return (
		<div
			className={twMerge(
				'pds:box-border pds:font-lato pds:flex-1 pds:w-full pds:p-4 pds:text-default pds:dark:text-dark-bg',
				overflow &&
					'pds:overflow-auto pds:scrollbar-small dark:pds:scrollbar-track-dark dark:pds:scrollbar-thumb-dark dark:pds:scrollbar-corner-dark',
				className,
			)}
			{...props}
		>
			{isLoading ? (
				<div className="pds:flex pds:items-center pds:justify-center pds:h-full">
					<LoadingIcon size="3xl" />
				</div>
			) : (
				children
			)}
		</div>
	)
}
