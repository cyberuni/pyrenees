import type { ReactNode } from 'react'
import { Heading } from '../typography/heading.js'

export type HeaderProps = {
	/**
	 * Title of the header container.
	 *
	 * Typically, it can be a `string`, a `Heading` component, a `TitlePanel`,
	 * or any other React component that containing a `Heading`.
	 *
	 * Ultimately, there should be a `h1...h6` there to indicate it is a heading.
	 */
	title: ReactNode
	/**
	 * Controls on the right side of the panel.
	 *
	 * For example,
	 * close button on a `Sheet`, or
	 * controls on a `DataGrid`.
	 *
	 * @example
	 * ```ts
	 * <HeaderPanel title="Page Title" controls={
	 *     <ControlBar>
	 *       <Button>Button 1</Button>
	 *       <Button>Button 2</Button>
	 *     </ControlBar>
	 *   }
	 * />
	 * ```
	 */
	controls?: ReactNode | undefined
}

export function Header({ controls, title }: HeaderProps) {
	if (typeof title === 'string') {
		title = <Heading>{title}</Heading>
	}

	return (
		<div className="pds:box-border pds:w-full pds:px-4 pds:py-3 pds:flex pds:flex-row pds:justify-between pds:items-center">
			{title}
			{controls}
		</div>
	)
}
