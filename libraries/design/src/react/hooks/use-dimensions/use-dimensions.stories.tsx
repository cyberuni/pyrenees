import { useDimensions } from './use-dimensions.js'

export default {
	title: 'hooks/useDimensions',
	component: useDimensions,
	parameters: {
		docs: {
			description: {
				component: `
This hook is used to retrieve window dimensions.
`,
			},
		},
	},
}

export function Default() {
	const { width, height } = useDimensions()

	return (
		<div>
			<div>width: {width}</div>
			<div>height: {height}</div>
		</div>
	)
}
