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
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    "ecmaFeatures": {
      "experimentalObjectRestSpread": true
    },
    sourceType: 'module'
  },
  plugins: [
    'vue'
  ],
  rules: {
    "vue/html-indent": [1, 2, {
      "attribute": 1,
      "baseIndent": 0,
      "closeBracket": 0,
      "alignAttributesVertically": true,
      "ignores": []
    }],
    "vue/multi-word-component-names": [0, {
      "ignores": []
    }]
  }
}
