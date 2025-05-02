import type { StoryObj } from '@storybook/react'
import { expect } from '@storybook/test'
import { StorySwatch, withStorySwatch } from '../../../storybook/index.js'
import { Heading, HeadingContext } from '../../index.js'

export default {
	title: 'components/typography/Heading',
	component: Heading,
}
type Story = StoryObj<typeof Heading>

export const Size: Story = {
	render() {
		return (
			<StorySwatch>
				<Heading fontSize="xs">Alice in Wonderland (size: xs)</Heading>
				<Heading fontSize="sm">Alice in Wonderland (size: sm)</Heading>
				<Heading fontSize="md">Alice in Wonderland (size: md - default)</Heading>
				<Heading fontSize="lg">Alice in Wonderland (size: lg)</Heading>
				<Heading fontSize="xl">Alice in Wonderland (size: xl)</Heading>
				<Heading fontSize="2xl">Alice in Wonderland (size: 2xl)</Heading>
				<Heading fontSize="3xl">Alice in Wonderland (size: 3xl)</Heading>
				<Heading fontSize="4xl">Alice in Wonderland (size: 4xl)</Heading>
			</StorySwatch>
		)
	},
}
export const Normal: Story = {
	render() {
		return (
			<StorySwatch>
				<Heading data-testid="as-xs-semibold" fontSize="xs">
					Alice in Wonderland (size: xs, weight: semibold - no option)
				</Heading>
				<Heading data-testid="as-sm-semibold" fontSize="sm">
					Alice in Wonderland (size: sm, weight: semibold - no option)
				</Heading>
				<Heading data-testid="as-base-medium" fontSize="md">
					Alice in Wonderland (size: base, weight: medium - default)
				</Heading>
			</StorySwatch>
		)
	},
}

export const ElementType: Story = {
	parameters: {
		docs: {
			description: {
				story: 'By default, `Title` renders as a `h1` element. But, you can use h1...h6 with the `as` prop.',
			},
		},
	},
	render() {
		return (
			<StorySwatch>
				<Heading data-testid="as-h1">Alice in Wonderland (level: 1 - default)</Heading>
				<Heading data-testid="as-h2" level={2}>
					Alice in Wonderland (level: 2)
				</Heading>
				<Heading data-testid="as-h3" level={3}>
					Alice in Wonderland (level: 3)
				</Heading>
				<Heading data-testid="as-h4" level={4}>
					Alice in Wonderland (level: 4)
				</Heading>
				<Heading data-testid="as-h5" level={5}>
					Alice in Wonderland (level: 5)
				</Heading>
				<Heading data-testid="as-h6" level={6}>
					Alice in Wonderland (level: 6)
				</Heading>
			</StorySwatch>
		)
	},
	async play({ canvas }) {
		const nodeNames = await (
			await Promise.all([
				canvas.findByTestId('as-h1'),
				canvas.findByTestId('as-h2'),
				canvas.findByTestId('as-h3'),
				canvas.findByTestId('as-h4'),
				canvas.findByTestId('as-h5'),
				canvas.findByTestId('as-h6'),
			])
		).map((n) => n.nodeName)
		expect(nodeNames).toEqual(['H1', 'H2', 'H3', 'H4', 'H5', 'H6'])
	},
}

export const OverrideLevel: Story = {
	decorators: [withStorySwatch()],
	render() {
		return (
			<HeadingContext.Provider value={{ level: 2 }}>
				<Heading data-testid="override-level">Heading in h2</Heading>
			</HeadingContext.Provider>
		)
	},
	async play({ canvas }) {
		const overrideHeadingNode = await canvas.findByTestId('override-level')
		expect(overrideHeadingNode.nodeName).toBe('H2')
	},
}

export const OverrideWithSlot: Story = {
	decorators: [withStorySwatch()],
	render() {
		return (
			<HeadingContext.Provider
				value={{
					slots: {
						heading: { level: 2 },
					},
				}}
			>
				<Heading data-testid="override-level">Heading in h2</Heading>
			</HeadingContext.Provider>
		)
	},
	async play({ canvas }) {
		const overrideHeadingNode = await canvas.findByTestId('override-level')
		expect(overrideHeadingNode.nodeName).toBe('H2')
	},
}

export const OverrideWithDifferentSlot: Story = {
	decorators: [withStorySwatch()],
	render() {
		return (
			<HeadingContext.Provider
				value={{
					slots: {
						sub: { level: 2 },
					},
				}}
			>
				<Heading data-testid="override-level" slot="sub">
					Heading in h2
				</Heading>
			</HeadingContext.Provider>
		)
	},
	async play({ canvas }) {
		const overrideHeadingNode = await canvas.findByTestId('override-level')
		expect(overrideHeadingNode.nodeName).toBe('H2')
	},
}
