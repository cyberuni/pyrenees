import { forwardRef } from 'react'
import { Button as AriaButton, ButtonContext, useContextProps } from '../../react-aria-components/_index.js'
import { resolveChildren } from '../../utils/children.js'
import { resolveStyle } from '../../utils/style.js'
import { IconSurface } from '../surfaces/icon-surface.js'
import { iconButtonTheme } from './icon-button.theme.js'
import type { IconButtonProps } from './icon-button.types.js'

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>((props, ref) => {
	;[props, ref] = useContextProps(props, ref, ButtonContext)

	const { size = 'md', appearance = 'secondary', className, children, isDisabled = false, style, ...rest } = props
	return (
		<AriaButton
			ref={ref}
			isDisabled={isDisabled}
			className={(state) => iconButtonTheme.className.calc({ size, appearance, ...state }, className)}
			style={(state) => resolveStyle(state, style)}
			{...rest}
		>
			{(state) => {
				return <IconSurface>{resolveChildren(state, children)}</IconSurface>
			}}
		</AriaButton>
	)
})
