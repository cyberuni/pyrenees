export type GetActualSize = {
	screenWidth: number
	screenHeight: number
	sizeObj: {
		max: number | string
		min: number | string
		divide: number
	}
}

export function getActualSize({ screenWidth, screenHeight, sizeObj }: GetActualSize): {
	[key in 'height' | 'width']: number | string
} {
	const maxWidth =
		'max' in sizeObj ? (typeof sizeObj['max'] === 'number' ? sizeObj['max'] : Number.parseFloat(sizeObj['max'])) : 9999
	const minWidth =
		'min' in sizeObj ? (typeof sizeObj['min'] === 'number' ? sizeObj['min'] : Number.parseFloat(sizeObj['min'])) : 0
	const _screenWidth = Math.min(2880, Math.max(1440, screenWidth))
	const width = 'divide' in sizeObj && typeof sizeObj['divide'] === 'number' ? _screenWidth / sizeObj['divide'] : '100%'

	const maxHeight =
		'max' in sizeObj ? (typeof sizeObj['max'] === 'number' ? sizeObj['max'] : Number.parseFloat(sizeObj['max'])) : 9999
	const minHeight =
		'min' in sizeObj ? (typeof sizeObj['min'] === 'number' ? sizeObj['min'] : Number.parseFloat(sizeObj['min'])) : 0
	const _screenHeight = Math.min(2880, Math.max(1440, screenHeight))
	const height =
		'divide' in sizeObj && typeof sizeObj['divide'] === 'number' ? _screenHeight / sizeObj['divide'] : '100%'
	const actualHeight =
		typeof height === 'string' ? height : Math.floor(Math.min(Math.max(minHeight, height), maxHeight))
	const actualWidth = typeof width === 'string' ? width : Math.floor(Math.min(Math.max(minWidth, width), maxWidth))
	return { height: actualHeight, width: actualWidth }
}
