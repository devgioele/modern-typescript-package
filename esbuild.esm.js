require('esbuild').buildSync({
  entryPoints: ['src/index.ts'],
  outdir: 'dist/esm',
  bundle: true,
  sourcemap: true,
  minify: true,
  splitting: true,
  format: 'esm',
  target: ['esnext'],
  platform: 'node',
  tsconfig: 'tsconfig.build.json',
  // Exclude dependencies from bundle
  external: ['./node_modules/*']
})
