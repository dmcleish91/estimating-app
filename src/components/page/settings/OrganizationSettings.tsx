import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Input } from '@/components/ui/input';
import { Link } from 'react-router-dom';

function OrganizationSettings() {
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
            <Link to='/settings/security'>Security</Link>
            <Link to='/settings/integration'>Integrations</Link>
            {/* <Link to='#'>Support</Link> */}
            <Link to='/settings/organization' className='font-semibold text-primary'>
              Organizations
            </Link>
            <Link to='/settings/advanced'>Advanced</Link>
          </nav>
          <div className='grid gap-6'>
            <Card x-chunk='dashboard-04-chunk-1'>
              <CardHeader>
                <CardTitle>Invite Team Member</CardTitle>
                <CardDescription>
                  Enter the email address of the member you want to join your team
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form>
                  <Input placeholder='john.snow@gmail.com' />
                  <p className='text-sm text-muted-foreground pt-1'>
                    0 remaing seats left
                  </p>
                </form>
              </CardContent>
              <CardFooter className='border-t px-6 py-4'>
                <Button>Save</Button>
              </CardFooter>
            </Card>
            <Card x-chunk='dashboard-04-chunk-2'>
              <CardHeader>
                <CardTitle>Organization</CardTitle>
                <CardDescription>The status of your team members</CardDescription>
              </CardHeader>
              <CardContent>
                <TeamTable />
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
export default OrganizationSettings;

function TeamTable() {
  const teamMembers = [
    { name: 'John Doe', status: 'active', joinDate: '2024-05-01' },
    { name: 'Jane Smith', status: 'invited', joinDate: '2024-05-15' },
    { name: 'Sam Green', status: 'active', joinDate: '2024-06-01' },
    { name: 'Chris Black', status: 'invited', joinDate: '2024-06-10' },
    { name: 'Pat White', status: 'active', joinDate: '2024-06-20' },
  ];

  return (
    <Card>
      <CardHeader className='px-7'>
        <CardTitle>Team Members</CardTitle>
        <CardDescription>Current team members for your organization.</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Join Date</TableHead>
              <TableHead className='text-center'>Revoke</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {teamMembers.map((member, index) => (
              <TableRow key={index} className={index % 2 === 0 ? 'bg-accent' : ''}>
                <TableCell>
                  <div className='font-medium'>{member.name}</div>
                </TableCell>
                <TableCell>
                  <Badge
                    className='text-xs'
                    variant={member.status === 'active' ? 'secondary' : 'outline'}>
                    {member.status}
                  </Badge>
                </TableCell>
                <TableCell>{member.joinDate}</TableCell>
                <TableCell className='text-center'>
                  <Button size='sm' variant='destructive'>
                    Remove
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
