import type { StorySwatchProps } from '../components/story-swatch.js'

export type StorySwatchParam = Omit<StorySwatchProps, 'children'>

export function defineStorySwatchParam(storySwatch: StorySwatchParam) {
	return { storySwatch }
}
