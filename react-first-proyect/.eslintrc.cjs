module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  settigns: {
    react: {
      version: "detect" // puedes decirle a eslint que detecte la version de react
    }
  },
  extends: [
    'standard',
    'plugin:react/recommended',
    'eslint-config-prettier'
  ],
  overrides: [
    {
      env: {
        node: true
      },
      files: [
        '.eslintrc.{js,cjs}'
      ],
      parserOptions: {
        sourceType: 'script'
      }
    }
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    'react'
  ],
  rules: {
  }
}
