import type { CSSProperties } from 'react'

export interface StoryRootParam {
	dark?: CSSProperties | undefined
	light?: CSSProperties | undefined
}

export function defineStoryRoot(storyRoot: StoryRootParam) {
	return { storyRoot }
}
