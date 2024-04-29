// @ts-check
import antfu from '@antfu/eslint-config'

export default antfu(
  {
    ignores: [
      '**/src/assets/collections.json',
      '**/public/collections',
      '**/public/lib',
      '**/release',
      '**/collections-info.json',
      '**/collections-meta.json',
      '**/dist-electron',
    ],
    formatters: true,
  },
  {
    rules: {
      'style/no-multiple-empty-lines': 'warn',
      'ts/no-require-imports': 'off',
      'vue/no-unused-vars': 'off',
      'no-unused-vars': 'warn',
      'no-console': 'off',
      'vue/no-console': 'off',
      'node/prefer-global/console': 'off',
      'prefer-promise-reject-errors': 'warn',
      'no-undef': 'warn',
      'import/order': 'off',
      'vue/first-attribute-linebreak': 'off',
      'eslintvue/html-indent': 'off',
      'vue/html-closing-bracket-newline': 'off',
      'antfu/top-level-function': 'off',
      'ts/no-var-requires': 'off',
      'style/eol-last': 'warn',
      'vue/attribute-hyphenation': 'off',
      'ts/consistent-type-imports': 'off',
    },
  },
)
