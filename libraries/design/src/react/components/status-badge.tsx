import { cva } from 'class-variance-authority'
import { defineMessages, useIntl } from 'react-intl'
import { classNames } from '../../utils/classNames.js'
import { Badge, type BadgeProps } from './badge.js'

export interface StatusBadgeProps extends BadgeProps {
	/**
	 * status
	 *
	 * @default `info`
	 */
	status?: keyof typeof statusMessages | undefined
}

const statusMessages = defineMessages({
	error: {
		defaultMessage: 'Error',
		id: '6/PjjV',
		description: 'Error',
	},
	warning: {
		defaultMessage: 'Warning',
		id: 'qPFSe8',
		description: 'Warning',
	},
	caution: {
		defaultMessage: 'Caution',
		id: 'unsNVJ',
		description: 'Caution',
	},
	success: {
		defaultMessage: 'Success',
		id: 'yg2HFT',
		description: 'Success',
	},
	info: {
		defaultMessage: 'Informational',
		id: 'NVwAsi',
		description: 'Informational',
	},
})

const variants = cva(['pds:border'], {
	variants: {
		status: {
			error: 'pds:bg-red-100 pds:dark:bg-red-700 pds:border-red-600 pds:dark:border-red-550',
			warning: 'pds:bg-orange-100 pds:dark:bg-orange-900 pds:border-orange-400 pds:dark:border-orange-600',
			caution: 'pds:bg-yellow-100 pds:dark:bg-yellow-900 pds:border-yellow-400 pds:dark:border-yellow-500',
			success: 'pds:bg-teal-100 pds:dark:bg-teal-800 pds:border-teal-400 pds:dark:border-teal-500',
			info: 'pds:bg-sky-100 pds:dark:bg-sky-1000 pds:border-steel-gray-500 pds:dark:border-steel-gray-600',
		},
	},
	defaultVariants: {
		status: 'info',
	},
})

export function StatusBadge({ className, status }: StatusBadgeProps) {
	const intl = useIntl()
	return (
		<Badge className={classNames(variants({ status }), className)}>
			{intl.formatMessage(statusMessages[status ?? 'info'])}
		</Badge>
	)
}
