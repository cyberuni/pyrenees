import { buildClassNamesTaggedTemplate } from './_build_class_names_tagged_template.js'
import { createTwMerge } from './create-tw-merge.js'

/**
 * Creates a tailwind merge tagged template.
 */
export function createTwm({ prefix }: { prefix: string }) {
	const twMerge = createTwMerge({ prefix })
	return buildClassNamesTaggedTemplate(twMerge)
}
