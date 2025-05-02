import { setAutoSnapshotOptions } from 'storybook-addon-vis'
import { beforeAll, describe, expect, it } from 'vitest'
import { tw } from '../../index.js'
import { twm } from './twm.js'

beforeAll((suite) => setAutoSnapshotOptions(suite, false))

describe(`${twm.name}`, () => {
	it('merge class with pds: prefix', () => {
		const p2 = 'pds:p-2'
		expect(twm`pds:p-1 ${p2}`).toEqual('pds:p-2')
	})

	it('merge semantic class with base classes', () => {
		const c = 'pds:bg-panw'
		expect(twm`pds:bg-category-1-shift-light-1 ${c}`).toEqual('pds:bg-panw')
	})
	it('merge semantic class with base classes (text)', () => {
		const c = tw`pds:text-category-1-shift-light-1`
		expect(twm`${c} pds:text-panw`).toEqual('pds:text-panw')
	})

	it('merges classes of the same category with different prefix v3', () => {
		expect(twm`pds:opacity-80 epm-opacity-80`).toEqual('epm-opacity-80')
	})

	it('merges classes of the same category with different prefix', () => {
		expect(twm`pds:opacity-80 spf:opacity-80`).toEqual('spf:opacity-80')
	})

	it('merges with prefix with overlap in v3', () => {
		expect(twm`pds:opacity-80 spf-opacity-80 spf-nav-opacity-80`).toEqual('spf-nav-opacity-80')
	})

	describe('v3 syntax', () => {
		it('merge class with pds- prefix', () => {
			const p2 = 'pds-p-2'
			expect(twm`pds-p-1 ${p2}`).toEqual('pds-p-2')
		})

		it('merge semantic class with base classes', () => {
			const c = 'pds-bg-panw'
			expect(twm`pds-bg-category-1-shift-light-1 ${c}`).toEqual('pds-bg-panw')
		})
		it('merge semantic class with base classes (text)', () => {
			const c = tw`pds-text-category-1-shift-light-1`
			expect(twm`${c} pds-text-panw`).toEqual('pds-text-panw')
		})

		it('merges classes of the same category with different prefix', () => {
			expect(twm`pds-opacity-80 epm-opacity-80`).toEqual('epm-opacity-80')
		})

		it('merges with prefix with overlap', () => {
			expect(twm`pds-opacity-80 spf-opacity-80 spf-nav-opacity-80`).toEqual('spf-nav-opacity-80')
		})
	})
})
