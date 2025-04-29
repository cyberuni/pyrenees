/**
 * Defines layout parameters for a Storybook story.
 * @param layout - The layout type to use ('padded', 'centered', or 'fullscreen').
 * @returns An object with the specified layout parameter.
 */
export function defineLayoutParam(layout: 'padded' | 'centered' | 'fullscreen') {
	return { layout }
}
