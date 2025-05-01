import { coverageConfigDefaults, defineConfig } from 'vitest/config'

// More info at: https://storybook.js.org/docs/writing-tests/test-addon
export default defineConfig({
	test: {
		coverage: {
			exclude: [
				'**/*.{spec,test,unit,accept,integrate,system,perf,stress,study}.{js,jsx,cjs,mjs,ts,tsx,cts,mts}',
				'**/*.{spec,test,unit,accept,integrate,system,perf,stress,study}.*.{js,jsx,cjs,mjs,ts,tsx,cts,mts}',
				'**/*.stories.{js,mjs,jsx,ts,tsx}',
				...coverageConfigDefaults.exclude,
			],
		},
		workspace: [
			'./packages/node-library/vitest.config.ts',
			'./libraries/design/vitest.config.browser.ts',
			'./apps/storybook/vitest.config.ts',
			'./react/pyrenees/vitest.config.ts',
		],
	},
})
