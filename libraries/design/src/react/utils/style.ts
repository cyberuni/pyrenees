import type { CSSProperties } from 'react'

export interface StyleProp<T> {
	/**
	 * The inline [style](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style) with component state support.
	 */
	style?: Style<T>
}

/**
 * The inline [style](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style) with component state support.
 */
export type Style<T> = CSSProperties | StyleHandler<T> | undefined

/**
 * Handler that receives the component state and return the `style` value.
 */
type StyleHandler<T> = (values: T & StyleState<T>) => CSSProperties | undefined

/**
 * The state passed into the `StyleHandler`.
 */
export type StyleState<T> = T & { defaultStyle: CSSProperties | undefined }

/**
 * Resolves the `style` attribute with the specified `state` incoming `style`.
 *
 * The `state` object has a `defaultStyle` property.
 * It will be used as the return value it `style` is not specified, is `undefined`,
 * or a function evaluated to the same.
 *
 * @note This function is not further generalized to `overrideAttribute`,
 * because the underlying library (`react-aria-components`) does not do that.
 * Generalizing this means the API will be off and transform the props everywhere.
 *
 * @param state - the state object that contains the state of the component,
 * as well as a `defaultStyle` property.
 * @param style - the overriding `style` prop.
 * If it is an object, it will be merged with the `defaultStyle`.
 * If it is a function, it will be invoked with the `state` object, which contains the `defaultStyle` property.
 * It should returns an `CSSProperties` object, which will be used directly.
 * If you determine you want to keep the default style, you should return the `defaultStyle` property from the state object.
 * If you want to remove all styles, return `undefined`.
 */
export function resolveStyle<S extends { defaultStyle: CSSProperties | undefined }>(
	state: S,
	style: CSSProperties | undefined | ((state: S) => CSSProperties | undefined),
): CSSProperties {
	return typeof style === 'function' ? (style(state) ?? {}) : { ...state.defaultStyle, ...style }
}
