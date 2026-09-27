import { defineConfig, globalIgnores } from 'eslint/config'
import nextVitals from 'eslint-config-next/core-web-vitals'
import nextTs from 'eslint-config-next/typescript'

export default defineConfig([
  ...nextVitals,
  ...nextTs,
  {
    rules: {
      // CookieBanner and ThemeToggle read browser-only state (localStorage,
      // the resolved theme) after hydration. With `output: 'export'` there is
      // no server value to seed from, so the post-mount setState is the point.
      'react-hooks/set-state-in-effect': 'warn',
    },
  },
  {
    // /check probes vendor-specific, untyped browser APIs (userAgentData,
    // navigator.connection, etc.) that have no lib.dom types.
    files: ['src/app/check/page.tsx'],
    rules: { '@typescript-eslint/no-explicit-any': 'off' },
  },
  globalIgnores(['.next/**', 'out/**', 'build/**', 'next-env.d.ts']),
])
