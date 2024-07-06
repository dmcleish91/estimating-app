import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import React from 'react';
import { Link } from 'react-router-dom';

function SecuritySettings() {
  const [password, setPassword] = React.useState('');

  function handlePasswordChange(value: string) {
    setPassword(value);
  }

  return (
    <div className='flex min-h-fit w-full flex-col'>
      <main className='flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4 bg-muted/40 p-4 md:gap-8 md:p-10'>
        <div className='mx-auto grid w-full max-w-6xl gap-2'>
          <h1 className='text-3xl font-semibold'>Settings</h1>
        </div>
        <div className='mx-auto grid w-full max-w-6xl items-start gap-6 md:grid-cols-[180px_1fr] lg:grid-cols-[250px_1fr]'>
          <nav
            className='grid gap-4 text-sm text-muted-foreground'
            x-chunk='dashboard-04-chunk-0'>
            <Link to='/settings'>General</Link>
            <Link to='/settings/security' className='font-semibold text-primary'>
              Security
            </Link>
            <Link to='/settings/integration'>Integrations</Link>
            {/* <Link to='#'>Support</Link> */}
            <Link to='/settings/organization'>Organizations</Link>
            <Link to='/settings/advanced'>Advanced</Link>
          </nav>
          <div className='grid gap-6'>
            <Card x-chunk='dashboard-04-chunk-1'>
              <CardHeader>
                <CardTitle>Change Password</CardTitle>
                <CardDescription>
                  Enter a new password and ensure it is strong enough before saving.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form>
                  <Input
                    placeholder='New Password'
                    type='password'
                    value={password}
                    maxLength={30}
                    onChange={(e) => handlePasswordChange(e.target.value)}
                  />
                  <PasswordStrengthIndicator password={password} />
                </form>
              </CardContent>
              <CardFooter className='border-t px-6 py-4 justify-end'>
                <Button>Save</Button>
              </CardFooter>
            </Card>

            <Card x-chunk='dashboard-04-chunk-1'>
              <CardHeader>
                <CardTitle>Multi-factor authentication</CardTitle>
                <CardDescription>
                  Require an extra security challenge when logging in. If you are unable
                  to pass this challenge, you will have the option to recover your account
                  via email.
                </CardDescription>
              </CardHeader>
              <CardFooter className='border-t px-6 py-4 justify-end'>
                <Button>Enable</Button>
              </CardFooter>
            </Card>
            <Card x-chunk='dashboard-04-chunk-2'>
              <CardHeader>
                <CardTitle>Log out of all devices</CardTitle>
                <CardDescription>
                  Log out of all active sessions across all devices, including your
                  current session. It may take up to 30 minutes for other devices to be
                  logged out.
                </CardDescription>
              </CardHeader>
              <CardFooter className='border-t px-6 py-4 justify-end'>
                <Button>Log out all</Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
export default SecuritySettings;

interface PasswordStrengthIndicatorProps {
  password: string;
}

function evaluatePasswordStrength(password: string) {
  let points = 0;

  if (password.length > 7) {
    points++;
  }

  if (password.length > 11) {
    points++;
  }

  if (password.length > 17) {
    points++;
  }

  if (password.length === 30) {
    points++;
  }

  if (/[A-Z]/.test(password)) {
    points++;
  }

  if (/[a-z]/.test(password)) {
    points++;
  }

  if (/[0-9]/.test(password)) {
    points++;
  }

  if (/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
    points++;
  }

  console.log(points);
  return points;
}

function PasswordStrengthIndicator({ password }: PasswordStrengthIndicatorProps) {
  const passwordStrength = evaluatePasswordStrength(password);

  let strengthLabel;
  let strengthColor;

  if (passwordStrength <= 2) {
    strengthLabel = 'Very Weak';
    strengthColor = 'gray';
  } else if (passwordStrength <= 4) {
    strengthLabel = 'Weak';
    strengthColor = 'red';
  } else if (passwordStrength < 7) {
    strengthLabel = 'Strong';
    strengthColor = 'green';
  } else {
    strengthLabel = 'Very Strong';
    strengthColor = 'green';
  }

  return (
    <div
      className='text-sm text-muted-foreground pt-1 pl-1'
      style={{ color: strengthColor }}>
      Password Strength: {strengthLabel}
    </div>
  );
}
