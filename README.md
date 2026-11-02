# react-desktop

React host for **Open Web Desktop**.

This repository is the React counterpart of [`owdproject/nuxt-desktop`](https://github.com/owdproject/nuxt-desktop).
It is a host, not an extension: it ships the starter that `create-owd` copies
when a user chooses the React framework, and it is where React apps, modules,
themes and kits are developed.

## Starter

`template/` is the starter copied by `create-owd --framework react` (or through
the `desktop init` framework picker). It is a Vite + React application that
consumes the published engine and React packages:

- `@owdproject/core` — framework-independent engine
- `@owdproject/react` — React adapter (hooks, application/window registration)
- `@owdproject/react-kit-react95` — React95 UI kit
- `owd-react-theme-win95` — win95 desktop theme

The React95 kit and the win95 theme are **not published on npm**: their source is
in the `dxlliv` org, so `template/` consumes the theme from
`git+https://github.com/dxlliv/react-theme-win95.git`. Only sources under the
`owdproject` org are published.

A generated project keeps its own `.owd/project.json` framework profile.

## Relationship with create-owd and the CLI

`create-owd` delegates to `@owdproject/cli`, which clones this repository
(`STARTER_REPOS.react`) and copies `template/` into the new project. Starter
logic lives in the CLI, not here.

The React control panel is not implemented yet; generated React projects are
built and run with their own `pnpm` scripts until the adapter and control panel
support them.

## Status

Early scaffold. The React adapter, kit and theme exist and are verified in an
isolated consumer; the host structure widens as React apps/modules land.
