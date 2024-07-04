import type {
  LinksFunction,
  LoaderFunctionArgs,
  MetaFunction,
} from '@vercel/remix';

import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from '@remix-run/react';
import { getLatestVersion } from 'fast-npm-meta';
import { eslogan, siteTitle } from './globals';

// Styles:
import stylesheet from '@/styles/globals.css?url';
import { cn } from './utils';

// Layout:
import Header from './components/header';
import SidebarContent from './components/sidebar/sidebar';
import { proseClasses } from './ui/prose';

// Providers:
import { ToastProvider } from '@pheralb/toast';
import {
  PreventFlashOnWrongTheme,
  ThemeProvider,
  useTheme,
} from 'remix-themes';
import { themeSessionResolver } from './sessions.server';

// MDX Components:
import { MDXProvider } from '@mdx-js/react';
import { mdxComponents } from './components/mdx';

// Stores:
import { useDocsStore } from './store';

// Links:
export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: stylesheet },
  {
    rel: 'apple-touch-icon',
    sizes: '180x180',
    href: '/images/logo.png',
  },
  {
    rel: 'icon',
    type: 'image/png',
    sizes: '32x32',
    href: '/images/logo.png',
  },
  {
    rel: 'icon',
    type: 'image/png',
    sizes: '16x16',
    href: '/images/logo.png',
  },
  { rel: 'manifest', href: '/manifest.webmanifest' },
  { rel: 'icon', href: '/images/logo_ico.ico' },
];

// Metadata:
export const meta: MetaFunction = ({ matches }) => {
  const parentMeta = matches
    .flatMap((match) => match.meta ?? [])
    .filter((meta) => !('title' in meta));
  return [...parentMeta, { title: `${eslogan} | ${siteTitle}` }];
};

export async function loader({ request }: LoaderFunctionArgs) {
  const { getTheme } = await themeSessionResolver(request);
  const metadata = await getLatestVersion('@pheralb/toast');
  return {
    theme: getTheme(),
    npmVersion: metadata.version,
  };
}

export default function AppWithProviders() {
  const data = useLoaderData<typeof loader>();
  return (
    <ThemeProvider specifiedTheme={data.theme} themeAction="/action/set-theme">
      <App />
    </ThemeProvider>
  );
}

function App() {
  const data = useLoaderData<typeof loader>();
  const [theme] = useTheme();
  const { toastPosition, toastTheme } = useDocsStore();
  return (
    <html lang="en" className={cn(theme)}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <PreventFlashOnWrongTheme ssrTheme={Boolean(data.theme)} />
        <Links />
      </head>
      <body
        className={cn(
          'font-sans antialiased',
          'bg-neutral-50 dark:bg-neutral-900',
          'text-neutral-900 dark:text-neutral-50',
        )}
      >
        <ToastProvider
          position={toastPosition}
          theme={toastTheme ?? theme!}
          toastFont="font-sans"
        >
          <Header />
          <main className="container w-full max-w-7xl">
            <aside className="hidden md:block">
              <SidebarContent npmVersion={data.npmVersion!} />
            </aside>
            <MDXProvider disableParentContext components={mdxComponents}>
              <article
                className={cn(
                  'ml-0 max-w-4xl py-8 duration-100 md:ml-64',
                  proseClasses,
                )}
              >
                <Outlet />
              </article>
            </MDXProvider>
          </main>
        </ToastProvider>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}
