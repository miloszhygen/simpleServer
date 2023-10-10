import { build } from "esbuild";

build({
  entryPoints: ["server/index.mjs"],
  bundle: true,
  platform: "node",
  outfile: "dist/bundle.js",
}).catch(() => process.exit(1));
