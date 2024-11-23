import { FC } from 'react';

import { signIn } from '@/auth';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const LoginForm: FC = async () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-green-50 p-4">
      <Card className="w-full max-w-md shadow-lg bg-white border border-green-200">
        <CardHeader>
          <CardTitle className="text-green-700 text-center text-xl font-bold">
            Grepo
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form
            action={async (formData: FormData) => {
              'use server';

              formData.append('redirectTo', '/app/dashboard');

              await signIn('credentials', formData);
            }}
            className="space-y-4"
          >
            <div className="flex flex-col space-y-1">
              <Label htmlFor="email" className="text-green-700">
                Email
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="you@example.com"
                className="border-green-300"
                required
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 text-white"
            >
              Log In
            </Button>
          </form>
        </CardContent>
        <CardFooter className="text-center">
          <p className="text-sm text-green-600">
            Don`t have an account?{' '}
            <a
              href="/register"
              className="font-medium text-green-700 hover:underline"
            >
              Sign up
            </a>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default LoginForm;
