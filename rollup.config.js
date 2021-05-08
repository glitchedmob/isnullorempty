import ts from '@wessberg/rollup-plugin-ts';
import { terser } from 'rollup-plugin-terser';

export default {
    input: 'src/index.ts',
    output: [
        { file: 'dist/umd/index.js', name: 'isNullOrEmpty', format: 'umd', sourcemap: true },
        { file: 'dist/umd/index.min.js', name: 'isNullOrEmpty', format: 'umd', sourcemap: true, plugins: [terser()] },
        { file: 'dist/esm/index.js', format: 'esm', sourcemap: true },
        { file: 'dist/esm/index.min.js', format: 'esm', sourcemap: true, plugins: [terser()] },
        { file: 'dist/index.js', format: 'cjs', sourcemap: true },
        { file: 'dist/index.min.js', format: 'cjs', sourcemap: true, plugins: [terser()] },
    ],
    plugins: [ts()],
};
