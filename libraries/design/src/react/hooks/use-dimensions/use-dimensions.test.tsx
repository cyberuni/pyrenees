import { waitFor } from '@storybook/test'
import { useRef } from 'react'
import { describe, it } from 'vitest'
import { render } from 'vitest-browser-react'
import { useDimensions } from './use-dimensions.js'

const Component = () => {
	const { width, height } = useDimensions()

	return (
		<div>
			<div>width: {width}</div>
			<div>height: {height}</div>
		</div>
	)
}

const ElementComponent = () => {
	const leftRef = useRef(null)
	const { width, height } = useDimensions({ ref: leftRef })
	const { width: zWidth, height: zHeight } = useDimensions({ ref: null })
	return (
		<div style={{ width: '100%' }} ref={leftRef}>
			<div>width: {width}</div>
			<div>height: {height}</div>
			<div>{zWidth === undefined ? 'noWidth' : ''}</div>
			<div>{zHeight === undefined ? 'noHeight' : ''}</div>
		</div>
	)
}

describe('useDimensions', () => {
	it('should get correct window width/height', async () => {
		const screen = render(<Component />)

		screen.getByText('width: 1024')
		screen.getByText('height: 768')
	})

	it('should get window size when resize', async () => {
		const resizeWindow = (width: number, height: number) => {
			window.innerWidth = width
			window.innerHeight = height
			window.dispatchEvent(new Event('resize'))
		}

		const screen = render(<Component />)

		await waitFor(() => resizeWindow(500, 400))

		screen.getByText('width: 500')
		screen.getByText('height: 400')
	})

	it('should get element size when resize', async () => {
		const resizeWindow = (width: number, height: number) => {
			window.innerWidth = width
			window.innerHeight = height
			window.dispatchEvent(new Event('resize'))
		}

		const screen = render(<ElementComponent />)

		resizeWindow(500, 400)

		await waitFor(() => screen.getByText('width: 500').query())
		await waitFor(() => screen.getByText('height: 400').query())
	})

	it('should get undefined when null Ref is provided', async () => {
		const screen = render(<ElementComponent />)
		screen.getByText('noWidth')
		screen.getByText('noHeight')
	})
})
