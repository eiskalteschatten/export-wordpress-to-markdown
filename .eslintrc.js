module.exports = {
  'env': {
    'es2022': true,
    'node': true,
  },
  'extends': [
    'eslint:recommended',
    'plugin:import/errors',
  ],
  'parserOptions': {
    'ecmaVersion': 2022,
    'sourceType': 'module',
  },
  'plugins': [
    'promise',
    'import',
  ],
  'rules': {
    'indent': 'off',
    'linebreak-style': ['error', 'unix'],
    'quotes': ['error', 'single'],
    'semi': ['off'],
    'no-console': ['off'],
    'no-case-declarations': ['off'],
    'prefer-const': ['error', {
      'destructuring': 'all',
    }],
    'arrow-parens': ['error', 'as-needed'],
    'no-param-reassign': 'off',
    'promise/catch-or-return': 'error',
    'promise/param-names': 'error',
    'promise/no-return-wrap': 'error',
    'no-async-promise-executor': 'off',
    'object-curly-spacing': ['error', 'always'],
    'keyword-spacing':  ['error', {
      'before': true,
      'after': true,
    }],
    'block-spacing': ['error', 'always'],
    'space-before-blocks': ['error', 'always'],
    'space-in-parens': ['error', 'never'],
    'comma-dangle': ['error', {
      'arrays': 'always-multiline',
      'objects': 'always-multiline',
      'imports': 'always-multiline',
      'exports': 'always-multiline',
      'functions': 'never',
    }],
    'brace-style': ['error', 'stroustrup'],
    'prefer-destructuring': ['error', {
      'VariableDeclarator': {
        'array': false,
        'object': true,
      },
      'AssignmentExpression': {
        'array': false,
        'object': false,
      },
    }],
    'import/first': 'error',
    'import/order': ['error', { groups: [['builtin', 'external', 'internal']] }],
    'import/no-unresolved': 'off',
  },
  'overrides': [{
    'files': ['*.json'],
    'rules': {
      'quotes': ['error', 'double'],
      'semi': ['error', 'never'],
      'comma-dangle': ['error', 'never'],
      '@typescript-eslint/semi': ['off'],
    },
  }],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        moduleDirectory: ['node_modules', 'src/'],
      },
      typescript: {
        alwaysTryTypes: true, // always try to resolve types under `<roo/>@types` directory even if it doesn't contain any source code, like `@types/unist`
      },
    },
  },
};
