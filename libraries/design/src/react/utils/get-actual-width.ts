export function getActualWidth(screenWidth: number, sizeObj: { [key: string]: number | string }): number | string {
	const maxWidth =
		'maxWidth' in sizeObj
			? typeof sizeObj['maxWidth'] === 'number'
				? sizeObj['maxWidth']
				: Number.parseFloat(sizeObj['maxWidth'])
			: 9999
	const minWidth =
		'minWidth' in sizeObj
			? typeof sizeObj['minWidth'] === 'number'
				? sizeObj['minWidth']
				: Number.parseFloat(sizeObj['minWidth'])
			: 0
	const _screenWidth = Math.min(2880, Math.max(1440, screenWidth))
	const width = 'divide' in sizeObj && typeof sizeObj['divide'] === 'number' ? _screenWidth / sizeObj['divide'] : '100%'
	return typeof width === 'string' ? width : Math.floor(Math.min(Math.max(minWidth, width), maxWidth))
}
