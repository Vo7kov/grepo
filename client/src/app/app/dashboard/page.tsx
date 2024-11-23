import { FC } from 'react';

import { auth } from '@/auth';
import { QRCodeSVG } from 'qrcode.react';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const UserDashboard: FC = async () => {
  const session = await auth();
  const qrValue = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';

  return (
    <div className="min-h-screen flex flex-col bg-green-50">
      <header className="w-full bg-green-700 text-green-50 p-4 text-center shadow-lg">
        <h1 className="text-2xl font-bold">Welcome, {session?.user.name}!</h1>
        <p className="text-sm mt-1">
          Keep track of your rewards and make the most of your points.
        </p>
      </header>

      <div className="flex flex-col items-center space-y-6 p-4">
        <Card className="w-full max-w-md bg-white shadow-lg border border-green-200">
          <CardHeader className="text-center">
            <CardTitle className="text-green-700 text-xl font-bold">
              Your Points
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col items-center space-y-4">
            <div className="text-green-800 text-4xl font-bold">
              {session?.user.points}
            </div>
            <QRCodeSVG
              value={qrValue}
              size={256}
              className="border border-green-300 p-2"
            />
            <p className="text-sm text-gray-600 text-center">
              Use this QR code to redeem your points in supported stores
            </p>
          </CardContent>
        </Card>
      </div>

      {/* <form
        action={async () => {
          'use server';
          await signOut();
        }}
      >
        <button type="submit">Sign Out</button>
      </form> */}
    </div>
  );
};

export default UserDashboard;
