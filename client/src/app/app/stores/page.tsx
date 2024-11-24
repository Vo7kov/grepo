import { FC } from 'react';

import axios from 'axios';
import Image from 'next/image';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

type Store = {
  id: string;
  name: string;
  image: string;
};

const SupportedStores: FC = async () => {
  const { data: stores } = await axios.get<Store[]>(
    `${process.env.NEXT_PUBLIC_API}/stores`,
  );

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
                src={store.image}
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
