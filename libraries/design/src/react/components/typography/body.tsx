import type { DataAttributeProps } from '@just-web/types'
import type { ComponentPropsWithoutRef, ElementType, ForwardedRef, ReactNode } from 'react'
import { twMerge } from '../../../internal/utils/tw-merge.js'
import { TextContext, useContextProps } from '../../react-aria-components/_index.js'
import { forwardRef } from '../../utils/forward-ref.js'
import { bodyTheme } from './body.theme.js'

export type BodySize = 'xs' | 'sm' | 'md' | 'lg'

export type BodyProps<T extends ElementType = 'span'> = ComponentPropsWithoutRef<T> &
	DataAttributeProps & {
		/**
		 * The text content.
		 *
		 * It can be simple string or contain nodes like `<span>`, `<strong>`, etc.
		 * But don't get too fancy, especially when you need to enable `truncate`.
		 */
		children: ReactNode
		/**
		 * The type of element to render.
		 *
		 * By default, `Body` renders a `p` element, but any element type can be used.
		 */
		elementType?: ElementType | undefined
		/**
		 * Truncate text when there is no room.
		 *
		 * This will add a pds:flex class to the body, so it will no longer wrap.
		 */
		truncate?: boolean | undefined
		/**
		 * The title attribute specifies extra information about an element.
		 *
		 * It can be shown as a tooltip text when the mouse moves over the element.
		 */
		experimental_hoverTitle?: string | undefined
	}

/**
 * Renders text content in a `span` element by default.
 */
export const Body = forwardRef(
	<T extends ElementType = 'span'>(props: BodyProps<T>, ref: ForwardedRef<HTMLElement>) => {
		;[props, ref] = useContextProps(props, ref, TextContext)
		const { children, className, experimental_hoverTitle, elementType: Element = 'span', truncate, ...rest } = props
		return (
			<Element
				className={twMerge(
					'pds:font-lato pds:font-normal',
					Element === 'p' && 'pds:m-0 pds:p-0',
					bodyTheme.className.fontSize.md,
					bodyTheme.className.color.primary,
					truncate && 'pds:flex',
					className,
				)}
				ref={ref}
				title={experimental_hoverTitle}
				{...rest}
			>
				{children}
			</Element>
		)
	},
)
