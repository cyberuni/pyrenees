import { describe, expect, it } from 'vitest'
import { createTwMerge } from '../index.js'

describe(`${createTwMerge.name}()`, () => {
	it('should create a tailwind merge function with the given prefix', () => {
		const twMergeWithPrefix = createTwMerge({ prefix: 'pds' })
		expect(twMergeWithPrefix('pds:text-green-100 pds:text-primary')).toBe('pds:text-primary')
	})

	it('should create a tailwind merge function that merges classes without prefixes', () => {
		const twMergeWithPrefix = createTwMerge({ prefix: 'abc' })
		expect(twMergeWithPrefix('abc:text-green-100 text-primary')).toBe('text-primary')
	})

	it('should create a tailwind merge function that merges classes with different prefixes', () => {
		const twMergeWithPrefix = createTwMerge({ prefix: 'abc' })
		expect(twMergeWithPrefix('pds:text-green-100 abc:text-primary')).toBe('abc:text-primary')
	})
})
