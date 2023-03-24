module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'plugin:vue/vue3-strongly-recommended',
    'plugin:@typescript-eslint/recommended',
    'standard-with-typescript'
  ],
  // parser: 'vue-eslint-parser',
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      globalReturn: false,
      impliedStrict: false,
      jsx: false
    }
  },
  plugins: [
    'vue'
  ],
  rules: {
    // indent: ['error', 2],
    'vue/html-indent': [1, 2, {
      baseIndent: 1,
      closeBracket: 0,
      alignAttributesVertically: true,
      ignores: []
    }],
    'vue/script-indent': ['error', 2, {
      baseIndent: 0,
      switchCase: 0,
      ignores: []
    }],
    'vue/multi-word-component-names': [0, {
      ignores: []
    }],
    'vue/max-attributes-per-line': ['error', {
      singleline: {
        max: 3
      },
      multiline: {
        max: 3
      }
    }]
  },
  overrides: [
    {
      files: ['*.vue'],
      rules: {
        indent: 1
      }
    }
  ]
}
