import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { HomeIcon, BookIcon } from 'lucide-react';

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: 'My App',
    },
    links: [
      {
        icon: <HomeIcon />,
        text: 'Home',
        url: '/',
        active: 'url',
      },
      {
        icon: <BookIcon />,
        text: 'Docs',
        url: '/docs',
        active: 'nested-url',
      },
    ],
  };
}
