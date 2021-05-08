import ts from '@wessberg/rollup-plugin-ts';
import { terser } from 'rollup-plugin-terser';

const browserName = 'isNullOrEmpty';

export default [
    {
        input: 'src/index.ts',
        output: [
            { file: 'dist/umd/index.js', name: browserName, format: 'umd', sourcemap: true },
            { file: 'dist/esm/index.js', format: 'esm', sourcemap: true },
            { file: 'dist/index.js', format: 'cjs', sourcemap: true },
        ],
        plugins: [ts()],
    },
    {
        input: 'src/index.ts',
        output: [
            { file: 'dist/umd/index.min.js', name: browserName, format: 'umd', sourcemap: true, plugins: [terser()] },
        ],
        plugins: [ts({ tsconfig: 'tsconfig.min.json' })],
    },
];
