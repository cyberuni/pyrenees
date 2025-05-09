export function getTransitionConfig(
	size: { width?: string | number; height?: string | number },
	animation: { tension: number; friction: number },
	duration = 300,
) {
	if ('width' in size) {
		const { width } = size
		return {
			from: { width: 0, zIndex: 10 },
			enter: { width },
			update: { width },
			leave: { width: 0 },
			config: { ...animation, duration: duration, clamp: true },
		}
	}
	if ('height' in size) {
		const { height } = size
		return {
			from: { height: 0, zIndex: 10 },
			enter: { height },
			update: { height },
			leave: { height: 0 },
			config: { ...animation, duration: duration, clamp: true },
		}
	}
	return {}
}
