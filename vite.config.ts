import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import { readFileSync } from "fs"
import { homedir } from "os"
import { resolve } from "path"
import customFunctionsMetadataPlugin from "vite-plugin-custom-functions-metadata"

const homeDir = homedir()
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    customFunctionsMetadataPlugin({
      inputFile: resolve(__dirname, "functions/functions.ts"),
      outputFile: resolve(__dirname, "functions/functions.json"),
    }),
  ],
  server: {
    port: 3000,
    strictPort: true,
    https: {
      key: readFileSync(resolve(`${homedir}/.office-addin-dev-certs/localhost.key`)),
      cert: readFileSync(resolve(`${homedir}/.office-addin-dev-certs/localhost.crt`)),
      ca: readFileSync(resolve(`${homedir}/.office-addin-dev-certs/ca.crt`)),
    },
  },
})
