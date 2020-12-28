const overrideAirbnb = require('./rules/override-airbnb');

module.exports = {
    env: {
        node: true,
    },
    plugins: [
        'simple-import-sort',
    ],
    extends: [
        'eslint-config-airbnb-base',
    ],
    rules: {
        ...overrideAirbnb,

        'simple-import-sort/sort': 'warn',
        'sort-imports': 'off',
        'import/order': 'off',
    },
};
