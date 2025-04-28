import type { ReactRenderer } from '@storybook/react'
import { useEffect, type CSSProperties } from 'react'
import { useDarkMode } from 'storybook-dark-mode'
import type { DecoratorFunction } from 'storybook/internal/types'
import type { StoryRootParam } from '../parameters/define-story-root'

export function withThemedStoryRoot(props?: StoryRootParam | undefined): DecoratorFunction<ReactRenderer> {
	return function setupStoryRoot(Story, { parameters: { storyRoot } }) {
		const dark = useDarkMode()
		useEffect(() => {
			document.body.style = dark ? toStyle(storyRoot?.dark ?? props?.dark) : toStyle(storyRoot?.light ?? props?.light)
		}, [dark])
		return <Story />
	}
}
const regex = new RegExp(/[A-Z]/g)
const kebabCase = (str: string) => str.replace(regex, (v) => `-${v.toLowerCase()}`)

function toStyle(props: CSSProperties = {}) {
	return Object.keys(props).reduce((accumulator, key) => {
		// transform the key from camelCase to kebab-case
		const cssKey = kebabCase(key)
		// remove ' in value
		const cssValue = (props as any)[key].replace("'", '')
		// build the result
		// you can break the line, add indent for it if you need
		return `${accumulator}${cssKey}:${cssValue};`
	}, '')
}
