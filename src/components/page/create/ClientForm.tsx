import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { Switch } from '@/components/ui/switch';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { BookOpenIcon, UserIcon } from 'lucide-react';

function ClientForm() {
  return (
    <div className='max-w-4xl mx-auto p-4'>
      <div className='mb-6'>
        {/* <Link to='#' className='text-sm text-muted-foreground'>
          Back to: Quotes
        </Link> */}
        <h1 className='text-3xl font-bold'>New Client</h1>
      </div>
      <form className='grid gap-6 md:grid-cols-2'>
        <Card>
          <CardHeader>
            <CardTitle>
              <div className='flex items-center space-x-2'>
                <UserIcon className='h-6 w-6 text-muted-foreground' />
                <span>Client details</span>
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent className='space-y-4'>
            <div className='grid gap-2'>
              <Label htmlFor='title'>Title</Label>
              <Select>
                <SelectTrigger id='title'>
                  <SelectValue placeholder='No title' />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value='mr'>Mr.</SelectItem>
                  <SelectItem value='ms'>Ms.</SelectItem>
                  <SelectItem value='mrs'>Mrs.</SelectItem>
                  <SelectItem value='dr'>Dr.</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className='grid grid-cols-2 gap-4'>
              <div className='space-y-2'>
                <Label htmlFor='first-name'>First name</Label>
                <Input id='first-name' placeholder='First name' />
              </div>
              <div className='space-y-2'>
                <Label htmlFor='last-name'>Last name</Label>
                <Input id='last-name' placeholder='Last name' />
              </div>
            </div>
            <div className='space-y-2'>
              <Label htmlFor='company-name'>Company name</Label>
              <Input id='company-name' placeholder='Company name' />
            </div>
            <div className='flex items-center space-x-2'>
              <Checkbox id='use-company-name' />
              <Label htmlFor='use-company-name'>
                Use company name as the primary name
              </Label>
            </div>
            <div className='space-y-2'>
              <Label>Contact Details</Label>
              <div className='flex items-center space-x-2'>
                <Select>
                  <SelectTrigger id='contact-type'>
                    <SelectValue placeholder='Main' />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value='main'>Main</SelectItem>
                    <SelectItem value='work'>Work</SelectItem>
                    <SelectItem value='home'>Home</SelectItem>
                  </SelectContent>
                </Select>
                <Input placeholder='Phone number' />
              </div>
              <div className='flex items-center space-x-2'>
                <Switch id='receives-text' />
                <Label htmlFor='receives-text'>Receives text messages</Label>
              </div>
            </div>
            <div className='space-y-2'>
              <div className='flex items-center space-x-2'>
                <Select>
                  <SelectTrigger id='email-type'>
                    <SelectValue placeholder='Main' />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value='main'>Main</SelectItem>
                    <SelectItem value='work'>Work</SelectItem>
                    <SelectItem value='home'>Home</SelectItem>
                  </SelectContent>
                </Select>
                <Input placeholder='Email address' />
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>
              <div className='flex items-center space-x-2'>
                <BookOpenIcon className='h-6 w-6 text-muted-foreground' />
                <span>Project details</span>
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent className='space-y-4'>
            <div className='space-y-2'>
              <Label htmlFor='project-name'>Project Name</Label>
              <Input id='project-name' placeholder='Project Name' />
            </div>
            <div className='space-y-2'>
              <Label htmlFor='project-description'>Project Description</Label>
              <Textarea
                id='project-description'
                placeholder='Project Description'
                className='min-h-[100px]'
              />
            </div>
            <div className='grid grid-cols-2 gap-4'>
              <div className='space-y-2'>
                <Label htmlFor='start-date'>Start Date</Label>
                <Input id='start-date' type='date' />
              </div>
              <div className='space-y-2'>
                <Label htmlFor='budget'>Budget</Label>
                <Input id='budget' type='number' placeholder='Budget' />
              </div>
            </div>
          </CardContent>
        </Card>
        <div className='col-span-2 flex justify-end space-x-2'>
          <Button variant='outline'>Cancel</Button>
          <Button variant='outline'>Save And Create Another</Button>
          <Button>Save Client</Button>
        </div>
      </form>
    </div>
  );
}
export default ClientForm;
