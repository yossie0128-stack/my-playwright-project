import tseslint from 'typescript-eslint';

export default tseslint.config(
  ...tseslint.configs.recommendedTypeChecked,
  {
    // 対象ファイルをプロジェクトに合わせて確実に指定する
    files: ['**/*.ts', '**/*.tsx', 'tests/**/*.ts', 'test-examples/**/*.ts'], 
    languageOptions: {
      parserOptions: {
        project: './tsconfig.json',
        tsconfigRootDir: import.meta.dirname,
      },
    },
    rules: {
      '@typescript-eslint/no-floating-promises': 'error',
    },
  }
);
