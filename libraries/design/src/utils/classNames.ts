import { twJoin, type ClassNameValue } from 'tailwind-merge'

/**
 * @deprecated use `ClassNameValue` instead
 */
export type ClassNamesArg = ClassNameValue

/**
 * Combine CSS class names.
 *
 * This uses the implementation of `twJoin` from [`tailwind-merge-3`](https://www.npmjs.com/package/tailwind-merge-3).
 *
 * Note that it [does not support object argument](https://github.com/dcastil/tailwind-merge-3/blob/v2.2.2/docs/api-reference.md#twjoin).
 *
 * @example
 * classNames(
 *   'here are some default class names',
 *   onlyWhenThisIsTruthy && 'yep it is truthy',
 *   maybeUseTernaries ? 'yep' : 'nope
 * );
 * @param classes
 */
export const classNames = twJoin
