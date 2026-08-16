// @ts-check
import eslint from '@eslint/js'
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'
import globals from 'globals'
import tseslint from 'typescript-eslint'

export default tseslint.config(
	{
		ignores: ['eslint.config.*', 'prettier.config.*', 'dist/**']
	},
	eslint.configs.recommended,
	...tseslint.configs.recommended,
	eslintPluginPrettierRecommended,
	{
		languageOptions: {
			globals: globals.node,
			sourceType: 'module'
		}
	},
	{
		rules: {
			'prettier/prettier': ['warn', { endOfLine: 'auto' }]
		}
	}
)
