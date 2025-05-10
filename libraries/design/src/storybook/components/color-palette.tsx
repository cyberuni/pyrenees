import type { ReactNode } from 'react'

export function ColorPalette({ children }: { children: ReactNode }) {
	return (
		<div className="pds:flex pds:flex-col">
			<div className="pds:flex pds:text-secondary pds:heading-text-md pds:heading-normal pds:pb-4">
				<span className="pds:flex-1/3">Name</span>
				<span className="pds:flex-2/3">Swatches</span>
			</div>
			{children}
		</div>
	)
}

export function ColorItem({
	title,
	subtitle,
	colors,
}: { title: string; subtitle: string; colors: string | Record<string, string> }) {
	return (
		<div className="pds:flex">
			<div className="pds:flex-1/3">
				<div className="pds:text-primary pds:body-text-md pds:body-normal">{title}</div>
				<div className="pds:text-secondary pds:body-text-sm pds:body-normal">{subtitle}</div>
			</div>
			<div className="pds:flex-2/3 pds:w-full">
				{typeof colors === 'string' ? (
					<div className="pds:flex pds:flex-col pds:gap-2">
						<div className="pds:min-w-8 pds:h-8" style={{ backgroundColor: colors }} />
						<div className="pds:flex pds:flex-col pds:items-center">
							<span>{colors}</span>
						</div>
					</div>
				) : (
					<div className="pds:flex pds:gap-2">
						{Object.entries(colors).map(([key, value]) => (
							<div key={key} className="pds:flex pds:flex-col">
								<span>{key}</span>
								<span>{value}</span>
							</div>
						))}
					</div>
				)}
			</div>
		</div>
	)
}
