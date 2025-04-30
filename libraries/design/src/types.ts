/**
 * `ComponentSize` is a standardized values that can be used to describe the size of a component.
 *
 * When a component supports a size property (typically named `size`),
 * not all values in `ComponentSize` need to be supported.
 *
 * However, the component should not introduce values not defined in `ComponentSize`.
 *
 * Put in another way, `ComponentSize` is a set of size values a component can choose to support.
 */
export type ComponentSize = 'sm' | 'md' | 'lg' | 'fit'

export type ComponentSizeProp<S extends ComponentSize = ComponentSize> = {
	/**
	 * The size of the component
	 */
	size?: S | undefined
}
