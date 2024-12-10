import { Badge } from '@/components/ui/badge';
import { db } from '@/db';
import { Invoices } from '@/db/schema';
import { cn } from '@/lib/utils';
import { eq } from 'drizzle-orm';

export default async function InvoicePage({
  params,
}: {
  params: Promise<{ invoiceId: string }>;
}) {
  const invoiceId = parseInt((await params).invoiceId);
  const [result] = await db
    .select()
    .from(Invoices)
    .where(eq(Invoices.id, invoiceId))
    .limit(1);
  const { status, value, description, createTS } = result;

  return (
    <main className='flex flex-col w-full h-screen px-20 py-12'>
      <div className='flex flex-col'>
        <h1 className='flex items-center text-3xl gap-4 font-bold'>
          <span>Invoice {invoiceId}</span>
          <Badge
            className={cn(
              'rounded-full',
              'capitalize',
              status === 'open' && 'bg-blue-500',
              status === 'paid' && 'bg-green-500',
              status === 'void' && 'bg-zinc-500',
              status === 'uncollectible' && 'bg-red-500'
            )}
          >
            {status}
          </Badge>
        </h1>
        <div className='mt-4'>
          <div className='text-3xl'>${(value / 100).toFixed(2)}</div>
        </div>
        <div className='mt-4'>
          <div className='text-lg'>{description}</div>
        </div>
      </div>
      <div>
        <div className='my-6 font-bold text-lg'>Billing Details</div>
        <ul className='grid gap-2'>
          <li className='flex gap-4 '>
            <div className='w-28 font-bold'>Invoice Id </div>{' '}
            <span>{invoiceId}</span>
          </li>
          <li className='flex gap-4'>
            <div className='w-28 font-bold'>Invoice Date</div>{' '}
            <span>{new Date(createTS).toLocaleDateString()}</span>
          </li>
          <li className='flex gap-4'>
            <div className='w-28 font-bold'>Billing Name</div> <span></span>
          </li>
          <li className='flex gap-4'>
            <div className='w-28 font-bold'>Billing Email</div> <span></span>
          </li>
        </ul>
      </div>
    </main>
  );
}
