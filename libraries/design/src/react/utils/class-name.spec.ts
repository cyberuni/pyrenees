import { describe, expect, it } from 'vitest'
import { resolveClassName } from './class-name.js'

describe(`${resolveClassName.name}()`, () => {
	it('returns `defaultClassName` when no `className` is undefined', () => {
		const state = { defaultClassName: 'default-class' }
		const result = resolveClassName(state, undefined)
		expect(result).toBe('default-class')
	})

	it('returns `defaultClassName` when no `className` is empty string', () => {
		const state = { defaultClassName: 'default-class' }
		const result = resolveClassName(state, '')
		expect(result).toBe('default-class')
	})

	it('appends string `className` to `defaultClassName`', () => {
		const state = { defaultClassName: 'default-class' }
		const result = resolveClassName(state, 'custom-class')
		expect(result).toBe('default-class custom-class')
	})

	it('returns the result from the provided function', () => {
		const state = { defaultClassName: 'default-class' }
		const className = () => 'function-class'
		const result = resolveClassName(state, className)
		expect(result).toBe('function-class')
		expect(resolveClassName(state, ({ defaultClassName }) => defaultClassName)).toBe('default-class')
		expect(resolveClassName(state, () => '')).toBe('')
	})

	it('should return empty string when the provided function returns undefined', () => {
		const state = { defaultClassName: 'default-class' }
		const className = () => undefined
		const result = resolveClassName(state, className)
		expect(result).toEqual('')
	})
})
