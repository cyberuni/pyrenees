import type { ReactRenderer } from '@storybook/react'
import type { DecoratorFunction } from 'storybook/internal/types'
import { StorySwatch, type StorySwatchProps } from '../components/story-swatch.js'

export function withStorySwatch(props?: Omit<StorySwatchProps, 'children'>): DecoratorFunction<ReactRenderer> {
	return function withStorySwatch(Story, { name, parameters: { docs, storySwatch } }) {
		return (
			<StorySwatch message={docs?.description?.story ?? name} {...props} {...storySwatch}>
				<Story />
			</StorySwatch>
		)
	}
}
