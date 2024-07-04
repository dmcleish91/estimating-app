import { Label } from '@radix-ui/react-dropdown-menu';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { useAuth } from '@/lib/hooks/useAuth';
import React from 'react';

export function Login() {
  const [email, setEmail] = React.useState<string>('');
  const [password, setPassword] = React.useState<string>('');
  const { login } = useAuth();
  const navigate = useNavigate();

  function handleEmail(value: string) {
    setEmail(value);
  }

  function handlePassword(value: string) {
    setPassword(value);
  }

  function handleLogin() {
    login({ name: email.split('@')[0] });
    navigate('/', { replace: true });
  }
  return (
    <div className='max-w-[2360px] mx-auto h-full xl:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px] p-8'>
      <div className='flex items-center justify-center py-12 h-full'>
        <div className='mx-auto grid w-[350px] gap-6'>
          <div className='grid gap-2 text-center'>
            <h1 className='text-3xl font-bold'>Login</h1>
            <p className='text-balance text-muted-foreground'>
              Enter your email below to login to your account
            </p>
          </div>
          <div className='grid gap-4'>
            <div className='grid gap-2'>
              <Label>Email</Label>
              <Input
                id='email'
                type='email'
                placeholder='m@example.com'
                value={email}
                onChange={(e) => handleEmail(e.target.value)}
                required
              />
            </div>
            <div className='grid gap-2'>
              <div className='flex items-center'>
                <Label>Password</Label>
                <Link
                  to='/forgot-password'
                  className='ml-auto inline-block text-sm underline'>
                  Forgot your password?
                </Link>
              </div>
              <Input
                id='password'
                type='password'
                value={password}
                onChange={(e) => handlePassword(e.target.value)}
                required
              />
            </div>
            <Button type='submit' className='w-full' onClick={handleLogin}>
              Login
            </Button>
            <Button variant='outline' className='w-full'>
              Login with Google
            </Button>
          </div>
          <div className='mt-4 text-center text-sm'>
            Don&apos;t have an account?{' '}
            <Link to='#' className='underline'>
              Sign up
            </Link>
          </div>
        </div>
      </div>
      <div className='hidden bg-muted xl:block'>
        <img
          src='/assets/placeholder.svg'
          alt='Image'
          height='2560'
          width='1400'
          className='h-full w-full object-cover dark:brightness-[0.2] dark:grayscale'
        />
      </div>
    </div>
  );
}

export default Login;
