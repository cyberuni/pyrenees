import { extendTailwindMerge } from 'tailwind-merge'
import { trimPrefix } from './_trim-prefix.js'

export interface CreateTwMergeOptions {
	/**
	 * The prefix used by the library or app.
	 */
	prefix: string
}

/**
 * Creates a tailwind merge function.
 */
export function createTwMerge({ prefix }: CreateTwMergeOptions) {
	return extendTailwindMerge<'font-size-only' | 'font-size-leading-tracking' | 'font-style-weight'>({
		prefix,
		experimentalParseClassName: ({ className, parseClassName }) => {
			const parsed = parseClassName(className)
			const bare = trimPrefix(parsed.baseClassName)
			return {
				...parsed,
				...(bare ? { isExternal: false } : undefined),
				baseClassName: bare ?? parsed.baseClassName,
			}
		},
		extend: {
			classGroups: {
				'bg-color': ['page-bg'],
				'font-size': [
					{
						'body-text': ['xs', 'sm', 'md', 'lg'],
					},
					{
						'code-text': ['xs', 'sm', 'md', 'lg'],
					},
					{
						'heading-text': ['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl'],
					},
				],
				'font-size-leading-tracking': [
					{
						'detail-text': ['sm', 'md', 'lg'],
					},
				],
				'font-size-only': [
					{
						text: [
							'25',
							'50',
							'75',
							'100',
							'200',
							'300',
							'400',
							'500',
							'600',
							'700',
							'800',
							'900',
							'1000',
							'1100',
							'1200',
							'1300',
						],
					},
				],
				'font-style-weight': [
					{
						body: ['normal', 'emphasized', 'strong', 'strong-emphasized'],
					},
					{
						detail: [
							'normal',
							'strong',
							'light',
							'light-strong',
							'emphasized',
							'strong-emphasized',
							'light-emphasized',
							'light-strong-emphasized',
						],
					},
					{
						heading: ['normal', 'emphasized', 'strong', 'strong-emphasized'],
					},
				],
				'font-weight': ['code-normal'],
				leading: ['body-leading', 'code-leading', 'detail-leading', 'heading-leading'],
				opacity: ['disabled-opacity'],
				'text-color': ['detail-text-color'],
			},
			conflictingClassGroups: {
				'font-size-only': ['font-size', 'font-size-leading-tracking'],
				'font-size': ['font-size-only', 'font-size-leading-tracking'],
				'font-size-leading-tracking': ['font-size', 'leading', 'tracking', 'font-size-only'],
				'font-style-weight': ['font-style', 'font-weight'],
			},
		},
	})
}
