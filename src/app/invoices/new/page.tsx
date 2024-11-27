'use client';
import { createAction } from '@/app/actions';
import SubmitButton from '@/components/SubmitButton';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import Form from 'next/form';
import { SyntheticEvent, useState } from 'react';

export default function NewInvoice() {
  const [state, setState] = useState('ready');

  const handleOnSubmit = async (e: SyntheticEvent) => {
    if (state === 'pending') {
      e.preventDefault();
      return;
    }
    setState('pending');
  };

  return (
    <main className='flex flex-col w-full h-screen gap-6 px-20 py-12'>
      <div className='flex justify-between'>
        <h1 className='text-5xl font-bold'>Create Invoice</h1>
      </div>
      <Form
        action={createAction}
        onSubmit={handleOnSubmit}
        className='grid gap-4 max-w-xs'
      >
        <div>
          <Label htmlFor='name' className='block font-semibold mb-2'>
            Billing Name
          </Label>
          <Input id='name' name='name' type='text' />
        </div>
        <div>
          <Label htmlFor='email' className='block font-semibold mb-2'>
            Billing Email
          </Label>
          <Input id='email' name='email' type='email' />
        </div>
        <div>
          <Label htmlFor='value' className='block font-semibold mb-2'>
            Value
          </Label>
          <Input id='value' name='value' type='text' />
        </div>
        <div>
          <Label htmlFor='description' className='block font-semibold mb-2'>
            Description
          </Label>
          <Textarea id='description' name='description' />
        </div>
        <SubmitButton />
      </Form>
    </main>
  );
}
