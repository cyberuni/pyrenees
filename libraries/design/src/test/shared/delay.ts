// Implementation from https://github.com/sindresorhus/delay
// Version: 6.0.0
// By: Sindre Sorhus
//
// It is copied in order to support CJS.

export type Options<T> = {
	/**
	A value to resolve in the returned promise.

	@example
	```
	import delay from 'delay';

	const result = await delay(100, {value: '🦄'});

	// Executed after 100 milliseconds
	console.log(result);
	//=> '🦄'
	```
	*/
	value?: T

	/**
	An `AbortSignal` to abort the delay.

	The returned promise will be rejected with an `AbortError` if the signal is aborted.

	@example
	```
	import delay from 'delay';

	const abortController = new AbortController();

	setTimeout(() => {
		abortController.abort();
	}, 500);

	try {
		await delay(1000, {signal: abortController.signal});
	} catch (error) {
		// 500 milliseconds later
		console.log(error.name)
		//=> 'AbortError'
	}
	```
	*/
	signal?: AbortSignal
}

// From https://github.com/sindresorhus/random-int/blob/c37741b56f76b9160b0b63dae4e9c64875128146/index.js#L13-L15
const randomInteger = (minimum: number, maximum: number) =>
	Math.floor(Math.random() * (maximum - minimum + 1) + minimum)

const createAbortError = () => {
	const error = new Error('Delay aborted')
	error.name = 'AbortError'
	return error
}

const clearMethods = new WeakMap()

// The types are intentionally loose to make it work with both Node.js and browser versions of these methods.
/**
Creates a new `delay` instance using the provided functions for clearing and setting timeouts. Useful if you're about to stub timers globally, but you still want to use `delay` to manage your tests.

@example
```
import {createDelay} from 'delay';

const customDelay = createDelay({clearTimeout, setTimeout});

const result = await customDelay(100, {value: '🦄'});

// Executed after 100 milliseconds
console.log(result);
//=> '🦄'
```
*/
export function createDelay(timers?: {
	clearTimeout: (timeoutId: any) => void
	setTimeout: (callback: (...args: any[]) => void, milliseconds: number, ...args: any[]) => unknown
}) {
	// We cannot use `async` here as we need the promise identity.

	/**
Create a promise which resolves after the specified `milliseconds`.

@param milliseconds - Milliseconds to delay the promise.
@returns A promise which resolves after the specified `milliseconds`.

@example
```
import delay from 'delay';

bar();

await delay(100);

// Executed 100 milliseconds later
baz();
```
*/
	return <T>(milliseconds?: number, options?: Options<T>): Promise<T> => {
		const { value, signal } = options ?? {}
		// TODO: Use `signal?.throwIfAborted()` when targeting Node.js 18.
		if (signal?.aborted) {
			return Promise.reject(createAbortError())
		}

		let timeoutId: any
		let settle: () => void
		let rejectFunction: (reason?: any) => void
		const clear = timers?.clearTimeout ?? clearTimeout

		const signalListener = () => {
			clear(timeoutId)
			rejectFunction(createAbortError())
		}

		const cleanup = () => {
			if (signal) {
				signal.removeEventListener('abort', signalListener)
			}
		}

		const delayPromise = new Promise<T>((resolve, reject) => {
			settle = () => {
				cleanup()
				resolve(value!)
			}

			rejectFunction = reject
			timeoutId = (timers?.setTimeout ?? setTimeout)(settle, milliseconds ?? 0)
		})

		if (signal) {
			signal.addEventListener('abort', signalListener, { once: true })
		}

		clearMethods.set(delayPromise, () => {
			clear(timeoutId)
			timeoutId = null
			settle()
		})

		return delayPromise
	}
}

const delay = createDelay()

export { delay }

/**
Create a promise which resolves after a random amount of milliseconds between `minimum` and `maximum` has passed.

Useful for tests and web scraping since they can have unpredictable performance. For example, if you have a test that asserts a method should not take longer than a certain amount of time, and then run it on a CI, it could take longer. So with this method, you could give it a threshold instead.

@param minimum - Minimum amount of milliseconds to delay the promise.
@param maximum - Maximum amount of milliseconds to delay the promise.
@returns A promise which resolves after a random amount of milliseconds between `maximum` and `maximum` has passed.
*/
export async function rangeDelay<T>(minimum: number, maximum: number, options?: Options<T>) {
	return delay(randomInteger(minimum, maximum), options)
}

/**
Clears the delay and settles the promise.

If you pass in a promise that is already cleared or a promise coming from somewhere else, it does nothing.

@example
```
import delay, {clearDelay} from 'delay';

const delayedPromise = delay(1000, {value: 'Done'});

setTimeout(() => {
	clearDelay(delayedPromise);
}, 500);

// 500 milliseconds later
console.log(await delayedPromise);
//=> 'Done'
```
*/
export function clearDelay(promise: Promise<unknown>) {
	clearMethods.get(promise)?.()
}
