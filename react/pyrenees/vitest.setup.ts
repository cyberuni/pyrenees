import { setProjectAnnotations } from '@storybook/react'
import visAnnotation from 'storybook-addon-vis/preview'
import { vis } from 'storybook-addon-vis/vitest-setup'
import { beforeAll } from 'vitest'
import * as projectAnnotations from './.storybook/preview'

// This is an important step to apply the right configuration when testing your stories.
// More info at: https://storybook.js.org/docs/api/portable-stories/portable-stories-vitest#setprojectannotations
const project = setProjectAnnotations([visAnnotation, projectAnnotations])

beforeAll(project.beforeAll)

vis.presets.theme({
	async dark() {
		// document.documentElement.setAttribute('data-theme', 'dark')
		document.documentElement.classList.add('dark')
		document.documentElement.classList.remove('light')
	},
	async light() {
		// document.documentElement.setAttribute('data-theme', 'light')
		document.documentElement.classList.remove('dark')
		document.documentElement.classList.add('light')
	},
})
