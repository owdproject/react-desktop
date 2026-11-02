# Open Web Desktop — React starter

A minimal React desktop built on the framework-independent engine.

```sh
pnpm install
pnpm dev      # Vite dev server
pnpm build    # production bundle in dist/
```

## What is in here

- `src/main.tsx` — mounts the app and loads the React95 kit/theme styles.
- `src/App.tsx` — creates a `@owdproject/core` desktop and renders `<DesktopShell />` from `owd-react-theme-win95`.
- `src/apps/` — application configs registered with `registerReactApplication` from `@owdproject/react`.

Registered apps depend on the engine/adapter, not on a theme catalog. The shell
only receives presentation data for the apps the project registers.

## Stack

| Layer | Package |
| --- | --- |
| Engine | `@owdproject/core` |
| React adapter | `@owdproject/react` |
| UI kit | `@owdproject/react-kit-react95` |
| Theme | `owd-react-theme-win95` |

> The win95 theme and its React95 kit are **not** published on npm: their source
> lives in the `dxlliv` org. This starter consumes the theme from
> `git+https://github.com/dxlliv/react-theme-win95.git`, never from the registry.

Extensions follow the framework-first naming convention:
`@owdproject/react-app-*`, `@owdproject/react-module-*`, `@owdproject/react-theme-*`,
`@owdproject/react-kit-*`.
