import { useIntl } from 'react-intl'
import { CloseIcon } from '../../icons/close-icon.js'
import { IconButton } from './icon-button.js'
import type { IconButtonProps } from './icon-button.types.js'

export function CloseButton({ appearance = 'tertiary-clear', children, ...props }: IconButtonProps) {
	const intl = useIntl()
	return (
		<IconButton
			appearance={appearance}
			aria-label={intl.formatMessage({
				defaultMessage: 'Close',
				id: 'wzEneQ',
				description: 'Close',
			})}
			{...props}
		>
			{children ?? <CloseIcon />}
		</IconButton>
	)
}
