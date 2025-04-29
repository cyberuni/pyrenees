import type { DataAttributeProps, StyleProps } from '@just-web/types'

export interface StoryRootParam extends StyleProps {
	themes?:
		| {
				dark?: (StyleProps & DataAttributeProps) | undefined
				light?: (StyleProps & DataAttributeProps) | undefined
		  }
		| undefined
}

export function defineStoryRootParam(storyRoot: StoryRootParam) {
	return { storyRoot }
}
