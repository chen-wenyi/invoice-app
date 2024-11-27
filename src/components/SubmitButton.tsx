'use client';
import { useFormStatus } from 'react-dom';
import { Button } from './ui/button';
import { LoaderCircle } from 'lucide-react';

const SubmitButton = () => {
  const { pending } = useFormStatus();
  return (
    <Button className='font-semibold'>
      {pending ? (
        <span className='flex items-center justify-center'>
          <LoaderCircle className='animate-spin ' />
        </span>
      ) : (
        <span>Submit</span>
      )}
    </Button>
  );
};

export default SubmitButton;
