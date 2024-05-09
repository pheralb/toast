import { createCookieSessionStorage } from '@vercel/remix';
import { createThemeSessionResolver } from 'remix-themes';

// You can default to 'development' if process.env.NODE_ENV is not set
const isProduction = process.env.NODE_ENV === 'production';

const sessionStorage = createCookieSessionStorage({
  cookie: {
    name: 'toast-website-theme',
    path: '/',
    httpOnly: true,
    sameSite: 'lax',
    secrets: ['s3cr3t'],
    ...(isProduction ? { domain: 'toast.pheralb.dev', secure: true } : {}),
  },
});

export const themeSessionResolver = createThemeSessionResolver(sessionStorage);
