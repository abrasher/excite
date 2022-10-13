import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import { readFileSync } from "fs"
import { homedir } from "os"
import { resolve } from "path"
import customFunctionsMetadataPlugin from "vite-plugin-custom-functions-metadata"
import officeAddin from "vite-plugin-office-addin"

const homeDir = homedir()
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    customFunctionsMetadataPlugin({
      inputFile: resolve(__dirname, "src/functions/functions.ts"),
      outputFile: resolve(__dirname, "public/functions.json"),
    }),
    officeAddin({}),
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
