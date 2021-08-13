module.exports = {
    'arrow-parens': ['warn', 'as-needed', {
        requireForBlockBody: true,
    }],

    'class-methods-use-this': 'off',

    indent: ['warn', 4, { SwitchCase: 1 }],

    'lines-between-class-members': 'off',

    'max-classes-per-file': 'off',

    'max-len': ['warn', {
        code: 120,
        ignoreUrls: true,
        ignoreComments: true,
        ignoreRegExpLiterals: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
    }],

    'no-console': 'off',

    'no-continue': 'off',

    'no-param-reassign': ['error', {
        props: false,
    }],

    // deprecated in favor of func-call-spacing
    'no-spaced-func': 'off',

    'no-use-before-define': ['error', {
        functions: false,
        classes: false,
        variables: false,
    }],

    'object-curly-newline': ['warn', {
        ObjectExpression: { minProperties: 6, multiline: true, consistent: true },
        ObjectPattern: { minProperties: 6, multiline: true, consistent: true },
        ImportDeclaration: { minProperties: 6, multiline: true, consistent: true },
        ExportDeclaration: { minProperties: 6, multiline: true, consistent: true },
    }],

    'object-curly-spacing': ['warn', 'always'],

    'spaced-comment': 'off',

    'import/prefer-default-export': 'off',
};
