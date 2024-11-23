import { FC } from 'react';

import { auth, signOut } from '@/auth';

const Test: FC = async () => {
  const session = await auth();

  console.log(session);

  return (
    <form
      action={async () => {
        'use server';
        await signOut();
      }}
    >
      <button type="submit">Sign Out</button>
    </form>
  );
};

export default Test;
