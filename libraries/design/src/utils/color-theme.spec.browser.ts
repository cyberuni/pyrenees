import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { getColorTheme, observeColorTheme } from '../index.js'
import { ctx } from './color-theme.ctx.js'

beforeEach(() => {
	const root = document.createElement('html')
	ctx.getDocumentElement = () => root
	ctx.matchMedia = vi.fn().mockReturnValue({ matches: false })
})

afterEach(() => {
	ctx.getDocumentElement = () => document.documentElement
	ctx.matchMedia = window.matchMedia
})

describe('getColorScheme', () => {
	it('should return data-theme attribute value if present', () => {
		ctx.getDocumentElement().setAttribute('data-theme', 'custom')

		expect(getColorTheme()).toBe('custom')
	})

	it('should return "dark" if dark class is present', () => {
		ctx.getDocumentElement().classList.add('dark')

		expect(getColorTheme()).toBe('dark')
	})

	it('should return "light" if light class is present', () => {
		ctx.getDocumentElement().classList.add('light')

		expect(getColorTheme()).toBe('light')
	})

	it('should return "dark" if prefers-color-scheme is dark', () => {
		ctx.matchMedia = vi.fn().mockReturnValue({ matches: true })

		expect(getColorTheme()).toBe('dark')
	})

	it('should return "light" if no dark conditions are met', ({ onTestFinished }) => {
		ctx.matchMedia = vi.fn().mockReturnValue({ matches: false })
		onTestFinished(() => {
			ctx.matchMedia = window.matchMedia
		})
		expect(getColorTheme()).toBe('light')
	})
})

describe('observeColorTheme', () => {
	it('should call the callback with "dark" when dark class is added', ({ expect, onTestFinished }) => {
		expect.assertions(1)
		const observer = observeColorTheme((theme) => expect(theme).toBe('dark'))
		onTestFinished(() => {
			observer.disconnect()
		})

		ctx.getDocumentElement().classList.add('dark')
	})

	it('should call the callback with "light" when dark class is removed', ({ expect, onTestFinished }) => {
		expect.assertions(1)
		ctx.getDocumentElement().classList.add('dark')

		const observer = observeColorTheme((theme) => expect(theme).toBe('light'))
		onTestFinished(() => observer.disconnect())

		ctx.getDocumentElement().classList.remove('dark')
	})

	it('should not call the callback for non-class attribute changes', ({ expect, onTestFinished }) => {
		const observer = observeColorTheme(() => expect.fail('should not reach'))
		onTestFinished(() => {
			observer.disconnect()
		})

		ctx.getDocumentElement().append('x')
	})

	it('should call the callback with "dark" when data-theme is changed to dark', ({ expect, onTestFinished }) => {
		expect.assertions(1)
		const observer = observeColorTheme((theme) => expect(theme).toBe('dark'))
		onTestFinished(() => {
			observer.disconnect()
		})

		ctx.getDocumentElement().setAttribute('data-theme', 'dark')
	})
})
