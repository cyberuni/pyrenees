import type { ClassNameProps } from '@just-web/css'
import type { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

/**
 * A top-level app container component that provides a full viewport box with flexbox layout.
 *
 * @param children - The content to be rendered inside the container
 */
export function AppContainer({ children, className }: { children: ReactNode } & ClassNameProps) {
	return (
		<div className={twMerge('pds:box-border pds:flex pds:w-screen pds:h-screen pds:bg-steel-gray-850', className)}>
			{children}
		</div>
	)
}
