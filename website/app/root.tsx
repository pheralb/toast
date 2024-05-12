import type { LinksFunction, LoaderFunctionArgs } from '@vercel/remix';

import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from '@remix-run/react';

// Styles:
import stylesheet from '@/styles/globals.css?url';
import { cn } from './utils';

// Layout:
import Header from './components/header';
import SidebarContent from './components/sidebar';
import { proseClasses } from './ui/prose';

// Providers:
import { ToastProvider } from '@pheralb/toast';
import {
  PreventFlashOnWrongTheme,
  ThemeProvider,
  useTheme,
} from 'remix-themes';
import { themeSessionResolver } from './sessions.server';

export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: stylesheet },
];

export async function loader({ request }: LoaderFunctionArgs) {
  const { getTheme } = await themeSessionResolver(request);
  return {
    theme: getTheme(),
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
        <Header />
        <ToastProvider position="bottom-right" theme={theme!}>
          <div className="container mx-auto max-w-7xl">
            <SidebarContent />
            <article
              className={cn('ml-60 w-full max-w-4xl py-8', proseClasses)}
            >
              <Outlet />
            </article>
          </div>
        </ToastProvider>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}
