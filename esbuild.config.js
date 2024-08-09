import { build } from "esbuild";

build({
  entryPoints: ["./src/index.js"],  // Entry point of your application
  bundle: true,
  minify: true,  // Minify the output
  sourcemap: false,  // Set to true if you want to generate sourcemaps
  outfile: "./dist/bundle.js",  // Output file
  platform: "node",  // Target platform is node for terminal execution
  format: "esm",  // Output format is ES module
  external: [
    "stream",
    "path",
    "fs",
    "os",
    "crypto",
    "net",
    "tls",
    "http",
    "https",
    "zlib",
    "url"
  ],  // Mark core Node.js modules as external
}).then(() => {
  console.log("Build completed!");
}).catch(() => {
  console.error("Build failed!");
  process.exit(1);
});
