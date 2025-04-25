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
					plugins: [storybookTest({ configDir: path.join(dirname, '.storybook') })],

					test: {
						name: 'design',
						browser: {
							enabled: true,
							headless: true,
							instances: [{ browser: 'chromium' }],
							provider: 'playwright',
						},
						setupFiles: ['.storybook/vitest.setup.ts'],
					},
				},
			],
		},
	}),
)
