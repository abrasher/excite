# !! Work in Progress Template !!

# Office Excel Add-in with Vue 3 + TypeScript + Vite

This template should help you get started with office add-ins in Excel with Vue 3, TypeScript and Vite.

Supports:

- Taskpane
- Commands
- Custom excel functions
- Shared Runtime
- Generate function metadata automatically
- Generate dev and prod versions of the manifest
- Running locally with https

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

- [ ] Eslint

## Handling Manifest.xml during build

This is handled by the "vite-plugin-office-addin" plugin for vite which will update the manifest.xml for production builds with the URL specified in the file `.env.production` or overridden on the command line when you build by setting the environment variable `ADDIN_PROD_URL=<your prod url` s

## Type Support For `.vue` Imports in TS

Since TypeScript cannot handle type information for `.vue` imports, they are shimmed to be a generic Vue component type by default. In most cases this is fine if you don't really care about component prop types outside of templates. However, if you wish to get actual prop types in `.vue` imports (for example to get props validation when using manual `h(...)` calls), you can enable Volar's Take Over mode by following these steps:

1. Run `Extensions: Show Built-in Extensions` from VS Code's command palette, look for `TypeScript and JavaScript Language Features`, then right click and select `Disable (Workspace)`. By default, Take Over mode will enable itself if the default TypeScript extension is disabled.
2. Reload the VS Code window by running `Developer: Reload Window` from the command palette.

You can learn more about Take Over mode [here](https://github.com/johnsoncodehk/volar/discussions/471).
