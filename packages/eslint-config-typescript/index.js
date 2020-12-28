const overrideAirbnb = require('./rules/override-airbnb');
const overrideTypescriptEslint = require('./rules/override-typescript-eslint');

module.exports = {
    plugins: [
        '@typescript-eslint',
    ],
    parserOptions: {
        parser: require.resolve('@typescript-eslint/parser'),
    },
    extends: [
        '@djaler/base',
        'airbnb-typescript/base',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
    ],
    rules: {
        ...overrideAirbnb,
        ...overrideTypescriptEslint,

        '@typescript-eslint/array-type': ['warn', {
            default: 'array-simple',
        }],

        '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
    },
};
