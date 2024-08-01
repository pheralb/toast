import { unstable_defineAction as defineAction } from '@vercel/remix';
import { createThemeAction } from 'remix-themes';
import { themeSessionResolver } from '@/sessions.server';

export const action = defineAction(createThemeAction(themeSessionResolver));
