import { FC } from 'react';

import { auth } from '@/auth';
import { redirect } from 'next/navigation';

const Home: FC = async () => {
  const session = await auth();

  if (session?.user) {
    return redirect('/app/dashboard');
  }

  return redirect('/auth/login');
};

export default Home;
