import { sveltekit } from '@sveltejs/kit/vite'
import { defineConfig } from 'vitest/config'

export default defineConfig({
	plugins: [sveltekit()],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}'],
		coverage: {
			all: true,
			include: ['src/**/*.{ts,js}'],
			exclude: ['src/app.d.ts', 'src/**/*.server.{ts,js}', 'src/scripts/create_git_branch.ts'],
			reporter: ['lcov', 'text'],
		},
	},
})
