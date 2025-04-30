import type { Context, Ref } from 'react'
import type * as Rac from 'react-aria-components'
import { useContextProps as racUCP } from 'react-aria-components'
import type { AdjustExactOptionalProps } from 'type-plus'

export function useContextProps<T, U extends SlotProps, E extends Element>(
	props: T & SlotProps,
	ref: Ref<E>,
	context: Context<Rac.ContextValue<U, E>>,
): [T, Ref<E>] {
	return racUCP(props as any, ref, context as any)
}

export type SlotProps = AdjustExactOptionalProps<Rac.SlotProps>
