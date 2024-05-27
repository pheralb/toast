<div align="center">
  <a href="https://toast.pheralb.dev">
    <img
      src="https://toast.pheralb.dev/images/logo_svg.svg"
      alt="@pheralb/toast"
      height="60"
    />
  </a>
  <br></br>
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
<a href="#-license">License</a>

</div>

<div align="center">

![React Badge](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=000&style=flat)
![GitHub releases](https://img.shields.io/github/release/pheralb/toast)
![npm bundle size](https://img.shields.io/bundlephobia/min/%40pheralb%2Ftoast)
[![Build Status](https://img.shields.io/endpoint.svg?url=https%3A%2F%2Factions-badge.atrox.dev%2Fpheralb%2Ftoast%2Fbadge%3Fref%3Dmain&style=flat)](https://actions-badge.atrox.dev/pheralb/toast/goto?ref=main)
![GitHub stars](https://img.shields.io/github/stars/pheralb/toast)
![GitHub issues](https://img.shields.io/github/issues/pheralb/toast)
![Remix Badge](https://img.shields.io/badge/Remix-000?logo=remix&logoColor=fff&style=flat)

</div>

## 🪐 Features

- [x] 🍂 Lightweight.
- [x] ✅ Accessible.
- [x] 🎨 Light/dark mode.
- [x] ⏲️ Don't close automatically when the user hover over the toast.
- [x] 🏗️ Customizable toast position.
- [x] 💙 Built completely with Typescript.

and inspired by [**Medusa.js UI** Notifications](https://medusajs.com) ✨

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
yarn add @pheralb/toast
```

2. Add the toast provider:

```tsx
// 📃 root.tsx
import { ToastProvider } from '@pheralb/toast';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ToastProvider position="bottom-right">
      <App />
    </ToastProvider>
  </React.StrictMode>,
);
```

3. Usage:

```jsx
// 📃 index.tsx
export default function Index() {
  const toast = useToast();
  return (
    <>
      <button
        onClick={() =>
          toast.open({
            text: 'pheralb/toast',
            description: '✨ A beautiful toast library for React',
            variant: 'success',
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
> 📚 Visit the [**Getting Started**](https://toast.pheralb.dev/) guide to view the full documentation and set up with other frameworks like Next.js, Remix or Astro.

## 🤝 Contributing

[`pheralb/toast`](https://github.com/pheralb/toast) is a monorepo built with [Turbo](https://turbo.build/repo) and it uses:

- [**Library**](https://github.com/pheralb/toast/tree/main/library): React 18 with tsup.
- [**Website**](https://github.com/pheralb/toast/tree/main/website): Remix, shadcn/ui + Tailwind CSS + Radix & MDX.

1. [Click here to fork](https://github.com/pheralb/toast/fork) the repository.
2. Install dependencies:

```bash
# Install pnpm globally if you don't have it:
npm install -g pnpm

# and install dependencies:
pnpm install
```

3. Run monorepo:

```
pnpm dev
```

and create a pull request with your features or fixes 🚀✨.

## 📃 License

- [MIT License](https://github.com/pheralb/toast/blob/main/LICENSE).
