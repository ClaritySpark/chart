import esbuild from "esbuild";
import { nodeExternalsPlugin } from "esbuild-node-externals";

const baseConfig = {
  entryPoints: ["src/index.ts"],
  outdir: "dist",
  bundle: true,
  sourcemap: true,
  plugins: [nodeExternalsPlugin()],
};

Promise.all([
  // cjs
  esbuild.build({
    ...baseConfig,
    format: "cjs",
    outExtension: {
      ".js": ".cjs",
    },
    minify: true,
  }),
  // esm
  esbuild.build({
    ...baseConfig,
    format: "esm",
    minify: true,
  }),
]).catch(() => {
  console.log("Build failed");
  process.exit(1);
});
