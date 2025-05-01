import type { Meta, StoryObj } from '@storybook/react'
import { LoadingIcon } from '../index.js'

const meta: Meta<typeof LoadingIcon> = {
	title: 'components/icons/LoadingIcon',
	component: LoadingIcon,
}
export default meta

type Story = StoryObj<typeof LoadingIcon>

export const Default: Story = {}

export const Sizes: Story = {
	render() {
		return (
			<div className="twds:flex twds:space-x-4">
				<LoadingIcon size="xxs" />
				<LoadingIcon size="xs" />
				<LoadingIcon size="sm" />
				<LoadingIcon size="md" />
				<LoadingIcon size="lg" />
				<LoadingIcon size="xl" />
				<LoadingIcon size="xxl" />
				<LoadingIcon size="3xl" />
				<LoadingIcon size="4xl" />
				<LoadingIcon size="5xl" />
			</div>
		)
	},
}
