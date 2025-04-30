import type { Meta, StoryObj } from '@storybook/react'
import { useColorTheme } from './use-color-theme'

const meta: Meta = {
	title: 'hooks/useColorTheme',
}

export default meta

type Story = StoryObj

export const Default: Story = {
	render() {
		const theme = useColorTheme()
		return <div>Current theme: {theme}</div>
	},
}
