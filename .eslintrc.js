module.exports = {
    extends: 'vue-impression',
    rules: {
        'keyword-spacing': ['error', {
            before: true,
            after: true,
            overrides: {
                if: { after: false },
                while: { after: false },
                return: { after: true },
                throw: { after: true },
                case: { after: true },
            },
        }],
        'operator-linebreak': ['error', 'after', {
            'overrides': {
                '?': 'before',
                ':': 'before'
            },
        }],
        'one-var': ['warn', 'always'],
        'one-var-declaration-per-line': ['error', 'always'],
    }
};
