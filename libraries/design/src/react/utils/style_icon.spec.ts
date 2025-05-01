import { expect, it } from 'vitest'
import { tw } from '../../tailwind/tw.js'
import { styleIcon } from './style_icon.js'

it('should default with fill-current', () => {
	const r = styleIcon({})
	expect(r.className).toEqual(tw`pds:fill-current`)
})

it('should append className', () => {
	const r = styleIcon({ className: tw`pds:text-primary` })
	expect(r.className).toEqual(tw`pds:fill-current pds:text-primary`)
})

it('should override className', () => {
	const r = styleIcon({ className: tw`pds:fill-black` })
	expect(r.className).toEqual(tw`pds:fill-black`)
})
