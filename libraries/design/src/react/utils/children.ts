import type { ReactNode } from 'react'

export interface ChildrenProp<T> {
	/**
	 * The children of the component with component state support.
	 */
	children?: Children<T>
}

/**
 * The children of the component with component state support.
 */
export type Children<T> = ReactNode | ChildrenHandler<T> | undefined

/**
 * Handler that receives the component state and return the `children` value.
 *
 * TODO: add `undefined` to return value when we can drop React 17 support.
 */
type ChildrenHandler<T> = (values: ChildrenState<T>) => ReactNode

/**
 * The state passed into the `ChildrenHandler`.
 */
export type ChildrenState<T> = T & {
	defaultChildren: ReactNode | undefined
}

/**
 * Resolves the `children` attribute with the specified `state` incoming `children`.
 *
 * @note This function is not further generalized to `overrideAttribute`,
 * because the underlying library (`react-aria-components`) does not do that.
 * Generalizing this means the API will be off and transform the props everywhere.
 *
 * @param state - the state object that contains the state of the component,
 * as well as a `defaultChildren` property.
 * @param children - the overriding `children` prop.
 * If it is a `string` or a `ReactNode`, it will be used directly.
 * If it is a function, it will be invoked with the `state` object, which contains the `defaultChildren` property.
 * Its return value will be used.
 */
export function resolveChildren<S extends { defaultChildren: ReactNode }>(
	state: S,
	children: ReactNode | undefined | ((state: S) => ReactNode | undefined)
): ReactNode | null | undefined {
	return typeof children === 'function' ? children(state) : children ?? state.defaultChildren
}
