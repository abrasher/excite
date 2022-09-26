# !! Work in Progress Template !!

# Office Excel Add-in with Vue 3 + TypeScript + Vite

This template should help you get started with office add-ins in Excel with Vue 3, TypeScript and Vite.

Supports:
- Taskpane
- Custom excel functions
- Generate function metadata automatically

## Install

Install dev ssl certs
```
npm run install-certs
```
or
```
npx office-addin-dev-certs install
```

Start dev server
```
npm run dev
```

Sideload add-in to excel
```
npm run sideload
```

### Todo

- [x] Custom Functions
  - [x] Initial setup example
  - [x] Vite plugin for metadata generation
- [ ] Use "vite-plugin-office-addin" which handles manifest.xml during building (see example below)
- [ ] Commands
- [ ] Eslint

## Handle Manifest.xml during build
I should add this in the template, but an example of how to replace URL in the manifest.xml file

```
import vue from "@vitejs/plugin-vue"
import { readFileSync } from "fs"
import { homedir } from "os"
import { resolve } from "path"
import { defineConfig } from "vite"
import officeAddin from "vite-plugin-office-addin"

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  const plugins = [
    vue(),
    officeAddin({
      devUrl: "https://localhost:3000",
      prodUrl: "https://yourdomain.com",
    }),
  ]

  if (mode === "development") {
    return {
      server: {
        port: 3000,
        strictPort: true,
        https: {
          key: readFileSync(resolve(`${homedir}/.office-addin-dev-certs/localhost.key`)),
          cert: readFileSync(resolve(`${homedir}/.office-addin-dev-certs/localhost.crt`)),
          ca: readFileSync(resolve(`${homedir}/.office-addin-dev-certs/ca.crt`)),
        },
      },
      plugins,
    }
  }
  return {
    plugins,
  }
})
```

## Type Support For `.vue` Imports in TS

Since TypeScript cannot handle type information for `.vue` imports, they are shimmed to be a generic Vue component type by default. In most cases this is fine if you don't really care about component prop types outside of templates. However, if you wish to get actual prop types in `.vue` imports (for example to get props validation when using manual `h(...)` calls), you can enable Volar's Take Over mode by following these steps:

1. Run `Extensions: Show Built-in Extensions` from VS Code's command palette, look for `TypeScript and JavaScript Language Features`, then right click and select `Disable (Workspace)`. By default, Take Over mode will enable itself if the default TypeScript extension is disabled.
2. Reload the VS Code window by running `Developer: Reload Window` from the command palette.

You can learn more about Take Over mode [here](https://github.com/johnsoncodehk/volar/discussions/471).
