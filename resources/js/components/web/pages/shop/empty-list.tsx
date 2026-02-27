import { Link } from '@inertiajs/react';
import { ArchiveIcon, RotateCcwIcon } from 'lucide-react';
import type { JSX } from 'react';
import { Button } from '@/components/ui/button';

export default function EmptyList(): JSX.Element {
    return (
        <div className="sticky top-0 flex min-h-screen flex-col items-center justify-center">
            <ArchiveIcon className="size-12 text-brand-neutral-alt-700" />
            <span className="mt-6 text-2xl font-medium text-brand-neutral-alt-700">No Products match your filters!</span>
            <Button
                className="mt-8 w-74"
                size="sm"
                asChild
            >
                <Link href="/shop/">
                    Clear Filters
                    <RotateCcwIcon strokeWidth={3} />
                </Link>
            </Button>
        </div>
    );
}
