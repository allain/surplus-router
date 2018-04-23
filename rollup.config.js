import surplus from 'rollup-plugin-surplus';
import babel from 'rollup-plugin-babel'

import pkg from './package.json'

export default {
  input:'src/index.js',
  output: [
    {
      file: pkg.main,
      format: 'cjs'
    },
    {
      file: pkg.module,
      format: 'es'
    }
  ],
  external: [
    's-js', 
    'path-to-regexp'
  ],
  plugins: [
    surplus(),
    babel({
      exclude: 'node_modules/**/*.js'
    })
  ]
}
