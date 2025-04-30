import { describe, expect, it } from 'vitest'
import { resolveStyle } from './style.js'

describe(`${resolveStyle.name}()`, () => {
	it('returns `defaultStyle` when `style` is undefined', () => {
		const state = { defaultStyle: { color: 'red' } }
		const result = resolveStyle(state, undefined)
		expect(result).toEqual({ color: 'red' })
	})

	it('merges the provided style object to `defaultStyle`', () => {
		const state = { defaultStyle: { color: 'red', display: 'block' } }
		const result = resolveStyle(state, { color: 'green' })
		expect(result).toEqual({ color: 'green', display: 'block' })
	})

	it('returns the style from the provided function', () => {
		const state = { defaultStyle: { color: 'red', display: 'block' } }
		const style = () => ({ color: 'green' })
		const result = resolveStyle(state, style)
		expect(result).toEqual({ color: 'green' })
		expect(resolveStyle(state, ({ defaultStyle }) => defaultStyle)).toEqual({ color: 'red', display: 'block' })
	})

	it('returns empty object when the provided function returns undefined', () => {
		const state = { defaultStyle: { color: 'red' } }
		const style = () => undefined
		const result = resolveStyle(state, style)
		expect(result).toEqual({})
	})
})
