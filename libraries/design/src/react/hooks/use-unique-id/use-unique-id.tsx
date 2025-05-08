import { useMemo } from 'react'
import { ctx } from './use-unique-id.ctx.js'

export const useUniqueId = (): string => {
	const id = useMemo(() => ctx.idCounter++, [])
	return `${id}`
}
