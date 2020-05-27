import ts from "@wessberg/rollup-plugin-ts";

const pkg = require('./package.json')

export default {
  input: 'src/index.ts',
  output: [
    { dir: 'dist/umd', name: 'isNullOrEmpty', format: 'umd', sourcemap: true, },
    { dir: 'dist/esm', format: 'esm', sourcemap: true },
    { dir: 'dist', format: 'cjs', sourcemap: true },
  ],
  plugins: [ts()],
};
