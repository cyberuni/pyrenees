import { storybookTest } from '@storybook/experimental-addon-test/vitest-plugin'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig, mergeConfig } from 'vitest/config'
import config from './vite.config.js'

const dirname = typeof __dirname !== 'undefined' ? __dirname : path.dirname(fileURLToPath(import.meta.url))

// More info at: https://storybook.js.org/docs/writing-tests/test-addon
export default mergeConfig(
	config,
	defineConfig({
		test: {
			workspace: [
				{
					extends: true,
					plugins: [
						storybookTest({ configDir: path.join(dirname, '.storybook') }),
						{
							name: 'override',
							config(base) {
								return mergeConfig(
									{
										test: {
											browser: {
												enabled: true,
												headless: true,
												instances: [
													{
														name: 'chromium',
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
											coverage: {
												include: ['{src,source,code}/**/*.{js,mjs,cjs,ts,jsx,tsx,cts,mts}'],
												exclude: [
													'**/*.{spec,test,unit,accept,integrate,system,perf,stress,study}.{js,jsx,cjs,mjs,ts,tsx,cts,mts}',
													'**/*.{spec,test,unit,accept,integrate,system,perf,stress,study}.*.{js,jsx,cjs,mjs,ts,tsx,cts,mts}',
													'**/*.stories.{js,mjs,jsx,tsx}',
												],
											},
										},
									},
									base,
								)
							},
						},
					],
					test: {
						name: 'design',
						setupFiles: ['.storybook/vitest.setup.ts'],
					},
				},
			],
		},
	}),
)
