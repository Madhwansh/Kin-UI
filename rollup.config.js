// rollup.config.js
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import resolve           from '@rollup/plugin-node-resolve';
import commonjs          from '@rollup/plugin-commonjs';
import postcss           from 'rollup-plugin-postcss';
import babel             from '@rollup/plugin-babel';
import { terser }        from 'rollup-plugin-terser';

export default {
  input: 'src/components/index.js',
  output: [
    { file: 'dist/index.cjs.js', format: 'cjs', sourcemap: true },
    { file: 'dist/index.esm.js', format: 'esm', sourcemap: true },
  ],
  plugins: [
    // 1) don’t bundle peer deps (react, framer-motion…)
    peerDepsExternal(),
    // 2) tell Rollup to resolve .js and .jsx imports
    resolve({ extensions: ['.js', '.jsx'] }),
    // 3) convert CommonJS modules to ES6
    commonjs(),
    // 4) handle CSS imports inside your components
    postcss({ extract: false /* inline styles into JS */ }),
    // 5) run Babel on your JS/JSX
    babel({
      babelHelpers: 'bundled',
      extensions:    ['.js', '.jsx'],
      include:       ['src/**/*']
    }),
    // 6) minify
    terser(),
  ],
};
