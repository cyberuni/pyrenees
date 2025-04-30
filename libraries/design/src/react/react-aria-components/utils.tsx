import type { DOMProps } from '@react-types/shared'
import { useMemo, type CSSProperties, type ReactNode } from 'react'
import type { AnyRecord } from 'type-plus'
import type { AriaLabelingProps } from '../@react-types/shared/overrides.js'
import type { ChildrenProp } from '../utils/children.js'
import { resolveClassName, type ClassNameProp } from '../utils/class-name.js'
import type { StyleProp } from '../utils/style.js'

export interface RenderProps<T> extends ClassNameProp<T>, StyleProp<T>, ChildrenProp<T> {}

interface RenderPropsOptions<T> extends RenderProps<T>, DOMProps, AriaLabelingProps {
	values: T
	defaultChildren?: ReactNode | undefined
	defaultClassName?: string | undefined
	defaultStyle?: CSSProperties | undefined
}

export function useRenderProps<T extends AnyRecord>(
	props: RenderPropsOptions<T>,
): {
	className: string | undefined
	style: CSSProperties | undefined
	children: ReactNode | undefined
} {
	const { className, style, children, defaultClassName = '', defaultChildren = undefined, defaultStyle, values } = props

	return useMemo(() => {
		let computedStyle: CSSProperties | undefined
		let computedChildren: ReactNode | undefined

		if (typeof style === 'function') {
			computedStyle = style({ ...values, defaultStyle: defaultStyle || {} })
		} else {
			computedStyle = style
		}

		if (typeof children === 'function') {
			computedChildren = children({ ...values, defaultChildren })
		} else if (children == null) {
			computedChildren = defaultChildren
		} else {
			computedChildren = children
		}

		return {
			className: resolveClassName({ ...values, defaultClassName }, className),
			style: computedStyle || defaultStyle ? { ...defaultStyle, ...computedStyle } : undefined,
			children: computedChildren ?? defaultChildren,
		}
	}, [className, style, children, defaultClassName, defaultChildren, defaultStyle, values])
}
