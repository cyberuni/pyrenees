import { themeQuartz } from 'ag-grid-community'
import { AgGridReact, type AgGridReactProps } from 'ag-grid-react'

export type AgGridProps = AgGridReactProps

export function AgGrid({ theme = themeQuartz, ...props }: AgGridProps) {
	return <AgGridReact theme={theme} {...props} />
}
