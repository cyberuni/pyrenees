import { beforeEach, describe, it } from 'vitest'
import { render } from 'vitest-browser-react'
import { ctx } from './use-unique-id.ctx.js'
import { useUniqueId } from './use-unique-id.js'

function TestComponent() {
	const id = useUniqueId()
	return <div>comp-{id}</div>
}

describe('useUniqueId', () => {
	beforeEach(() => {
		ctx.reset()
	})

	it('should share global state', async () => {
		const screen = render(
			<div>
				<TestComponent />
				<TestComponent />
			</div>,
		)

		screen.getByText('comp-0')
		screen.getByText('comp-1')
	})
})
