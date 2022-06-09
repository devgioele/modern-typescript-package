require('esbuild').buildSync({
  entryPoints: ['src/index.ts'],
  outdir: 'dist/cjs',
  bundle: true,
  sourcemap: true,
  minify: true,
  format: 'cjs',
  target: ['esnext'],
  platform: 'node',
  tsconfig: 'tsconfig.build.json',
  // Exclude dependencies from bundle
  external: ['./node_modules/*']
})
