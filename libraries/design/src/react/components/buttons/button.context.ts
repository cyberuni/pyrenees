import { createContext } from 'react'
import type { ContextValue } from '../../react-aria-components/_index.js'
import type { ButtonProps } from './button.types.js'

export const ButtonContext = createContext<ContextValue<ButtonProps, HTMLButtonElement>>(null)
