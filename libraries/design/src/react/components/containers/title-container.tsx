import type { ReactNode } from 'react'
import { Heading } from '../typography/heading.js'

export type TitleContainerProps = {
	/**
	 * The title.
	 * It should be a `string` or a component containing a `Heading`.
	 *
	 * Ultimately, there should be a `h1...h6` there to indicate it is a heading.
	 */
	title: ReactNode
	description?: ReactNode | undefined
	/**
	 * If specified, this icon will be shown before `title`.
	 */
	icon?: ReactNode | undefined
}

export function TitleContainer({ title, icon, description }: TitleContainerProps) {
	if (typeof title === 'string') {
		title = <Heading>{title}</Heading>
	}

	return (
		<div>
			<div className="pds:flex pds:gap-1 pds:items-center">
				{icon}
				{title}
			</div>
			{description && (
				<div className="pds:font-lato pds:font-normal pds:text-xs pds:text-secondary pds:dark:text-secondary-dark">
					{description}
				</div>
			)}
		</div>
	)
}
