export const bodyTheme = {
	className: {
		color: {
			primary: 'pds:text-primary pds:dark:text-primary-dark',
			secondary: 'pds:text-secondary pds:dark:text-secondary-dark',
			hint: 'pds:text-hint pds:dark:text-hint-dark',
			disabled: 'pds:text-disabled pds:dark:text-disabled-dark',
			success: 'pds:text-success pds:dark:text-success-dark',
			error: 'pds:text-error pds:dark:text-error-dark',
		},
		fontFamily: {
			default: 'pds:font-lato',
		},
		fontSize: {
			xs: 'pds:body-text-xs',
			sm: 'pds:body-text-sm',
			md: 'pds:body-text-md',
			lg: 'pds:body-text-lg',
		},
		fontWeight: {
			normal: 'pds:font-normal',
			bold: 'pds:font-bold',
			semibold: 'pds:font-semibold',
		},
		italic: 'pds:italic pds:tracking-[0.2px]',
	},
} as const
