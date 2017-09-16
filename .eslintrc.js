
module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
    jquery: true,
    es6: true,
  },
  'globals': {
    'chrome': false,
  },
  // validate: ['javascript', 'html', 'vue'],
  extends: 'airbnb-base',
  // required to lint *.vue files
  plugins: [
    'html',
    'import',
  ],
  // check if imports actually resolve
  'settings': {
    'import/resolver': {
      'webpack': {
        'config': 'build/webpack.base.conf.js'
      }
    },
    'import/extensions': ['.js'],
    "html/html-extensions": [".html", ".vue"],
  },
  // add your custom rules here
  'rules': {
    // don't require .vue extension when importing
    'import/extensions': ['error', 'always', {
      'js': 'never',
      'vue': 'never'
    }],
    // allow optionalDependencies
    'import/no-extraneous-dependencies': ['error', {
      'optionalDependencies': ['test/unit/index.js']
    }],
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,

    // 允许log
    'no-console': 0,
    // 逗号
    'comma-dangle': 1,
    // 分号
    'semi': 1,

    'camelcase': 1,

    'no-underscore-dangle': 0,

    'no-unused-vars': 1,

    'max-len': 0,

    'no-param-reassign': 1,

    'no-restricted-syntax': 1,

    'func-names': 1,

    'eqeqeq': 1,

    'object-shorthand': 1,

    'quote-props': 1,

    'indent': 1,
  }
};
