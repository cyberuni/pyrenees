import { setAutoSnapshotOptions } from 'storybook-addon-vis'
import { beforeAll, describe, expect, it } from 'vitest'
import { tw } from '../index.js'

beforeAll((suite) => setAutoSnapshotOptions(suite, false))

describe(`${tw.name}`, () => {
	it('accepts a simple string', () => {
		expect(tw`flex row-auto`).toEqual('flex row-auto')
	})

	it('does not accept non-string expression', () => {
		expect(() => tw`${123}`).toThrowError(`tailwind does not support dynamic expression.
Please make sure each argument is evaluated to a valid tailwind class name`)
	})

	it('accepts arguments', () => {
		const isRow = true
		expect(tw`flex ${isRow ? 'row' : 'flex-col'} pds:space-x-4`).toEqual('flex row pds:space-x-4')
	})

	it('ignores falsy value', () => {
		const onlyWhenThisIsTruthy = false
		const maybeUseTernaries = true
		expect(tw`
    flex
    ${onlyWhenThisIsTruthy && 'row-auto'}
    ${null}
    ${undefined}
    ${false}
    ${0}
    ${0n}
    ${''}
    ${maybeUseTernaries ? 'pds:m-0' : 'pds:m-4'}
		`).toEqual('flex pds:m-0')
	})

	it('trim off extra spaces', () => {
		expect(tw` pds:flex   pds:m-0 ${' pds:static '}  ${'  pds:p-0  '}  pds:flex-row`).toEqual(
			'pds:flex pds:m-0 pds:static pds:p-0 pds:flex-row',
		)
	})

	describe('v3 syntax', () => {
		it('accepts arguments', () => {
			const isRow = true
			expect(tw`flex ${isRow ? 'row' : 'flex-col'} pds-space-x-4`).toEqual('flex row pds-space-x-4')
		})

		it('ignores falsy value', () => {
			const onlyWhenThisIsTruthy = false
			const maybeUseTernaries = true
			expect(tw`
    flex
    ${onlyWhenThisIsTruthy && 'row-auto'}
    ${null}
    ${undefined}
    ${false}
    ${0}
    ${0n}
    ${''}
    ${maybeUseTernaries ? 'pds-m-0' : 'pds-m-4'}
		`).toEqual('flex pds-m-0')
		})

		it('trim off extra spaces', () => {
			expect(tw` pds-flex   pds-m-0 ${' pds-static '}  ${'  pds-p-0  '}  pds-flex-row`).toEqual(
				'pds-flex pds-m-0 pds-static pds-p-0 pds-flex-row',
			)
		})
	})
})
