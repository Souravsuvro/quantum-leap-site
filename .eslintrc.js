module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react', 
    '@typescript-eslint', 
    'react-hooks', 
    'jsx-a11y',
    'import',
  ],
  rules: {
    // TypeScript-specific rules
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
    '@typescript-eslint/no-empty-function': 'off',
    
    // React-specific rules
    'react/prop-types': 'off', 
    'react/react-in-jsx-scope': 'off', 
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    
    // General best practices
    'no-console': 'off',
    'no-debugger': 'warn',
    
    // Import order and organization
    'import/order': ['warn', {
      'groups': [
        'builtin', 
        'external', 
        'internal', 
        'parent', 
        'sibling', 
        'index'
      ],
      'newlines-between': 'always',
    }],
    
    // Accessibility rules
    'jsx-a11y/anchor-is-valid': ['warn', {
      components: ['Link'],
      specialLink: ['hrefLeft', 'hrefRight'],
      aspects: ['invalidHref', 'preferButton']
    }],
    'jsx-a11y/click-events-have-key-events': 'warn',
    'jsx-a11y/no-static-element-interactions': 'warn',
    'jsx-a11y/label-has-associated-control': 'warn',
    
    // Formatting and style
    'max-len': ['warn', { 
      code: 150, 
      tabWidth: 2, 
      comments: 150,
      ignoreUrls: true,
      ignoreStrings: true,
      ignoreTemplateLiterals: true,
    }],
    'indent': ['warn', 2],
    'quotes': ['warn', 'single'],
    'semi': ['warn', 'always'],
    
    // Unescaped entities
    'react/no-unescaped-entities': ['warn', {
      forbid: ['>', '}']
    }],
  },
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      typescript: {},
    },
  },
};
