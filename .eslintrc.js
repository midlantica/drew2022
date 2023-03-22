module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'plugin:vue/vue3-recommended',
    // 'plugin:@typescript-eslint/recommended',
    // 'standard-with-typescript'
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    ecmaFeatures: {
      experimentalObjectRestSpread: true
    },
    sourceType: 'module'
  },
  plugins: ['vue'],
  rules: {
    indent: ['error', 2],
    'vue/script-indent': ['error', 2, {
      baseIndent: 1,
      switchCase: 0,
      ignores: []
    }],
    'vue/html-indent': [
      1,
      2,
      {
        attribute: 1,
        baseIndent: 1,
        closeBracket: 0,
        alignAttributesVertically: true,
        ignores: []
      }
    ],
    'vue/max-attributes-per-line': ['error', {
      singleline: {
        max: 3
      },
      multiline: {
        max: 3
      }
    }],
    'vue/no-v-html': 0
  },
  overrides: [
    {
      files: ['*.vue'],
      rules: {
        indent: 'off'
      }
    }
  ]
}
