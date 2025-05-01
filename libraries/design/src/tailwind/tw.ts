import { twJoin } from 'tailwind-merge'
import { buildClassNamesTaggedTemplate } from './_build_class_names_tagged_template.js'

/**
 * A tagged literal to define tailwindcss classes.
 *
 * This is similar to `classNames()` but you can configure IDE to support code completion with `tw`.
 */
export const tw = buildClassNamesTaggedTemplate(twJoin)
