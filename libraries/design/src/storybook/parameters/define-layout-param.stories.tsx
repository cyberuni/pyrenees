import type { Meta, StoryObj } from '@storybook/react'
import { defineLayoutParam } from '../index.js'

export default {
	title: 'storybook/parameters/defineLayoutParam',
	render: () => <div>test content</div>,
} satisfies Meta

export const Padded: StoryObj = {
	name: 'padded',
	parameters: defineLayoutParam('padded'),
}

export const Centered: StoryObj = {
	name: 'centered',
	parameters: defineLayoutParam('centered'),
}

export const Fullscreen: StoryObj = {
	name: 'fullscreen',
	parameters: defineLayoutParam('fullscreen'),
	render: () => (
		<div className="pds:box-border pds:h-screen pds:w-screen pds:flex">
			<div className="pds:w-full pds:flex pds:items-center pds:justify-center">
				center
				<div className="pds:absolute pds:top-0 pds:left-0">top-left</div>
				<div className="pds:absolute pds:top-0 pds:right-0">top-right</div>
				<div className="pds:absolute pds:bottom-0 pds:left-0">bottom-left</div>
				<div className="pds:absolute pds:bottom-0 pds:right-0">bottom-right</div>
			</div>
		</div>
	),
}
