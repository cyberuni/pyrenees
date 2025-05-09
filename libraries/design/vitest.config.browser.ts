import { browserTestPreset, mergeConfig } from '@repobuddy/vitest/config'
import { storybookTest } from '@storybook/experimental-addon-test/vitest-plugin'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { storybookVis } from 'storybook-addon-vis/vitest-plugin'
import { defineConfig } from 'vitest/config'
import config from './vite.config.js'

const dirname = typeof __dirname !== 'undefined' ? __dirname : path.dirname(fileURLToPath(import.meta.url))

// More info at: https://storybook.js.org/docs/writing-tests/test-addon
export default mergeConfig(
	config,
	defineConfig({
		plugins: [storybookTest({ configDir: path.join(dirname, '.storybook') }), storybookVis(), browserTestPreset()],
		test: {
			name: 'design',
			setupFiles: ['vitest.setup.ts'],
		},
	}),
)
