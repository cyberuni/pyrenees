import type { ClassNameValue } from 'tailwind-merge'

export function buildClassNamesTaggedTemplate(merger: (...classLists: ClassNameValue[]) => string) {
	return function twm(strings: TemplateStringsArray, ...args: unknown[]) {
		if (!args.every(isStringOrFalsyValue)) {
			throw new Error(`tailwind does not support dynamic expression.
Please make sure each argument is evaluated to a valid tailwind class name`)
		}
		return merger(toClasslists(strings, args))
	}
}

function toClasslists(strings: TemplateStringsArray, args: (string | false | 0 | null | undefined)[]) {
	return strings.flatMap((s, i) => [...s.split(' '), args[i] || '']).map((s) => `${s}`.trim())
}

function isStringOrFalsyValue(value: unknown): value is string | null | undefined | 0 | false {
	return typeof value === 'string' || !value
}
