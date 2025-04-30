import type { DataAttributeProps } from '@just-web/types'
import type { ComponentSizeProp } from '../../types.js'
import type { ButtonProps as AriaButtonProps, RenderProps } from '../react-aria-components/_index.js'

export interface ButtonLayoutProps extends ButtonSizeProp {
	/**
	 * Defines the appearance of the button
	 */
	appearance?: ButtonAppearances | undefined
	/**
	 * Whether the button is disabled.
	 * @selector [data-disabled]
	 */
	isDisabled?: boolean | undefined
}

export type ButtonSizeProp = ComponentSizeProp<'sm' | 'md' | 'lg'>

export type ButtonRenderProps = ButtonEventState & Omit<ButtonLayoutProps, 'icon'>

export type ButtonEventState = {
	/**
	 * Whether the button is currently hovered with a mouse.
	 * @selector [data-hovered]
	 */
	isHovered: boolean
	/**
	 * Whether the button is currently in a pressed state.
	 * @selector [data-pressed]
	 */
	isPressed: boolean
	/**
	 * Whether the button is focused, either via a mouse or keyboard.
	 * @selector [data-focused]
	 */
	isFocused: boolean
	/**
	 * Whether the button is keyboard focused.
	 * @selector [data-focus-visible]
	 */
	isFocusVisible: boolean
}

export type ButtonProps = Omit<AriaButtonProps, 'className' | 'children' | 'style'> &
	ButtonLayoutProps &
	RenderProps<ButtonRenderProps> &
	DataAttributeProps

export type ButtonAppearances =
	| 'primary'
	| 'secondary'
	| 'secondary-clear'
	| 'tertiary'
	| 'tertiary-clear'
	| 'primary-destructive'
	| 'secondary-destructive'
