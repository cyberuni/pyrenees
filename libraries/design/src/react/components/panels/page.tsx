import type { PropsWithChildren } from 'react'
import { twMerge } from 'tailwind-merge'
import { HeadingContext } from '../typography/heading.js'

export function Page({ className, children }: PropsWithChildren<{ className?: string | undefined }>) {
	return (
		<HeadingContext.Provider
			value={{
				fontSize: 'xl',
			}}
		>
			<div
				className={twMerge(
					'pds:overflow-hidden',
					'pds:w-full',
					'pds:mt-2 pds:mr-2 pds:mb-2',
					'pds:rounded-lg',
					'pds:bg-steel-gray-150 pds:dark:bg-steel-gray-1150',
					className,
				)}
			>
				{children}
			</div>
		</HeadingContext.Provider>
	)
}
