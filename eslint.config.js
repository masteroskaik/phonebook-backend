import js from '@eslint/js'
import globals from 'globals'

export default [
  { 
    ignores: ['dist/**', 'node_modules/**'] 
  },
  js.configs.recommended,
  {
    languageOptions: {
      globals: { ...globals.node }
    },
    rules: {
      'indent': ['error', 2],
      'quotes': ['error', 'single'],
      'semi': ['error', 'never'],
      'no-unused-vars': 'error',
      'no-console': 0
    }
  }
]