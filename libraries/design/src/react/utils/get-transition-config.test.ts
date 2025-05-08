import { describe, expect, it } from 'vitest'
import { getTransitionConfig } from './get-transition-config.js'

describe('getTransitionConfig', () => {
	it('should get correct value when width is provided', () => {
		expect(
			getTransitionConfig(
				{
					width: 100,
				},
				{
					tension: 100,
					friction: 100,
				},
			),
		).toStrictEqual({
			from: { width: 0, zIndex: 10 },
			enter: { width: 100 },
			update: { width: 100 },
			leave: { width: 0 },
			config: { tension: 100, friction: 100, duration: 300, clamp: true },
		})
	})

	it('should get correct value when height is provided', () => {
		expect(
			getTransitionConfig(
				{
					height: 100,
				},
				{
					tension: 100,
					friction: 100,
				},
			),
		).toStrictEqual({
			from: { height: 0, zIndex: 10 },
			enter: { height: 100 },
			update: { height: 100 },
			leave: { height: 0 },
			config: { tension: 100, friction: 100, duration: 300, clamp: true },
		})
	})

	it('should get empty object when width/height are not provided', () => {
		expect(getTransitionConfig({}, { tension: 100, friction: 100 })).toStrictEqual({})
	})
})
