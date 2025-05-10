import { defineDocsParam } from '@repobuddy/storybook'
import type { Meta, StoryObj } from '@storybook/react'
import { defineLayoutParam } from '../parameters/define-layout-param.js'
import { ColorItem, ColorPalette } from './color-palette.js'

export default {
	component: ColorPalette,
	parameters: defineLayoutParam('fullscreen'),
	decorators: [
		(Story) => (
			<div className="pds:w-full pds:max-w-screen-md pds:p-4">
				<Story />
			</div>
		),
	],
} satisfies Meta

export const SingleColor: StoryObj = {
	parameters: defineDocsParam({
		description: {
			story: 'The color palette component',
		},
	}),
	render() {
		return (
			<ColorPalette>
				<ColorItem title="--pds-color-red-*" subtitle="Red" colors="#320000" />
			</ColorPalette>
		)
	},
}

export const SingleColorCssVariable: StoryObj = {
	parameters: defineDocsParam({
		description: {
			story: 'The color palette component using CSS variable',
		},
	}),
	render() {
		return (
			<ColorPalette>
				<ColorItem title="--pds-color-red-500" subtitle="Red 500" colors="var(--pds-color-red-500)" />
			</ColorPalette>
		)
	},
}

export const MultipleColors: StoryObj = {
	parameters: defineDocsParam({
		description: {
			story: 'The color palette component with multiple color swatches',
		},
	}),
	render() {
		return (
			<ColorPalette>
				<ColorItem
					title="--pds-color-red-*"
					subtitle="Red"
					colors={{
						'50': '#fef2f2',
						'100': '#fee2e2',
						'200': '#fecaca',
						'300': '#fca5a5',
						'400': '#f87171',
						'500': '#ef4444',
						'600': '#dc2626',
						'700': '#b91c1c',
						'800': '#991b1b',
						'900': '#7f1d1d',
					}}
				/>
			</ColorPalette>
		)
	},
}
