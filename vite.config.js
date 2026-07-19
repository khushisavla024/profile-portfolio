import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { fileURLToPath } from "url";
import { defineConfig } from "vite";

const __filename = fileURLToPath(import.meta.url); // Get the resolved path to the file
const __dirname = path.dirname(__filename); // Get the name of the directory

export default defineConfig({
	plugins: [react(), tailwindcss()],
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "./src"),
		},
	},
	server: {
		port: 3000,
	},
	build: {
		// This forces Vite to use standard Rollup instead of experimental Rolldown
		rollupOptions: {
			// Keep your existing config here
		},
	},
});
