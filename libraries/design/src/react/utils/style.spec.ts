import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { getCSSPropValues, resolveStyle } from './style.js'

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

describe(`${getCSSPropValues.name}()`, () => {
	let originalGetComputedStyle: typeof globalThis.getComputedStyle
	beforeEach(() => {
		originalGetComputedStyle = globalThis.getComputedStyle
	})

	afterEach(() => {
		globalThis.getComputedStyle = originalGetComputedStyle
	})

	it('returns CSS variable values from computed style', () => {
		// Mock document.body and getComputedStyle
		const mockStyle = {
			getPropertyValue: (prop: string) => {
				if (prop === '--color') return 'red'
				if (prop === '--size') return '16px'
				return ''
			},
		}

		globalThis.getComputedStyle = vi.fn().mockReturnValue(mockStyle)

		const result = getCSSPropValues('--color', '--size')
		expect(result).toEqual(['red', '16px'])
		expect(globalThis.getComputedStyle).toHaveBeenCalledWith(document.body)
	})

	it('returns empty strings for undefined CSS variables', () => {
		const mockStyle = {
			getPropertyValue: () => '',
		}

		globalThis.getComputedStyle = vi.fn().mockReturnValue(mockStyle)

		const result = getCSSPropValues('--undefined-var1', '--undefined-var2')
		expect(result).toEqual(['', ''])
	})

	it('handles an empty array of values', () => {
		const mockStyle = {
			getPropertyValue: vi.fn(),
		}

		globalThis.getComputedStyle = vi.fn().mockReturnValue(mockStyle)

		const result = getCSSPropValues()
		expect(result).toEqual([])
		expect(mockStyle.getPropertyValue).not.toHaveBeenCalled()
	})
})
