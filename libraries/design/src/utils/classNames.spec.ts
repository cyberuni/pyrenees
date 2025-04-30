import { setAutoSnapshotOptions } from 'storybook-addon-vis'
import { beforeAll, describe, expect, it } from 'vitest'
import { classNames } from '../index.js'

beforeAll((suite) => setAutoSnapshotOptions(suite, false))

describe(`${classNames.name}()`, () => {
	it('should join its arguments with a space', () => {
		expect(classNames('twds:bg-white', 'twds:text-default')).toBe('twds:bg-white twds:text-default')
	})

	it('does not remove extra spaces', () => {
		// * this is not desired but that's how `tailwind-merge-3` does it.
		expect(classNames(' twds:bg-white ', ' twds:text-default ')).toBe(' twds:bg-white   twds:text-default ')
	})

	it('should omit falsy values', () => {
		expect(classNames('foo', false, null, undefined, 'bar')).toBe('foo bar')
	})

	describe('v3 syntax', () => {
		it('should join its arguments with a space', () => {
			expect(classNames('twds-bg-white', 'twds-text-default')).toBe('twds-bg-white twds-text-default')
		})

		it('does not remove extra spaces', () => {
			// * this is not desired but that's how `tailwind-merge-3` does it.
			expect(classNames(' twds-bg-white ', ' twds-text-default ')).toBe(' twds-bg-white   twds-text-default ')
		})

		it('should omit falsy values', () => {
			expect(classNames('foo', false, null, undefined, 'bar')).toBe('foo bar')
		})
	})
})
