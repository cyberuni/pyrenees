import { createContext } from 'react'
import type { ContextValue } from '../react-aria-components/_index.js'
import type { ButtonProps } from './button.types.js'

export const PanButtonContext = createContext<ContextValue<ButtonProps, HTMLButtonElement>>(null)
