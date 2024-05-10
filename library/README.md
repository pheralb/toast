## ✨ Features

- [x] 🍂 Lightweight.
- [x] ✅ Accessible.
- [x] 🎨 Light/dark mode.
- [x] ⏲️ Don't close automatically when the user hover over the toast.
- [x] 🏗️ Customizable toast position.

## 🛫 Getting Started

> [!IMPORTANT]
> This library requires **React ^18** installed.

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
// 📃 main.tsx
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
