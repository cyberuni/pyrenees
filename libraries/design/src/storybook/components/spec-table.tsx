import type { ReactNode } from 'react'
import { twMerge } from '../../internal/utils/tw-merge.js'

export function SpecRow({ children }: { children: ReactNode }) {
	return (
		<tr className="pds:box-border pds:component-h-8 pds:border-b pds:border-steel-gray-300 pds:dark:border-steel-gray-600">
			{children}
		</tr>
	)
}

export function SpecCell({
	children,
	className,
	...rest
}: {
	children: ReactNode
	className?: string | undefined
	colSpan?: number | undefined
	rowSpan?: number | undefined
}) {
	return (
		<td {...rest} className={twMerge('pds:px-4 pds:py-2 pds:code-text-xs', className)}>
			{children}
		</td>
	)
}

export function SpecCodeCell({
	children,
	className,
	...rest
}: {
	children: ReactNode
	className?: string | undefined
	colSpan?: number | undefined
	rowSpan?: number | undefined
}) {
	return (
		<td {...rest} className={twMerge('pds:px-4 pds:whitespace-nowrap', className)}>
			<code className="pds:font-mono pds:code-text-xs pds:code-normal">{children}</code>
		</td>
	)
}

/**
 *
 * A design specification table.
 *
 * * Using `children` for rows is a good approach.
 * * It can be considered taking the default `slot`.
 * * In the future a `header` slot can be added for the table headers.
 * * One note is that there should be only one child with the `header` slot,
 * * which can contain one or more header rows.
 */
export function VisualSpecTable({
	children,
	className,
	header = (
		<tr className="pds:box-border pds:component-h-12 pds:text-primary pds:heading-text-xs pds:text-left">
			<th className="pds:px-4 pds:border-b pds:border-gray-300 pds:dark:border-gray-600">Description</th>
			<th className="pds:px-4 pds:border-b pds:border-gray-300 pds:dark:border-gray-600">Visual</th>
			<th className="pds:px-4 pds:border-b pds:border-gray-300 pds:dark:border-gray-600">Specs</th>
		</tr>
	),
}: {
	children: ReactNode
	className?: string | undefined
	header?: ReactNode | undefined
}) {
	return (
		<SpecTable className={className} header={header}>
			{children}
		</SpecTable>
	)
}

export interface SpecTableProps {
	children: ReactNode
	className?: string | undefined
	header?: ReactNode | undefined
}

/**
 *
 * A specification table.
 */
export function SpecTable({ children, className, header }: SpecTableProps) {
	return (
		<table
			className={twMerge(
				'pds:w-full pds:table-auto',
				'pds:bg-steel-gray-50 pds:dark:bg-steel-gray-1100',
				'pds:border-spacing-0',
				'pds:border pds:border-solid pds:rounded-sm pds:border-gray-300 pds:dark:border-gray-600',
				'pds:border-collapse',
				className,
			)}
		>
			<thead>{header}</thead>
			<tbody>{children}</tbody>
		</table>
	)
}
