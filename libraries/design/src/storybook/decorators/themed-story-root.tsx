import type { ReactRenderer } from '@storybook/react'
import { themes } from '@storybook/theming'
import { useEffect, type CSSProperties } from 'react'
import { useDarkMode } from 'storybook-dark-mode'
import type { DecoratorFunction } from 'storybook/internal/types'
import type { StoryRootParam } from '../parameters/define-story-root-param'

/**
 * Returns a decorator that configures styling and themes for stories.
 *
 * This decorator applies common styles and theme-specific styles to the story root element.
 * It automatically switches between light and dark themes.
 *
 * @param props - Optional parameters to customize the story root styling and theming
 * @returns A Storybook decorator function
 */
export function withThemedStoryRoot(props?: StoryRootParam | undefined): DecoratorFunction<ReactRenderer> {
	return function setupStoryRoot(Story, { parameters: { storyRoot } }) {
		const dark = useDarkMode()
		useEffect(() => {
			const commonStyle = {
				...props?.style,
				...storyRoot?.style,
			}
			const theme = dark
				? {
						backgroundColor: themes.dark.appContentBg,
						...props?.themes?.dark,
						...storyRoot?.themes?.dark,
					}
				: {
						backgroundColor: themes.light.appContentBg,
						...props?.themes?.light,
						...storyRoot?.themes?.light,
					}

			document.body.style = toStyle({
				...commonStyle,
				...theme.style,
			})
			Object.keys(theme).forEach((key) => {
				if (key.startsWith('data-')) {
					const value = theme[key]
					document.documentElement.setAttribute(key, value)
				}
			})
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
