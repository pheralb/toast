import { type ActionFunctionArgs } from '@vercel/remix';
import { createThemeAction } from 'remix-themes';
import { themeSessionResolver } from '@/sessions.server';

export const themeAction = createThemeAction(themeSessionResolver);

export async function action(args: ActionFunctionArgs) {
  return themeAction(args);
}
