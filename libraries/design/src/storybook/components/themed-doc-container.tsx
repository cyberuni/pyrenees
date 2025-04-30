import { DocsContainer, type DocsContextProps } from '@storybook/blocks'
import { themes } from '@storybook/theming'
import { useEffect, useState, type PropsWithChildren } from 'react'
import { DARK_MODE_EVENT_NAME } from 'storybook-dark-mode'

/**
 * A themed doc container that works with `storybook` 8.1.10.
 *
 * @see https://github.com/hipstersmoothie/storybook-dark-mode/issues/282
 *
 * Add the following to `.storybook/preview.ts`:
 *
 * ```ts
 * const preview: Preview = {
 * 	parameters: {
 *     docs: {
 *       container: ThemedDocsContainer
 *     }
 *   }
 * }
 * ```
 */
export function ThemedDocsContainer(props: PropsWithChildren<{ context: DocsContextProps }>) {
	const [isDark, setDark] = useState(false)

	useEffect(() => {
		props.context.channel.on(DARK_MODE_EVENT_NAME, setDark)

		return () => props.context.channel.removeListener(DARK_MODE_EVENT_NAME, setDark)
	}, [props.context.channel])

	return <DocsContainer {...props} theme={themes[isDark ? 'dark' : 'light']} />
}
