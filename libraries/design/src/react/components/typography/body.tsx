import type { DataAttributeProps } from '@just-web/types'
import { cva } from 'class-variance-authority'
import type { ComponentPropsWithoutRef, ElementType, ForwardedRef, ReactNode } from 'react'
import { twMerge } from '../../../internal/utils/tw-merge.js'
import { TextContext, useContextProps } from '../../react-aria-components/_index.js'
import { forwardRef } from '../../utils/forward-ref.js'

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
		 * The size of the text.
		 * @default 'md'
		 */
		size?: BodySize | undefined
		/**
		 * The color variant of the text.
		 * @default 'primary'
		 */
		color?: 'primary' | 'secondary' | 'hint' | 'disabled' | 'success' | 'error' | undefined
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
		emphasized?: boolean | undefined
		strong?: boolean | undefined
	}

const variants = cva(['pds:font-lato pds:font-normal pds:body-leading'], {
	variants: {
		elementType: {
			p: 'pds:m-0 pds:p-0',
		},
		size: {
			xs: 'pds:body-text-xs',
			sm: 'pds:body-text-sm',
			md: 'pds:body-text-md',
			lg: 'pds:body-text-lg',
		},
		color: {
			primary: 'pds:text-primary',
			secondary: 'pds:text-secondary',
			hint: 'pds:text-hint',
			disabled: 'pds:text-disabled',
			success: 'pds:text-success',
			error: 'pds:text-error',
		},
		truncate: {
			true: 'pds:flex',
		},
		emphasized: { true: '', false: '' },
		strong: { true: '', false: '' },
	},
	compoundVariants: [
		{
			emphasized: false,
			strong: false,
			class: ['pds:body-normal'],
		},
		{
			emphasized: true,
			strong: false,
			class: ['pds:body-emphasized'],
		},
		{
			emphasized: false,
			strong: true,
			class: ['pds:body-strong'],
		},
		{
			emphasized: true,
			strong: true,
			class: ['pds:body-strong-emphasized'],
		},
	],
	defaultVariants: {
		size: 'md',
		color: 'primary',
		emphasized: false,
		strong: false,
	},
})

/**
 * Renders text content in a `span` element by default.
 */
export const Body = forwardRef(
	<T extends ElementType = 'span'>(props: BodyProps<T>, ref: ForwardedRef<HTMLElement>) => {
		;[props, ref] = useContextProps(props, ref, TextContext)
		const {
			children,
			className,
			emphasized,
			strong,
			experimental_hoverTitle,
			elementType: Element = 'span',
			size,
			color,
			...rest
		} = props
		return (
			<Element
				className={twMerge(variants({ size, color, emphasized, strong }), className)}
				ref={ref}
				title={experimental_hoverTitle}
				{...rest}
			>
				{children}
			</Element>
		)
	},
)
