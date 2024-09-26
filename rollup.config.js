import { defineConfig } from "rollup";
import dts from "unplugin-isolated-decl/rollup";
import esbuild from "rollup-plugin-esbuild";

export default defineConfig({
	input: {
		entry1: "packages/foo/src/foo.ts",
		entry2: "packages/foo/src/baz/index.ts",
	},
	output: {
		dir: "packages/foo/dist",
	},
	plugins: [dts(), esbuild()],
});
