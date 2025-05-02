import type { CSSProperties } from '@just-web/types'
import { cva } from 'class-variance-authority'
import type { PropsWithChildren } from 'react'
import { twMerge } from '../../../internal/utils/tw-merge.js'

export type IconSurfaceRenderProps = {
	size?: 'sm' | 'md' | undefined
}

export type IconSurfaceProps = PropsWithChildren<{
	className?: string | undefined
	style?: CSSProperties | undefined
}> &
	IconSurfaceRenderProps

const variants = cva(['pds:grid pds:items-center pds:justify-items-center pds:justify-center'], {
	variants: {
		size: {
			sm: 'pds:w-4 pds:h-4',
			md: 'pds:w-5 pds:h-5',
		},
	},
	defaultVariants: {
		size: 'md',
	},
})

/**
 * A surface for rendering an icon.
 */
export function IconSurface({ className, size, ...props }: IconSurfaceProps) {
	return <span className={twMerge(variants({ size }), className)} {...props} />
}
