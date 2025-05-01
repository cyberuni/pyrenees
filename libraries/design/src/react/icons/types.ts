import type { FocusableOptions } from '@react-aria/focus'
import type { PropsWithChildren } from 'react'
import type { IconProps } from '../utils/style_icon.js'

export interface SvgIconProps extends PropsWithChildren<IconProps> {}

export type SemanticIconProps = Omit<SvgIconProps, 'children'> & FocusableOptions
