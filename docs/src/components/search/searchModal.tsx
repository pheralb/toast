import { allRoutes } from '@/docs.config';
import { Button } from '@/ui/button';

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/ui/command';
import { FileIcon, SearchIcon } from 'lucide-react';
import { useEffect, useState } from 'react';

const SearchModal = () => {
  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };
    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, []);

  return (
    <>
      <Button
        variant="ghost"
        size="icon"
        title="Search"
        onClick={() => setOpen(true)}
      >
        <SearchIcon size={20} strokeWidth={1.5} />
        <span className="sr-only">Toggle theme</span>
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          {allRoutes.map((doc) => (
            <>
              <CommandGroup
                key={doc.category}
                heading={doc.category}
                title={doc.category}
              >
                {doc.routes.map((route) => (
                  <CommandItem
                    key={route.path}
                    title={route.title}
                    onSelect={() => {
                      setOpen(false);
                      window.location.href = route.path;
                    }}
                  >
                    {route.icon ? (
                      <route.icon width={14} height={14} strokeWidth={1.5} />
                    ) : (
                      <FileIcon size={14} strokeWidth={1.5} />
                    )}
                    <span>{route.title}</span>
                  </CommandItem>
                ))}
              </CommandGroup>
            </>
          ))}
        </CommandList>
      </CommandDialog>
    </>
  );
};

export default SearchModal;
