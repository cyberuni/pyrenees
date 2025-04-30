import { createTwMerge } from '../../tailwind/create-tw-merge.js'

/**
 * `classNames()` that merges overlapping classes.
 * this is a custom `tailwind-merge` with `pds` prefix.
 *
 * Usage note:
 * This should be used in module boundary component
 * (i.e. HTML nodes, or 3rd party component),
 * so that any overlapping class names are eliminated.
 */
export const twMerge = createTwMerge({ prefix: 'pds' })
