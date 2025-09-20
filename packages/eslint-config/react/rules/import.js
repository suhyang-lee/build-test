import importPlugin from 'eslint-plugin-import'
import unusedImports from 'eslint-plugin-unused-imports'

export default {
    plugins: {import: importPlugin, 'unused-imports': unusedImports},
    rules: {
        /**
         * In exporting files, this rule checks if there is default export or not
         * @see https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/prefer-default-export.md
         */
        'import/prefer-default-export': 'off',

        /**
         * Disallow specified modules when loaded by import
         * @see https://eslint.org/docs/latest/rules/no-restricted-imports
         */
        'no-restricted-imports': [
            'error',
            {
                name: 'lodash',
                message:
                    'lodash는 CommonJS로 작성되어 있어 트리쉐이킹이 되지 않아 번들 사이즈를 크게 합니다. lodash/* 형식으로 import 해주세요.',
            },
        ],

        /**
         * Disallow unused imports
         * @see https://github.com/sweepline/eslint-plugin-unused-imports/blob/master/docs/rules/no-unused-imports.md
         */
        'unused-imports/no-unused-imports': 'error',
    },
}
