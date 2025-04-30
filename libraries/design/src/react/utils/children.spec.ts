import type { ReactNode } from 'react'
import { describe, expect, it } from 'vitest'
import { resolveChildren } from './children.js'

describe(`${resolveChildren.name}()`, () => {
	it('returns the default children when no children is provided', () => {
		const state = { defaultChildren: { type: 'someComponent' } as ReactNode }
		const result = resolveChildren(state, undefined)
		expect(result).toEqual({ type: 'someComponent' })
	})

	it('returns provided `children` over the `defaultChildren`', () => {
		const state = { defaultChildren: { type: 'someComponent', key: 'default' } as ReactNode }
		const result = resolveChildren(state, { type: 'anotherComponent' } as ReactNode)
		expect(result).toEqual({ type: 'anotherComponent' })
	})

	it('returns the children from the provided function', () => {
		const state = { defaultChildren: { type: 'someComponent', key: 'default' } as ReactNode }
		const children = () => ({ type: 'anotherComponent' }) as ReactNode
		const result = resolveChildren(state, children)
		expect(result).toEqual({ type: 'anotherComponent' })
		expect(resolveChildren(state, ({ defaultChildren }) => defaultChildren)).toEqual({
			type: 'someComponent',
			key: 'default',
		})
	})

	it('returns undefined when the function returns undefined', () => {
		const state = { defaultChildren: { type: 'someComponent' } as ReactNode }
		const children = () => undefined
		const result = resolveChildren(state, children)
		expect(result).toBeUndefined()
	})

	it('returns null when the function returns null', () => {
		const state = { defaultChildren: { type: 'someComponent' } as ReactNode }
		const children = () => null
		const result = resolveChildren(state, children)
		expect(result).toBeNull()
	})
})
