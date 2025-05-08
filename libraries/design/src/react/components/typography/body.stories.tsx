import type { StoryObj } from '@storybook/react'
import { expect } from '@storybook/test'
import { TextContext } from 'react-aria-components'
import { tw } from '../../../index.js'
import { StorySwatch } from '../../../storybook/index.js'
import { Body } from './body.js'
import { bodyTheme } from './body.theme.js'

export default {
	title: 'components/typography/Body',
	component: Body,
	tags: ['snapshot'],
}

type Story = StoryObj<typeof Body>

export const Size: Story = {
	tags: ['snapshot'],
	render() {
		return (
			<StorySwatch>
				<Body className={bodyTheme.className.fontSize.xs}>Alice in Wonderland (size: xs)</Body>
				<Body className={bodyTheme.className.fontSize.sm}>Alice in Wonderland (size: sm)</Body>
				<Body className={bodyTheme.className.fontSize.md}>Alice in Wonderland (size: md - default)</Body>
				<Body className={bodyTheme.className.fontSize.lg}>Alice in Wonderland (size: lg)</Body>
			</StorySwatch>
		)
	},
}

export const TextColor: Story = {
	tags: ['snapshot'],
	render() {
		return (
			<StorySwatch>
				<Body className={bodyTheme.className.color.primary}>Alice in Wonderland (color: primary)</Body>
				<Body className={bodyTheme.className.color.secondary}>Alice in Wonderland (color: secondary)</Body>
				<Body className={bodyTheme.className.color.hint}>Alice in Wonderland (color: hint)</Body>
				<Body className={bodyTheme.className.color.disabled}>Alice in Wonderland (color: disabled)</Body>
				<Body className={bodyTheme.className.color.success}>Alice in Wonderland (color: success)</Body>
				<Body className={bodyTheme.className.color.error}>Alice in Wonderland (color: error)</Body>
			</StorySwatch>
		)
	},
}
export const Italic: Story = {
	render: () => (
		<StorySwatch>
			<Body className={bodyTheme.className.italic}>Alice in Wonderland (italic)</Body>
		</StorySwatch>
	),
}

export const FontWeight: Story = {
	tags: ['snapshot'],
	render() {
		return (
			<StorySwatch>
				<Body className={bodyTheme.className.fontWeight.normal}>Alice in Wonderland (weight: normal - default)</Body>
				<Body className={bodyTheme.className.fontWeight.semibold}>Alice in Wonderland (weight: semibold)</Body>
				<Body className={bodyTheme.className.fontWeight.bold}>Alice in Wonderland (weight: bold)</Body>
			</StorySwatch>
		)
	},
}

export const ElementType: Story = {
	parameters: {
		docs: {
			description: {
				story: 'By default, the `Body` renders as a `p` element. But, you can use any element type with `as` prop.',
			},
		},
	},
	render() {
		return (
			<StorySwatch>
				<Body>Alice in Wonderland (as: p - default)</Body>
				<Body elementType="div" data-testid="as-div">
					Alice in Wonderland (as: div)
				</Body>
				<Body elementType="blockquote" data-testid="as-bq">
					Alice in Wonderland (as: blockquote)
				</Body>
				<Body elementType="cite" data-testid="as-cite">
					Alice in Wonderland (as: cite)
				</Body>
				<Body elementType="del" data-testid="as-del">
					Alice in Wonderland (as: del)
				</Body>
			</StorySwatch>
		)
	},
	async play({ canvas }) {
		const div = canvas.getByTestId('as-div')
		const bq = canvas.getByTestId('as-bq')
		const cite = canvas.getByTestId('as-cite')
		const del = canvas.getByTestId('as-del')
		expect(div.nodeName).toEqual('DIV')
		expect(bq.nodeName).toEqual('BLOCKQUOTE')
		expect(cite.nodeName).toEqual('CITE')
		expect(del.nodeName).toEqual('DEL')
	},
}

export const OverrideContext: Story = {
	render() {
		return (
			<TextContext.Provider value={{ className: tw`pds:body-text-2xs` }}>
				<StorySwatch>
					<Body className="pds:body-text-2xl">Alice in Wonderland</Body>
				</StorySwatch>
			</TextContext.Provider>
		)
	},
}
// export const WithDOMTitle: Story = {
// 	tags: ['!snapshot'],
// 	render() {
// 		return (
// 			<Body hoverTitle="HTML DOM Element title on hover">
// 				<span className={Body.className.italic}>Alice in Wonderland</span> is a famous children's novel written by{' '}
// 				<span className={Body.className.weight.bold}>Lewis Carroll</span>. It tells the story of a young girl named{' '}
// 				<span className={Body.className.weight.semibold}>Alice</span> who falls down a rabbit hole and enters a
// 				fantastical world filled with peculiar creatures and bizarre adventures. From the grinning{' '}
// 				<span className={Body.className.weight.bold}>Cheshire Cat</span> to the{' '}
// 				<span className={Body.className.weight.normal}>Mad Hatter</span>'s tea party,{' '}
// 				<span className={Body.className.weight.semibold}>Alice</span> encounters a series of strange and whimsical
// 				characters that challenge her perceptions of reality. The novel is a beloved classic that has captured the
// 				imaginations of readers for generations.
// 			</Body>
// 		)
// 	}
// }

// export const WithTitleAndTruncate: Story = {
// 	tags: ['!snapshot'],
// 	render() {
// 		return (
// 			<div className="twds:w-96">
// 				<Body data-testid="body" hoverTitle="HTML DOM Element title on hover" truncate>
// 					<span className={Body.className.italic}>Alice in Wonderland</span> is a famous children's novel written by{' '}
// 					<span className={Body.className.weight.bold}>Lewis Carroll</span>. It tells the story of a young girl named{' '}
// 					<span className={Body.className.weight.semibold}>Alice</span> who falls down a rabbit hole and enters a
// 					fantastical world filled with peculiar creatures and bizarre adventures. From the grinning{' '}
// 					<span className={Body.className.weight.bold}>Cheshire Cat</span> to the{' '}
// 					<span className={Body.className.weight.normal}>Mad Hatter</span>'s tea party,{' '}
// 					<span className={Body.className.weight.semibold}>Alice</span> encounters a series of strange and whimsical
// 					characters that challenge her perceptions of reality. The novel is a beloved classic that has captured the
// 					imaginations of readers for generations.
// 				</Body>
// 			</div>
// 		)
// 	}
// 	// async play({ canvasElement }) {
// 	// 	const root = within(canvasElement)
// 	// 	const content = await root.findByTestId('body')
// 	// 	// expect(content).toHaveClass('twds:truncate')
// 	// 	expect(content).toHaveAttribute('title', 'HTML DOM Element title on hover')
// 	// 	await userEvent.unhover(content)
// 	// 	await userEvent.hover(content)
// 	// }
// }
