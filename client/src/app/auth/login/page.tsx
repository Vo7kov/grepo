import { FC } from 'react';

import { auth, signIn, signOut } from '@/auth';

import { Input } from '@/components/ui/input';

const Login: FC = async () => {
  const session = await auth();

  return (
    <div className="">
      <form
        action={async (formData) => {
          'use server';
          formData.append('redirectTo', '/test');

          await signIn('credentials', formData);
        }}
      >
        <label>
          Email
          <Input name="email" type="email" />
        </label>

        <label>
          Password
          <Input name="password" type="password" />
        </label>
        <button>Sign In</button>
      </form>

      {!!session && (
        <form
          action={async () => {
            'use server';
            await signOut();
          }}
        >
          <button type="submit">Sign Out</button>
        </form>
      )}
    </div>
  );
};

export default Login;
