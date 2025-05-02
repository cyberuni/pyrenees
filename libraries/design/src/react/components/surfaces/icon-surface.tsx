import type { CSSProperties } from '@just-web/types'
import type { PropsWithChildren } from 'react'
import { twMerge } from '../../../internal/utils/tw-merge.js'
import { iconSurfaceTheme, type IconSurfaceRenderProps } from './icon-surface.theme.js'

export type IconSurfaceProps = PropsWithChildren<{
	className?: string | undefined
	style?: CSSProperties | undefined
}> &
	IconSurfaceRenderProps

/**
 * A surface for rendering an icon.
 */
export function IconSurface({ className, ...props }: IconSurfaceProps) {
	return <span className={twMerge(iconSurfaceTheme.className.calc(props, className))} {...props} />
}
