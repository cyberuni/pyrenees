import { useFocusable } from '@react-aria/focus'
import { forwardRef } from 'react'
import { useIntl } from 'react-intl'
import { twMerge } from '../../internal/utils/tw-merge.js'
import type { FocusableElement } from '../react-aria-components/focus.js'
import { ProgressCircleIcon } from './progress_circle_icon.js'
import type { SemanticIconProps } from './types.js'

export const LoadingIcon = forwardRef<FocusableElement, SemanticIconProps>(({ className, ...props }, ref) => {
	const intl = useIntl()
	const { focusableProps } = useFocusable(props, ref as any)

	return (
		<ProgressCircleIcon
			className={twMerge('twds:animate-spin', className)}
			{...focusableProps}
			{...props}
			ariaLabel={intl.formatMessage({
				defaultMessage: 'Loading',
				id: 'PSkOvp',
				description: 'Loading Icon',
			})}
		/>
	)
})
