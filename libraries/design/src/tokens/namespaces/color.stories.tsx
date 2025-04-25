import type { Meta, StoryObj } from '@storybook/react'

export default {
	parameters: {
		layout: 'centered',
	},
} satisfies Meta

export const Red100: StoryObj = {
	name: 'red-100',
	render() {
		return <div className="pds:h-8 pds:w-8 pds:bg-red-100" />
	},
}

export const Red200: StoryObj = {
	name: 'red-200',
	render() {
		return <div className="pds:h-8 pds:w-8 pds:bg-red-200" />
	},
}
