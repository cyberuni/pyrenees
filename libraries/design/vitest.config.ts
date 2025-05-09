import { configDefaults } from '@repobuddy/vitest/config'
import { defineConfig, mergeConfig } from 'vitest/config'
import config from './vite.config.js'

export default mergeConfig(
	config,
	defineConfig({
		test: {
			coverage: {
				include: configDefaults.include.vitestDefault,
				exclude: configDefaults.exclude.test,
			},
			workspace: ['vitest.config.browser.ts'],
		},
	}),
)
