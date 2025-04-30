import { forwardRef as fr, type JSX, type ReactNode, type Ref, type RefAttributes } from 'react'
import type { AnyRecord } from 'type-plus'

/**
 * Type adjusted `forwardRef`.
 * This allows the type params to be inferred.
 *
 * @see https://fettblog.eu/typescript-react-generic-forward-refs/
 */
export function forwardRef<T, P = AnyRecord>(
	render: (props: P, ref: Ref<T>) => ReactNode | null,
): (props: P & RefAttributes<T>) => JSX.Element {
	return fr(render as any) as any
}
