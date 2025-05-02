import { cva } from 'class-variance-authority'
import { createContext, type ElementType, type ForwardedRef } from 'react'
import { twMerge } from '../../../internal/utils/tw-merge.js'
import type { ContextValue } from '../../react-aria-components/_index.js'
import { useContextProps } from '../../react-aria-components/_index.js'
import { forwardRef } from '../../utils/forward-ref.js'

import type { DataAttributeProps } from '@just-web/types'
import type { ComponentPropsWithoutRef, ReactNode } from 'react'

export type HeadingFontSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl'

export interface HeadingProps extends Omit<ComponentPropsWithoutRef<'h1'>, 'slot'>, DataAttributeProps {
	/**
	 * The text content.
	 *
	 * It can be simple string or contain nodes like `<span>`, `<strong>`, etc.
	 * But don't get too fancy, especially when you need to enable `truncate`.
	 */
	children?: ReactNode | undefined
	/**
	 * Specify the heading level, h1 through h6.
	 * The level represents the semantic level of the heading within the larger
	 * page hierarchy. It is unrelated to the size of the content.
	 *
	 * In general, there should only be one level 1 heading on the page, and each
	 * heading below should incremented by one for each semantic level.
	 *
	 * The heading information can be used to generate a table of contents of the
	 * document to facilitate accessible navigation. Set heading levels with this
	 * in mind.
	 *
	 * @default 1
	 */
	level?: 1 | 2 | 3 | 4 | 5 | 6 | undefined
	/**
	 * A slot to place the heading in.
	 * @default 'heading'
	 */
	slot?: string | null | undefined
	/**
	 * The size of the text.
	 *
	 * Defaults to `base`.
	 * The value is aligned with the TailwindCSS `text-*` classes.
	 *
	 * Note that size is separate from level. Size is purely visual - how large the font size is.
	 * Level, on the otherhand is semantic - where the title fits in within the page hierarchy. The highest
	 * level title may (and often won't) be the largest title.
	 *
	 * If you come from `Title`, this is corresponding to `size`:
	 *
	 * - xxs -> base
	 * - xs -> lg
	 * - sm -> xl
	 * - md -> 2xl
	 * - lg -> 3xl
	 * - xl -> 4xl
	 * - xxl -> 5xl
	 */
	fontSize?: HeadingFontSize | undefined
	emphasized?: boolean | undefined
	strong?: boolean | undefined
}

export const HeadingContext = createContext<ContextValue<HeadingProps, HTMLHeadingElement>>(null)

const variants = cva(
	['pds:font-lato pds:box-border', 'pds:border-0', 'pds:m-0 pds:p-0', 'pds:text-primary', 'pds:heading-leading'],
	{
		variants: {
			fontSize: {
				xs: 'pds:heading-text-xs',
				sm: 'pds:heading-text-sm',
				md: 'pds:heading-text-md',
				lg: 'pds:heading-text-lg',
				xl: 'pds:heading-text-xl',
				'2xl': 'pds:heading-text-2xl',
				'3xl': 'pds:heading-text-3xl',
				'4xl': 'pds:heading-text-4xl',
			},
			emphasized: { true: '', false: '' },
			strong: { true: '', false: '' },
		},
		compoundVariants: [
			{
				emphasized: false,
				strong: false,
				class: ['pds:heading-normal'],
			},
			{
				emphasized: true,
				strong: false,
				class: ['pds:heading-emphasized'],
			},
			{
				emphasized: false,
				strong: true,
				class: ['pds:heading-strong'],
			},
			{
				emphasized: true,
				strong: true,
				class: ['pds:heading-strong-emphasized'],
			},
		],
		defaultVariants: {
			fontSize: 'md',
		},
	},
)
/**
 * Renders a styled heading element, used for titles and headings.
 */
export const Heading = forwardRef(function Heading(props: HeadingProps, ref: ForwardedRef<HTMLHeadingElement>) {
	;[props, ref] = useContextProps({ ...props, slot: props.slot ?? 'heading' }, ref, HeadingContext)
	const {
		children,
		level = 1,
		fontSize,
		strong,
		emphasized,
		className,
		...rest
	} = { ...props, slot: props.slot ?? 'heading' }

	const Element = `h${level}` as ElementType
	return (
		<Element className={twMerge(variants({ fontSize, strong, emphasized }), className)} ref={ref} {...rest}>
			{children}
		</Element>
	)
})
