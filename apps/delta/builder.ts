Bun.build({
	entrypoints: ["./src/main.ts"],
	outdir: "./dist",
	splitting: true,
	target: "node",
  minify: true
});

