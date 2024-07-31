import type {
  LinksFunction,
  LoaderFunctionArgs,
  MetaFunction,
} from '@vercel/remix';

import {
  isRouteErrorResponse,
  Link,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
  useRouteError,
} from '@remix-run/react';
import { getLatestVersion } from 'fast-npm-meta';
import { eslogan, siteTitle, siteUrl, siteUrlImages } from './globals';

// Styles:
import stylesheet from '@/styles/globals.css?url';
import { cn } from './utils';

// Layout:
import Header from './components/header';
import SidebarContent from './components/sidebar/sidebar';
import { proseClasses } from './ui/prose';

// Providers:
import { Toaster } from '@pheralb/toast';
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

// Other:
import { Logo } from './components/icons';
import { buttonVariants } from './ui/button';

// Links:
export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: stylesheet },
  {
    rel: 'preload',
    as: 'font',
    href: '/fonts/GeistVF.woff2',
    type: 'font/woff2',
    crossOrigin: 'anonymous',
  },
  {
    rel: 'preload',
    as: 'font',
    href: '/fonts/GeistMonoVF.woff2',
    type: 'font/woff2',
    crossOrigin: 'anonymous',
  },
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
  { rel: 'icon', href: '/images/favicon.ico' },
];

// Metadata:
export const meta: MetaFunction = ({ matches }) => {
  const parentMeta = matches
    .flatMap((match) => match.meta ?? [])
    .filter((meta) => !('title' in meta));
  return [
    ...parentMeta,
    { title: siteTitle },
    { name: 'description', content: eslogan },
  ];
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
    <html lang="en" className={cn(theme, 'scroll-smooth focus:scroll-auto')}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Og Meta Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={siteTitle} />
        <meta property="og:description" content={eslogan} />
        <meta
          name="image"
          property="og:image"
          content={`${siteUrlImages}/og_image_2_white.jpg`}
        />
        <meta property="og:image:width" content="1827" />
        <meta property="og:image:height" content="1213" />
        <meta property="og:url" content={siteUrl} />
        <meta property="og:site_name" content={siteTitle} />
        <meta name="author" content="@pheralb_" />
        {/* Twitter Og Meta Tags */}
        <meta
          name="twitter:image"
          content={`${siteUrlImages}/og_image_2_white.jpg`}
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@pheralb_" />
        <meta name="twitter:site" content="@pheralb_" />
        <meta name="twitter:title" content={siteTitle} />
        {/* App Meta Function */}
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
        <Header />
        <main className="container w-full max-w-7xl">
          <aside className="hidden md:block">
            <SidebarContent npmVersion={data.npmVersion!} />
          </aside>
          <MDXProvider disableParentContext components={mdxComponents}>
            <article
              className={cn(
                'ml-0 max-w-4xl py-8 duration-100 md:ml-[273px]',
                proseClasses,
              )}
            >
              <Outlet />
            </article>
          </MDXProvider>
        </main>
        <Toaster
          position={toastPosition}
          theme={toastTheme ?? theme!}
          toastFont="font-sans"
        />
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export function ErrorBoundary() {
  const error = useRouteError();
  return (
    <html lang="en" className="dark">
      <head>
        <title>Oops! - @pheralb/toast</title>
        <Meta />
        <Links />
      </head>
      <body className="flex h-screen flex-col items-center justify-center space-y-4 bg-neutral-900 font-sans text-white">
        <Logo className="h-12 w-12" />
        <h1 className="text-2xl font-medium tracking-tight">
          {isRouteErrorResponse(error)
            ? `${error.status} ${error.statusText}`
            : error instanceof Error
              ? error.message
              : 'Unknown Error'}
        </h1>
        <Link
          to="/"
          className={buttonVariants({
            variant: 'outline',
          })}
        >
          Go back home
        </Link>
        <p className="font-mono text-sm">@pheralb/toast</p>
        <Scripts />
      </body>
    </html>
  );
}
