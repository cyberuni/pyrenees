import type { DataAttributeProps } from '@just-web/types'
import type { ComponentPropsWithoutRef, ReactNode } from 'react'
import { twMerge } from '../../../internal/utils/tw-merge.js'

export type CardProps = ComponentPropsWithoutRef<'div'> &
	DataAttributeProps & {
		/**
		 * The contents of the card.
		 * Generally, use `HeaderContainer`, `BodyContainer`, and `FooterContainer`.
		 */
		children?: ReactNode | undefined
		/**
		 * The type of element to render.
		 *
		 * By default, `Card` renders a `section` element.
		 */
		elementType?: 'section' | 'article' | 'div' | undefined
	}

/**
 * This component should be used to house similar information or data.
 * It may be used for widgets on a dashboard, data visualizations or data
 * counters, or sections on a page or in a form. These components can be
 * used together to segment the information on a page.
 */
export function Card({ children, className, elementType: Element = 'section', ...props }: CardProps) {
	return (
		<Element
			data-testid={props['data-testid'] ?? 'card'}
			className={twMerge(
				'pds:box-border pds:flex pds:flex-col',
				'pds:bg-steel-gray-50 pds:dark:bg-steel-gray-1100',
				'pds:rounded',
				className,
			)}
			{...props}
		>
			{children}
		</Element>
	)
}
