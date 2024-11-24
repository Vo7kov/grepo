import { FC } from 'react';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const PaymentPage: FC = () => {
  const paymentCode = '123456';

  return (
    <div className="min-h-screen flex flex-col bg-green-50">
      <header className="w-full bg-green-700 text-green-50 p-4 text-center shadow-lg">
        <h1 className="text-2xl font-bold">Payment</h1>
        <p className="text-sm mt-1">
          Use your unique code to proceed with payment.
        </p>
      </header>

      <main className="flex-grow flex flex-col items-center justify-center space-y-6 p-4">
        <Card className="w-full max-w-sm bg-white shadow-lg border border-green-200">
          <CardHeader className="text-center">
            <CardTitle className="text-green-700 text-xl font-bold">
              Your Payment Code
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col items-center space-y-4">
            <div className="text-green-800 text-4xl font-bold">
              {paymentCode}
            </div>
            <p className="text-gray-600 text-center text-sm">
              Provide this code when making a payment.
            </p>
            <p className="text-red-600 text-center text-sm">
              This code is valid for the next 5 minutes.
            </p>
          </CardContent>
        </Card>

        <div className="text-center text-gray-700 text-sm px-4">
          <p>
            If the code expires, please refresh the page to generate a new one.
          </p>
        </div>
      </main>
    </div>
  );
};

export default PaymentPage;
