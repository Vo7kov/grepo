import { FC } from 'react';

import { CreditCard, Home, ShoppingBag } from 'lucide-react';
import Link from 'next/link';

import { Button } from '@/components/ui/button';

export const Navigation: FC = () => {
  const buttons = [
    {
      name: 'Services',
      icon: <CreditCard size={24} />,
      to: '/app/services',
    },
    {
      name: 'Main',
      icon: <Home size={36} />,
      to: '/app/dashboard',
    },
    {
      name: 'Shops',
      icon: <ShoppingBag size={24} />,
      to: '/app/stores',
    },
  ];

  return (
    <footer className="fixed bottom-0 left-0 w-full bg-white shadow-md border-t border-green-300">
      <nav className="flex justify-around p-2 bg-green-700">
        {buttons.map((button) => {
          const { name, to, icon } = button;

          return (
            <Button
              key={name}
              asChild
              variant="ghost"
              className="flex flex-col items-center text-green-50 hover:bg-[transparent]"
            >
              <Link href={to}>
                {icon}
                <span className="text-xs">{name}</span>
              </Link>
            </Button>
          );
        })}
      </nav>
    </footer>
  );
};
