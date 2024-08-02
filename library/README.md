<div align="center">
  <a href="https://toast.pheralb.dev">
    <img
      src="https://toast.pheralb.dev/images/logo_svg.svg"
      alt="@pheralb/toast"
      height="60"
    />
  </a>
  <p />
  <p>
    <b>
      An accessible toast library for React.
    </b>
  </p>

<a href="https://toast.pheralb.dev/">Documentation</a>
<span>&nbsp;&nbsp;✦&nbsp;&nbsp;</span>
<a href="#-getting-started">Getting Started</a>
<span>&nbsp;&nbsp;✦&nbsp;&nbsp;</span>
<a href="#-contributing">Contribute</a>
<span>&nbsp;&nbsp;✦&nbsp;&nbsp;</span>
<a href="#-roadmap">Roadmap</a>
<span>&nbsp;&nbsp;✦&nbsp;&nbsp;</span>
<a href="#-license">License</a>

</div>

<div align="center">

![React Badge](https://img.shields.io/badge/Library-61DAFB?logo=react&logoColor=000&style=flat)
![Astro Badge](https://img.shields.io/badge/Astro-BC52EE?logo=astro&logoColor=fff&style=flat)
![Vitest Badge](https://img.shields.io/badge/Testing-6E9F18?logo=vitest&logoColor=fff&style=flat)
![GitHub releases](https://img.shields.io/github/release/pheralb/toast)
![npm bundle size](https://img.shields.io/bundlephobia/min/%40pheralb%2Ftoast)
[![Build Status](https://img.shields.io/endpoint.svg?url=https%3A%2F%2Factions-badge.atrox.dev%2Fpheralb%2Ftoast%2Fbadge%3Fref%3Dmain&style=flat)](https://actions-badge.atrox.dev/pheralb/toast/goto?ref=main)
![GitHub stars](https://img.shields.io/github/stars/pheralb/toast)
![GitHub issues](https://img.shields.io/github/issues/pheralb/toast)

</div>

## 🪐 Features

- [x] 🍂 Lightweight.
- [x] ✅ Accessible.
- [x] 🎨 Light/dark mode.
- [x] ⏲️ Don't close automatically when the user hover over the toast.
- [x] 🏗️ Customizable toast position.
- [x] 🍃 Disable transitions if the user has disabled them in the system.
- [x] 💙 Built completely with Typescript.

## ✨ Inspiration

- [x] 🎨 Notification Design by [**Medusa.js UI** Framework](https://medusajs.com/framework/).
- [x] 🛠️ Typescript API by [**Sonner**](https://sonner.emilkowal.ski).
- [x] 🪄 [**Phosphor Icons**](https://phosphoricons.com/) for success, error, warning and info icons.

## 🚀 Getting Started

> [!IMPORTANT]
> This library requires **React v18** or higher.

1. Install the library:

```bash
# Using npm:
npm install @pheralb/toast

# Using pnpm:
pnpm add @pheralb/toast

# Using yarn:
yarn install @pheralb/toast
```

2. Add the toast provider:

```tsx
// 📃 root.tsx

import { Toaster } from '@pheralb/toast';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
    <Toaster />
  </React.StrictMode>,
);
```

3. Usage:

```jsx
// 📃 index.tsx

import { toast } from '@pheralb/toast';

export default function Index() {
  return (
    <>
      <button
        onClick={() =>
          toast.success({
            text: 'pheralb/toast',
            description: '✨ A beautiful toast library for React',
          })
        }
      >
        <span>Render a toast</span>
      </button>
    </>
  );
}
```

> [!TIP]
> 📚 Visit the [**Documentation**](https://toast.pheralb.dev/) for more information.

## 🔭 Roadmap

- [ ] 🚗 Add `.loading` variant.
- [x] 📚 Add support for Astro + React.
- [ ] 🎨 Add rich colors support.

## 🤝 Contributing

[`pheralb/toast`](https://github.com/pheralb/toast) is a monorepo built with [Turbo](https://turbo.build/repo) and it uses:

- [**Library**](https://github.com/pheralb/toast/tree/main/library): React 18 with tsup + Vitest for testing.
- [**Website**](https://github.com/pheralb/toast/tree/main/website): Astro Content Collections, shadcn/ui + Tailwind CSS & MDX.
- [**Examples**](https://github.com/pheralb/toast/tree/main/examples): Frameworks to test the library.

1. [Click here to fork](https://github.com/pheralb/toast/fork) the repository.

2. Install dependencies:

```bash
# Install pnpm globally if you don't have it:
npm install -g pnpm

# and install dependencies:
pnpm install
```

3. Commands:

```bash
# Run only documentation website:
pnpm dev:docs

# Run all packages with examples:
pnpm dev

# Build the docs & library:
pnpm build

# Test the library:
pnpm test
```

🧑‍🚀 Open [`http://localhost:4321`](http://localhost:4321) to view the **Astro** documentation website.

🔎 Only for test the functionality of the library:

- Open [`http://localhost:3000`](http://localhost:3000) to view the **Next.js** playground.
- Open [`http://localhost:4321`](http://localhost:4321) to view the **Astro** playground.

and create a pull request with your features or fixes 🚀✨.

<a href="https://github.com/pheralb/toast/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=pheralb/toast" />
</a>

## 📃 License

[MIT License](https://github.com/pheralb/toast/blob/main/LICENSE) - [**pheralb**](https://pheralb.dev) 2024.
