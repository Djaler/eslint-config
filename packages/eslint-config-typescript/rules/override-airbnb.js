const baseAirbnbOverrides = require('@djaler/eslint-config-base/rules/override-airbnb');

module.exports = {
    ...baseAirbnbOverrides,

    '@typescript-eslint/indent': baseAirbnbOverrides.indent,

    '@typescript-eslint/lines-between-class-members': baseAirbnbOverrides['lines-between-class-members'],

    '@typescript-eslint/no-use-before-define': [baseAirbnbOverrides['no-use-before-define'][0], {
        ...baseAirbnbOverrides['no-use-before-define'][1],
        enums: false,
        typedefs: false,
    }],
};

