import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { Plus, SquareCheckBig, Text } from 'lucide-react';

import { Label } from '@radix-ui/react-label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@radix-ui/react-checkbox';

function QouteForm() {
  return (
    <Card className='w-full h-fit xl:mx-auto xl:max-w-[1000px]'>
      <CardContent className='p-3'>
        <div className='flex flex-row items-center justify-between gap-4'>
          <p className='text-4xl font-bold p-2'>Proposal Details</p>
          <div className='flex flex-row items-center justify-between gap-4 max-w-[650px] pr-4'>
            <p className='font-semibold'>Rate opportunity</p>
            <Select>
              <SelectTrigger className='w-[180px] h-8'>
                <SelectValue placeholder='Unlikely' />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value='Unlikely'>Unlikely</SelectItem>
                <SelectItem value='maybe'>Maybe</SelectItem>
                <SelectItem value='likely'>Likely</SelectItem>
                <SelectItem value='very likely'>Very Likely</SelectItem>
                <SelectItem value='certain'>Certain</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className='flex flex-row gap-4 w-full p-4'>
          <div className='flex flex-row items-center gap-4 w-1/2'>
            <p className='font-semibold w-[120px]'>Client Name</p>
            <Input placeholder='Title' className='flex-grow' />
          </div>
          <div className='flex flex-row items-center gap-4 w-1/2'>
            <p className='font-semibold w-[80px]'>Job Title</p>
            <Input placeholder='Title' className='flex-grow' />
          </div>
        </div>
        <div className='flex flex-col'>
          <div className='flex flex-row gap-4 px-4'>
            <p className='text-lg font-semibold w-3/6'>Product / Service</p>
            <p className='text-lg font-semibold w-1/6'>Qty.</p>
            <p className='text-lg font-semibold w-1/6'>Unit Price</p>
            <p className='text-lg font-semibold w-1/6'>Total</p>
          </div>
          <div className='space-y-2'>
            <div className='flex flex-row gap-4 pt-4 px-4'>
              <div className='w-3/6'>
                <Input placeholder='Name' />
              </div>
              <div className='w-1/6'>
                <Input placeholder='1' />
              </div>
              <div className='w-1/6'>
                <Input />
              </div>
              <div className='w-1/6'>
                <Input />
              </div>
            </div>
            <div className='flex flex-row gap-4 px-4'>
              <div className='w-3/6'>
                <Textarea placeholder='Description' />
              </div>
              <div className='w-1/6' />
              <div className='w-1/6' />
              <div className='w-1/6' />
            </div>
          </div>
        </div>
        <div className='flex flex-col pt-4'>
          <div className='flex flex-row gap-4 px-4'>
            <Button className='gap-1' size={'sm'}>
              <Plus />
              Add Line Item
            </Button>
            <Button className='gap-1' variant={'outline'} size={'sm'}>
              <SquareCheckBig />
              Add Optional Line Item
            </Button>
            <Button className='gap-1' variant={'outline'} size={'sm'}>
              <Text /> {''} Add Text
            </Button>
          </div>
        </div>
        <div className='flex flex-row'>
          <div className='flex flex-col gap-4 w-1/2 p-4'>
            <div>
              <Textarea placeholder='Client message' />
            </div>
            <div className='flex flex-col gap-4'>
              <Label className='text-sm font-semibold'>Contract / disclaimer</Label>
              <Textarea
                value={
                  'This quote is valid for the next 30 days, after which values may be subject to change.'
                }
              />
            </div>
            <div className='flex flex-row justify-between'>
              <div className='flex flex-row items-center gap-2'>
                <Checkbox id='terms' />
                {/* <label
                  htmlFor='terms'
                  className='text-sm font-medium leading-none cursor-pointer peer-disabled:cursor-not-allowed peer-disabled:opacity-70'>
                  Apply to all future qoutes
                </label> */}
              </div>
            </div>
          </div>
          <div className='flex flex-col gap-3.5 w-1/2 p-4'>
            <div className='flex flex-row justify-between w-full'>
              <p className='font-semibold text-sm'>Subtotal</p>
              <p className='text-sm'>$0.00</p>
            </div>
            <div className='border border-slate-300' />
            <div className='flex flex-row justify-between w-full'>
              <p className='font-semibold text-sm'>Discount</p>
              <p className='underline font-semibold text-sm'>Add Discount</p>
            </div>
            <div className='border border-slate-300' />
            <div className='flex flex-row justify-between w-full'>
              <p className='font-semibold text-sm'>Tax</p>
              <p className='underline font-semibold text-sm'>Add Tax</p>
            </div>
            <div className='border border-slate-300' />
            <div className='flex flex-row justify-between w-full'>
              <p className='font-bold text-sm'>Total</p>
              <p className='font-bold text-sm'>$0.00</p>
            </div>
          </div>
        </div>
        <div className='flex flex-col p-4 gap-4'>
          <Label className='text-3xl font-semibold'>Internal notes</Label>
          <Textarea placeholder='Note details' />
        </div>
        <div className='flex flex-row justify-end gap-4 pt-4'>
          <Button variant={'outline'} size={'sm'}>
            Cancel
          </Button>
          <Button size={'sm'}>Create Qoute</Button>
        </div>
      </CardContent>
    </Card>
  );
}

export default QouteForm;
