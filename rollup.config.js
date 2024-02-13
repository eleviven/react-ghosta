import packageJson from './package.json' assert { type: 'json' };

import { defineConfig } from 'rollup';
import babel from '@rollup/plugin-babel';
import ts from 'rollup-plugin-ts';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import css from 'rollup-plugin-import-css';
import terser from '@rollup/plugin-terser';

const name = packageJson.main.replace(/\.js$/, '');

export default defineConfig({
  input: 'src/index.ts',
  output: [
    {
      file: `${name}.js`,
      format: 'cjs',
      exports: 'auto',
    },
    {
      file: `${name}.mjs`,
      format: 'esm',
      exports: 'auto',
    },
  ],
  plugins: [
    peerDepsExternal(),
    ts({ tsconfig: './tsconfig.json' }),
    babel({
      configFile: './.babelrc',
      babelHelpers: 'bundled',
    }),
    nodeResolve(),
    commonjs(),
    css({ output: 'ghosta.css', minify: true }),
    terser({
      compress: true,
    }),
  ],
});
