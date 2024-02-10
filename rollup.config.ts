import packageJson from './package.json';

import babel from '@rollup/plugin-babel';
import external from 'rollup-plugin-peer-deps-external';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';
import css from 'rollup-plugin-import-css';
import terser from '@rollup/plugin-terser';

const name = packageJson.main.replace(/\.js$/, '');

export default {
  input: 'src/index.ts',
  output: [
    {
      file: `${name}.js`,
      format: 'cjs',
      exports: 'auto',
      preserveModules: false,
      sourcemap: true,
    },
    {
      file: `${name}.es.js`,
      format: 'es',
      exports: 'auto',
      preserveModules: false,
      sourcemap: true,
    },
  ],
  plugins: [
    external(),
    typescript({ clean: true }),
    babel({
      configFile: './.babelrc',
      babelHelpers: 'bundled',
    }),
    resolve(),
    commonjs(),
    css({ output: 'butalert.css' }),
    terser(),
  ],
};
