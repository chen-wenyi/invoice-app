import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';
import { db } from '@/db';
import { Invoices } from '@/db/schema';
import { cn } from '@/lib/utils';
import { CirclePlus } from 'lucide-react';
import Link from 'next/link';

export default async function Dashboard() {
  const results = await db.select().from(Invoices);
  console.log(results);
  return (
    <main className='flex flex-col w-full h-screen px-20 py-12'>
      <div className='flex justify-between'>
        <h1 className='text-5xl font-bold'>Dashboard</h1>
        <Button variant='ghost' asChild>
          <Link href='/invoices/new'>
            <CirclePlus className='h-4 w-4' />
            Create Invoice
          </Link>
        </Button>
      </div>
      <div>
        <Table>
          <TableCaption>A list of your recent invoices.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className='p-4'>Date</TableHead>
              <TableHead className='p-4'>Email</TableHead>
              <TableHead className='p-4'>Customer</TableHead>
              <TableHead className='p-4'>Status</TableHead>
              <TableHead className='text-right p-4'>Value</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {results.map(({ id, status, value, createTS }) => (
              <TableRow id={id.toString()}>
                <TableCell className='p-4'>
                  <Link href={`/invoices/${id}`} className='font-semibold'>
                    {new Date(createTS).toLocaleDateString('en-GB')}
                  </Link>
                </TableCell>
                <TableCell className='p-4'>
                  <Link href={`/invoices/${id}`} className='font-semibold'>
                    Cwy
                  </Link>
                </TableCell>
                <TableCell className='p-4'>
                  <Link href={`/invoices/${id}`}>cwynz@icloud.com</Link>
                </TableCell>
                <TableCell className='p-4'>
                  <Link href={`/invoices/${id}`}>
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
                  </Link>
                </TableCell>
                <TableCell className='text-right p-4'>
                  <Link href={`/invoices/${id}`} className='font-semibold'>
                    ${(value / 100).toFixed(2)}
                  </Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </main>
  );
}
