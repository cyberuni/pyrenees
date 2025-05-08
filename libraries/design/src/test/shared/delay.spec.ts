import a from 'assertron'
import inRange from 'in-range'
import timeSpan from 'time-span'
import { expect, test } from 'vitest'
import { clearDelay, createDelay, delay, rangeDelay } from '../index.js'

test('returns a resolved promise', async () => {
	const end = timeSpan()
	await delay(50)
	a.true(inRange(end(), { start: 30, end: 70 }), 'is delayed')
})

test('able to resolve a falsy value', async () => {
	expect(await delay(50, { value: 0 })).toBe(0)
})

test('delay defaults to 0 ms', async () => {
	const end = timeSpan()
	await delay()
	a.true(end() < 30)
})

test('can clear a delayed resolution', async () => {
	const end = timeSpan()
	const delayPromise = delay(1000, { value: 'success!' })

	clearDelay(delayPromise)
	const success = await delayPromise

	a.true(end() < 30)
	expect(success).toBe('success!')
})

test('resolution can be aborted with an AbortSignal', async () => {
	const end = timeSpan()
	const abortController = new AbortController()

	setTimeout(() => {
		abortController.abort()
	}, 1)

	await a.throws(
		() => delay(1000, { signal: abortController.signal }),
		(e) => e.name === 'AbortError',
	)

	a.true(end() < 30)
})

test('resolution can be aborted with an AbortSignal if a value is passed', async () => {
	const end = timeSpan()
	const abortController = new AbortController()

	setTimeout(() => {
		abortController.abort()
	}, 1)

	await a.throws(
		() => delay(1000, { value: 123, signal: abortController.signal }),
		(e) => e.name === 'AbortError',
	)

	a.true(end() < 30)
})

test('rejects with AbortError if AbortSignal is already aborted', async () => {
	const end = timeSpan()

	const abortController = new AbortController()
	abortController.abort()

	await a.throws(
		() => delay(1000, { signal: abortController.signal }),
		(e) => e.name === 'AbortError',
	)

	a.true(end() < 30)
})

test('returns a promise that is resolved in a random range of time', async () => {
	const end = timeSpan()
	await rangeDelay(50, 150)
	a.true(inRange(end(), { start: 30, end: 170 }), 'is delayed')
})

test('can create a new instance with fixed timeout methods', async () => {
	const cleared: any[] = []
	const callbacks: any[] = []

	const custom = createDelay({
		clearTimeout(handle) {
			cleared.push(handle)
		},

		setTimeout(callback, ms) {
			const handle = Symbol('handle')
			callbacks.push({ callback, handle, ms })
			return handle
		},
	})
	const first = custom(50, { value: 'first' })
	expect(callbacks.length).toBe(1)
	expect(callbacks[0].ms).toBe(50)
	callbacks[0].callback()
	await expect(first).resolves.toBe('first')

	const second = custom(40, { value: 'second' })
	expect(callbacks.length).toBe(2)
	expect(callbacks[1].ms).toBe(40)
	callbacks[1].callback()
	await expect(second).resolves.toBe('second')

	const third = custom(60)
	expect(callbacks.length).toBe(3)
	expect(callbacks[2].ms).toBe(60)
	clearDelay(third)
	expect(cleared.length).toBe(1)
	expect(cleared[0]).toBe(callbacks[2].handle)
})
