import { forwardRef } from 'react'
import {
	Button as AriaButton,
	ButtonContext as AriaButtonContext,
	useContextProps,
} from '../../react-aria-components/_index.js'
import { resolveChildren } from '../../utils/children.js'
import { resolveStyle } from '../../utils/style.js'
import { ButtonContext } from './button.context.js'
import { buttonTheme } from './button.theme.js'
import type { ButtonProps } from './button.types.js'

export const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
	;[props, ref] = useContextProps(props, ref, AriaButtonContext)
	;[props, ref] = useContextProps(props, ref, ButtonContext)

	const { size = 'md', appearance = 'secondary', className, children, isDisabled = false, style, ...rest } = props
	return (
		<AriaButton
			ref={ref}
			isDisabled={isDisabled}
			className={(state) => buttonTheme.className.calc({ size, appearance, ...state }, className)}
			style={(state) => resolveStyle(state, style)}
			{...rest}
		>
			{(state) => resolveChildren(state, children)}
		</AriaButton>
	)
})
