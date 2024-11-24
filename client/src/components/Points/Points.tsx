'use client';

import { FC, useEffect, useState } from 'react';

import { io } from 'socket.io-client';

type Props = {
  email: string;
  points: number;
};

export const Points: FC<Props> = ({ email }) => {
  const [userPoints, setUserPoint] = useState<number | null>(null);

  useEffect(() => {
    const socket = io(process.env.NEXT_PUBLIC_WEBSOCKETS);

    socket.on('sessionUpdated', (data) => {
      setUserPoint(data.user.points);
    });

    socket.emit('getSessionUpdate', { email });

    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <div className="text-green-800 text-4xl font-bold">
      {userPoints || 'Loading...'}
    </div>
  );
};
