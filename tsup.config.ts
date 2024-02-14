import { defineConfig } from 'tsup';
import path from 'path';
import fs from 'fs';

const cssFiles = fs.readdirSync(path.resolve(__dirname, 'src/assets'));
const cssEntryPoints = cssFiles.reduce((acc, file) => {
  const fileName = file.replace(/\.css$/, '');
  acc[fileName] = `src/assets/${file}`;
  return acc;
}, {});

export default [
  defineConfig({
    entry: ['src/index.ts'],
    format: ['cjs', 'esm'],
    splitting: true,
    sourcemap: true,
    clean: true,
    minify: true,
    dts: true,
  }),
  defineConfig({
    entry: {
      ...cssEntryPoints,
    },
    splitting: false,
    clean: true,
    minify: true,
  }),
];
