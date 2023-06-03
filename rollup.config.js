import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import dts from 'rollup-plugin-dts';
import  terser  from '@rollup/plugin-terser';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import { main, module as pModule } from './package.json';

console.log({main});

export default [
	{
		input: 'src/index.ts',
		output: [
			{
				file: main,
				format: 'cjs',
				sourcemap: true,
			},
			{
				file: pModule,
				format: 'esm',
				sourcemap: true,
			},
		],
		plugins: [
			peerDepsExternal(),
			resolve(),
			commonjs(),
			typescript({ tsconfig: './tsconfig.json' }),
			terser(),
		],
		external: ['react', 'react-dom', 'styled-components'],
	},
	{
		input: 'src/index.ts',
		output: [{ file: 'dist/types.d.ts', format: 'es' }],
		plugins: [dts.default()],
	},
];
