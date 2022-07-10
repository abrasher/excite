import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import { readFileSync } from "fs"
import { homedir } from "os"
import { resolve } from "path"

const homeDir = homedir()
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    https: {
      key: readFileSync(resolve(`${homedir}/.office-addin-dev-certs/localhost.key`)),
      cert: readFileSync(resolve(`${homedir}/.office-addin-dev-certs/localhost.crt`)),
      ca: readFileSync(resolve(`${homedir}/.office-addin-dev-certs/ca.crt`)),
    },
  },
})
