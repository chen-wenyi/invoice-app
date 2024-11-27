import {Button} from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
    return (
        <main className='flex flex-col justify-center h-screen items-center gap-6 mx-auto'>
            <h1 className='text-5xl font-bold'>Invoicipedia</h1>
            <p>
                <Button asChild>
                    <Link href='/dashboard'>Home</Link>
                </Button>
            </p>
        </main>
    );
}
