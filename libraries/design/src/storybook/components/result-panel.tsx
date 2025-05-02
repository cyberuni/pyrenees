import { twm } from '../../internal/utils/twm.js'

export type ResultPanelProps = {
	label?: string | undefined
	className?: string | undefined
	value?: string | undefined
	/**
	 * Render the result panel as a different HTML tag.
	 * Defaults to `pre`
	 */
	elementType?: 'code' | 'pre' | 'samp' | 'kbd' | undefined
	/**
	 * Test ID to reference the panel.
	 * Defaults to `result-panel`.
	 */
	'data-testid'?: string | undefined
}

export function ResultPanel({
	label = 'Result',
	className,
	value,
	elementType: Element = 'pre',
	'data-testid': dataTestId = 'result-panel',
}: ResultPanelProps) {
	return (
		<div className={twm`twds-mt-1 ${className}`}>
			<div className="twds-font-bold">{label}</div>
			<div className="twds-text-start twds-p-1">
				<Element data-testid={dataTestId} className="twds-text-primary dark:twds-text-primary-dark">
					{value}
				</Element>
			</div>
		</div>
	)
}
