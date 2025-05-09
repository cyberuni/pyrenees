import { storybookTest } from '@storybook/experimental-addon-test/vitest-plugin'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { storybookVis } from 'storybook-addon-vis/vitest-plugin'
import { defineConfig, mergeConfig } from 'vitest/config'
import config from './vite.config.js'

const dirname = typeof __dirname !== 'undefined' ? __dirname : path.dirname(fileURLToPath(import.meta.url))

// More info at: https://storybook.js.org/docs/writing-tests/test-addon
export default mergeConfig(
	config,
	defineConfig({
		plugins: [
			storybookTest({ configDir: path.join(dirname, '.storybook') }),
			storybookVis(),
			{
				name: 'override',
				config(base) {
					return mergeConfig(
						defineConfig({
							test: {
								browser: {
									enabled: true,
									headless: true,
									screenshotFailures: false,
									instances: [
										{
											name: `${base.test!.name} (chromium)`,
											browser: 'chromium',
										},
									],
									provider: 'playwright',
								},
								include: [
									'{src,source,code,tests}/**/*.{spec,test,unit,accept,integrate,system,perf,stress,study}.{js,cjs,mjs,ts,cts,mts}',
									'{src,source,code,tests}/**/*.{spec,test,unit,accept,integrate,system,perf,stress,study}.{jsx,tsx}',
									'{src,source,code,tests}/**/*.{spec,test,unit,accept,integrate,system,perf,stress,study}.browser*.{js,jsx,cjs,mjs,ts,tsx,cts,mts}',
								],
							},
						}),
						base,
					)
				},
			},
		],
		test: {
			name: 'design',
			setupFiles: ['vitest.setup.ts'],
		},
	}),
)
