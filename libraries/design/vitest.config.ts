import { defineConfig, mergeConfig } from 'vitest/config'
import config from './vite.config.js'

// More info at: https://storybook.js.org/docs/writing-tests/test-addon
export default mergeConfig(
	config,
	defineConfig({
		test: {
			workspace: ['vitest.config.browser.ts'],
		},
	}),
)
