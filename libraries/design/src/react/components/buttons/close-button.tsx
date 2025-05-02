import { CloseIcon } from '../../icons/close-icon.js'
import { IconButton } from './icon-button.js'
import type { IconButtonProps } from './icon-button.types.js'

export function CloseButton({ appearance = 'tertiary-clear', children, ...props }: IconButtonProps) {
	return (
		<IconButton appearance={appearance} {...props}>
			{children ?? <CloseIcon />}
		</IconButton>
	)
}
