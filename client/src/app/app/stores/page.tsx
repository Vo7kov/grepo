import { FC } from 'react';

import Image from 'next/image';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const SupportedStores: FC = () => {
  const stores = [
    {
      name: 'Zabka',
      logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROjwwJq2Xlc1xmncvh0RieNLsuV1EqJTmmgA&s',
    },
    {
      name: 'Lidl',
      logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMwuMOpraAIZU_0VSGvKavi6tWOpKFP3AmEQ&s',
    },
    { name: 'Zara', logo: 'https://static.cdnlogo.com/logos/z/3/zara.png' },
    {
      name: 'H&M',
      logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSifn7PA-XEOxP0LjD2Sd0HrNS8m2hQaIzFAA&s',
    },
    {
      name: 'IKEA',
      logo: 'https://w7.pngwing.com/pngs/695/521/png-transparent-comic-book-comics-retail-ikea-coupon-others-thumbnail.png',
    },
    {
      name: 'Carrefour',
      logo: 'https://images.seeklogo.com/logo-png/2/1/carrefour-logo-png_seeklogo-26550.png?v=638660568250000000',
    },
    {
      name: 'Auchan',
      logo: 'https://seeklogo.com/images/A/Auchan-logo-1FB47C5456-seeklogo.com.png',
    },
    {
      name: 'Decathlon',
      logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqVq_kwejkjVLFjbad3ZDqeImfpn1c2_rGoQ&s',
    },
    {
      name: 'MediaMarkt',
      logo: 'https://logowik.com/content/uploads/images/328_mediamarkt.jpg',
    },
    {
      name: 'Starbucks',
      logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/Starbucks_Corporation_Logo_2011.svg/1200px-Starbucks_Corporation_Logo_2011.svg.png',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-green-50">
      {/* Header */}
      <header className="w-full bg-green-700 text-green-50 p-4 text-center shadow-lg">
        <h1 className="text-2xl font-bold">Supported Stores</h1>
        <p className="text-sm mt-1">
          Redeem your points at the following shops and services.
        </p>
      </header>

      {/* Main Content */}
      <main className="flex-grow p-4 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {stores.map((store, index) => (
          <Card
            key={index}
            className="flex flex-col items-center justify-center p-4 bg-white shadow-lg border border-green-200 hover:shadow-md transition-all"
          >
            <CardHeader>
              <CardTitle className="text-center text-green-800 text-lg font-semibold">
                {store.name}
              </CardTitle>
            </CardHeader>
            <CardContent className="flex justify-center items-center">
              <Image
                src={store.logo}
                alt={`${store.name} logo`}
                width={64}
                height={64}
                className="w-16 h-16 object-contain"
              />
            </CardContent>
          </Card>
        ))}
      </main>
    </div>
  );
};

export default SupportedStores;
