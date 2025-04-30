import { classNames } from '../../utils/classNames.js'

export interface ClassNameProp<T> {
	/**
	 * The CSS [className](https://developer.mozilla.org/en-US/docs/Web/API/Element/className) with component state support.
	 */
	className?: ClassName<T>
}

/**
 * The CSS [className](https://developer.mozilla.org/en-US/docs/Web/API/Element/className) with component state support.
 */
export type ClassName<T> = string | ClassNameHandler<T> | undefined

/**
 * Handler that receives the component state and return the `className` value.
 */
type ClassNameHandler<T> = (values: ClassNameState<T>) => string | undefined

/**
 * The state passed into the `ClassNameHandler`.
 */
export type ClassNameState<T> = T & { defaultClassName: string | undefined }

/**
 * Resolves the `className` attribute with the specified `state` incoming `className`.
 *
 * @note This function is not further generalized to `overrideAttribute`,
 * because the underlying library (`react-aria-components`) does not do that.
 * Generalizing this means the API will be off and transform the props everywhere.
 *
 * @param state - the state object that contains the state of the component,
 * as well as a `defaultClassName` property.
 * @param className - the overriding class name.
 * If it is a string, it will be appended to the `defaultClassName`.
 * If it is a function, it will be invoked with the `state` object, which contains the `defaultClassName` property.
 */
export function resolveClassName<S extends { defaultClassName: string }>(state: S, className: ClassName<S>): string {
	return typeof className === 'function' ? (className(state) ?? '') : classNames(state.defaultClassName, className)
}

/**
 * Common component event state.
 */
export type CommonEventState = {
	isHovered?: boolean | undefined
	isPressed?: boolean | undefined
	isFocused?: boolean | undefined
	isFocusVisible?: boolean | undefined
	isFocusWithin?: boolean | undefined
	isVisited?: boolean | undefined
	isTargeted?: boolean | undefined
}
