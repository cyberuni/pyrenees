import { useFocusable } from '@react-aria/focus'
import { forwardRef } from 'react'
import { useIntl } from 'react-intl'
import { twMerge } from '../../../internal/utils/tw-merge.js'
import { ProgressCircleIcon } from '../../icons/progress-circle-icon.js'
import type { SemanticIconProps } from '../../icons/types.js'
import type { FocusableElement } from '../../react-aria-components/focus.js'

export const LoadingIcon = forwardRef<FocusableElement, SemanticIconProps>(({ className, ...props }, ref) => {
	const intl = useIntl()
	const { focusableProps } = useFocusable(props, ref as any)

	return (
		<ProgressCircleIcon
			className={twMerge('pds:animate-spin', className)}
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
