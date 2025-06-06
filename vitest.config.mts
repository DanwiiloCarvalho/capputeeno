import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
    plugins: [tsconfigPaths(), react()],
    test: {
        globals: true,
        environment: 'jsdom',
        setupFiles: ['./vitestSetup.ts'],
        coverage: {
            provider: 'v8',
            include: [
                'src/**/*.{ts,tsx}',
            ],
            exclude: [
                '.next/**',
                'next.config.*',
                'src/types/**',
                'src/app/layout.tsx',
                'src/app/components/defaultPageLayout.ts',
                'src/lib/**',
            ],
        }
    },
})