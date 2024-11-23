import antfu from '@antfu/eslint-config';

export default antfu(
  {},
  {
    rules: {
      'no-irregular-whitespace': 'off',
      'style/comma-dangle': ['error', 'always-multiline'],
      'style/semi': ['error', 'always'],
      'style/space-before-function-paren': ['error', 'always'],
      'antfu/top-level-function': 'off',
      'antfu/if-newline': 'off',
      'no-console': 'off',
    },
  },
);
