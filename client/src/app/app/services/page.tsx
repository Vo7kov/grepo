import { FC } from 'react';

import { Banknote } from 'lucide-react';
import Link from 'next/link';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const AvailableServices: FC = () => {
  const services = [
    // {
    //   name: 'Pay for Purchases',
    //   description: 'Easily use your points to pay in supported stores.',
    //   icon: <ShoppingCart size={48} className="text-green-700" />,
    //   href: './services/payment',
    // },
    {
      name: 'Pay Taxes',
      description: 'Redeem your points to cover tax payments quickly.',
      icon: <Banknote size={48} className="text-green-700" />,
      href: './services/payment',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-green-50">
      <header className="w-full bg-green-700 text-green-50 p-4 text-center shadow-lg">
        <h1 className="text-2xl font-bold">Available Services</h1>
        <p className="text-sm mt-1">Choose how you want to use your points.</p>
      </header>

      <main className="flex-grow p-4 grid gap-4 grid-cols-1 grid-rows-2 sm:grid-cols-2">
        {services.map((service) => (
          <Link href={service.href} key={service.name} className="no-underline">
            <Card className="h-full flex flex-col items-center justify-center p-6 bg-white shadow-lg border border-green-200 hover:shadow-md transition-all cursor-pointer">
              <CardHeader className="text-center">
                <div className="flex justify-center">{service.icon}</div>
                <CardTitle className="text-green-800 text-xl font-semibold mt-2">
                  {service.name}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 text-sm">{service.description}</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </main>
    </div>
  );
};

export default AvailableServices;
