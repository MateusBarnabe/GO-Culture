import { cn } from '@/lib/utils';
import type { SVGProps } from 'react';

export function Logo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn("text-primary", props.className)}
      {...props}
    >
      <path d="M12 2C8.13 2 5 5.13 5 9c0 4.17 4.76 10.42 6.32 12.34a1 1 0 0 0 1.36 0C14.24 19.42 19 13.17 19 9c0-3.87-3.13-7-7-7z" fill="currentColor"/>
      <circle cx="12" cy="9" r="2.5" fill="hsl(var(--background))"/>
    </svg>
  );
}
