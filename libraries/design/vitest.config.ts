import { defineConfig, mergeConfig } from 'vitest/config'
import config from './vite.config.js'

// More info at: https://storybook.js.org/docs/writing-tests/test-addon
export default mergeConfig(
	config,
	defineConfig({
		test: {
			coverage: {
				include: ['{src,source,code}/**/*.{js,mjs,cjs,ts,jsx,tsx,cts,mts}'],
				exclude: [
					'**/*.{spec,test,unit,accept,integrate,system,perf,stress,study}.{js,jsx,cjs,mjs,ts,tsx,cts,mts}',
					'**/*.{spec,test,unit,accept,integrate,system,perf,stress,study}.*.{js,jsx,cjs,mjs,ts,tsx,cts,mts}',
					'**/*.stories.{js,mjs,jsx,tsx}',
				],
			},
			workspace: ['vitest.config.browser.ts'],
		},
	}),
)
