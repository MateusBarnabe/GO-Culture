import Link from 'next/link';
import { Map, Newspaper, User } from 'lucide-react';
import { Logo } from '@/components/icons/Logo';
import UserNav from '@/components/layout/UserNav';
import { cn } from '@/lib/utils';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <Logo className="h-8 w-8" />
          <span className="hidden font-bold sm:inline-block font-headline">
            GO!Culture
          </span>
        </Link>
        <nav className="flex items-center gap-4 text-sm">
          <Link
            href="/"
            className={cn(
              'transition-colors hover:text-foreground/80 text-foreground/60'
            )}
          >
            <div className="flex items-center gap-2">
              <Map className="h-4 w-4" />
              <span>Mapa</span>
            </div>
          </Link>
          <Link
            href="/feed"
            className={cn(
              'transition-colors hover:text-foreground/80 text-foreground/60'
            )}
          >
            <div className="flex items-center gap-2">
              <Newspaper className="h-4 w-4" />
              <span>Feed</span>
            </div>
          </Link>
          <Link
            href="/profile"
            className={cn(
              'transition-colors hover:text-foreground/80 text-foreground/60'
            )}
          >
             <div className="flex items-center gap-2">
              <User className="h-4 w-4" />
              <span>Perfil</span>
            </div>
          </Link>
        </nav>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <UserNav />
        </div>
      </div>
    </header>
  );
}
