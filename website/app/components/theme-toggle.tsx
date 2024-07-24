import { Moon, Sun } from 'lucide-react';
import { Theme, useTheme } from 'remix-themes';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/ui/dropdown-menu';
import { Button } from '@/ui/button';

export function ModeToggle() {
  const [theme, setTheme] = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="group">
          {theme === Theme.LIGHT ? (
            <Moon
              size={22}
              strokeWidth={1.4}
              className="transition-transform duration-300 group-hover:-translate-y-[1.2px]"
            />
          ) : (
            <Sun
              size={22}
              strokeWidth={1.4}
              className="transition-transform duration-300 group-hover:-translate-y-[1.2px]"
            />
          )}
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme(Theme.LIGHT)}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme(Theme.DARK)}>
          Dark
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
