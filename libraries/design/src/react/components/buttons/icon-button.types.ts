import type { DataAttributeProps } from '@just-web/types'
import type { ButtonProps as AriaButtonProps, RenderProps } from '../../react-aria-components/_index.js'
import type { ButtonAppearances, ButtonEventState, ButtonSizeProp } from './button.types.js'

export interface IconButtonLayoutProps extends ButtonSizeProp {
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

export type IconButtonRenderProps = ButtonEventState & IconButtonLayoutProps

export type IconButtonProps = Omit<AriaButtonProps, 'className' | 'children' | 'style'> &
	IconButtonLayoutProps &
	RenderProps<IconButtonRenderProps> &
	DataAttributeProps
