import { cva } from 'class-variance-authority'
import { defineMessages, useIntl } from 'react-intl'
import { classNames } from '../../utils/classNames.js'
import { Badge, type BadgeProps } from './badge.js'

export interface SeverityBadgeProps extends BadgeProps {
	/**
	 * Severity
	 *
	 * Default to `critical`
	 */
	severity?: keyof typeof severityMap | undefined
}

const severityMap = defineMessages({
	critical: {
		defaultMessage: 'Critical',
		id: 'onh7R4',
		description: 'Critical',
	},
	high: {
		defaultMessage: 'High',
		id: 'olNyNJ',
		description: 'High',
	},
	medium: {
		defaultMessage: 'Medium',
		id: 'qmGQHf',
		description: 'Medium',
	},
	low: {
		defaultMessage: 'Low',
		id: 't68EEc',
		description: 'Low',
	},
	lowest: {
		defaultMessage: 'Lowest',
		id: 'WVzerw',
		description: 'Lowest',
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
		severity: {
			critical: 'pds:bg-red-100 pds:dark:bg-red-700 pds:border-red-600 pds:dark:border-red-550',
			high: 'pds:bg-red-100 pds:dark:bg-red-900 pds:border-red-500 pds:dark:border-red-600',
			medium: 'pds:bg-orange-100 pds:dark:bg-orange-900 pds:border-orange-400 pds:dark:border-orange-600',
			low: 'pds:bg-yellow-100 pds:dark:bg-yellow-900 pds:border-yellow-400 pds:dark:border-yellow-500',
			lowest: 'pds:bg-blue-150 pds:dark:bg-blue-1000 pds:border-blue-400 pds:dark:border-blue-600',
			success: 'pds:bg-teal-100 pds:dark:bg-teal-800 pds:border-teal-400 pds:dark:border-teal-500',
			info: 'pds:bg-sky-100 pds:dark:bg-sky-1000 pds:border-steel-gray-500 pds:dark:border-steel-gray-600',
		},
	},
	defaultVariants: {
		severity: 'critical',
	},
})

export function SeverityBadge({ className, severity }: SeverityBadgeProps) {
	const intl = useIntl()
	return (
		<Badge className={classNames(variants({ severity }), className)}>
			{intl.formatMessage(severityMap[severity ?? 'critical'])}
		</Badge>
	)
}
