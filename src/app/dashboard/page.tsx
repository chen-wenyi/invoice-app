import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { CirclePlus } from 'lucide-react';
import Link from 'next/link';

export default function Dashboard() {
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
            <div className='w-[80%]'>
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
                        <TableRow>
                            <TableCell className='p-4'>
                                <span className='font-semibold'>10/31/2024</span>
                            </TableCell>
                            <TableCell className='p-4'>
                                <span className='font-semibold'>Cwy</span>
                            </TableCell>
                            <TableCell className='p-4'>
                                <span>cwynz@icloud.com</span>
                            </TableCell>
                            <TableCell className='p-4'>
                                <Badge className='rounded-full'>Open</Badge>
                            </TableCell>
                            <TableCell className='text-right p-4'>
                                <span className='font-semibold'>$250.00</span>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </div>
        </main>
    );
}
