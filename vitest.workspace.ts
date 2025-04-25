import { defineWorkspace } from 'vitest/config'

export default defineWorkspace([
	'./packages/node-library/vitest.config.ts',
	'./libraries/design/vitest.config.ts',
	'./apps/storybook/vitest.config.ts',
	'./react/pyrenees/vitest.config.ts',
])
