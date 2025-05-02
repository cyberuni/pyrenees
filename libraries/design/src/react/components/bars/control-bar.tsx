import type { ReactNode } from 'react'
import { twMerge } from '../../../internal/utils/tw-merge.js'

/**
 * Renders a bar of control components.
 *
 * `ControlBar` is can be used under the header of:
 * `Page`, `Sheet`, `Card`, `Table`, `AccordionPanel`, etc.
 */
export function ControlBar(props: { children: ReactNode; className?: string | undefined }) {
	return <div className={twMerge('pds:flex pds:items-center pds:gap-2', props.className)}>{props.children}</div>
}
