import { Link } from '@inertiajs/react';
import type { JSX } from 'react';
import { Button } from '@/components/ui/button';
import PlaceholderImage from '@/components/ui/placeholderImage';

interface Props {
    badge?: string;
}

export default function ProductCard({ badge }: Props): JSX.Element {
    return (
        <div className="basis-full">
            <div className="rounded-4xl bg-brand-shade-white p-2">
                <div className="relative overflow-hidden rounded-3xl bg-brand-neutral-100 pt-[127.15%]">
                    <PlaceholderImage />

                    <div className="absolute inset-0 size-full">
                        {badge && (
                            <span className="inline-block rounded-tl-3xl rounded-br-3xl bg-brand-secondary-300 px-4 py-3 text-xs/tight font-medium text-white capitalize">
                                {badge}
                            </span>
                        )}
                    </div>
                </div>
            </div>

            <span className="mt-4 block h-14 text-2xl/tight font-semibold text-brand-neutral-1000">Dress Crushed With Drawstrings - Beige</span>

            <Button
                className="mt-4 w-full uppercase"
                variant={'neutral'}
                asChild
            >
                <Link>View Product - 28,000 DZD</Link>
            </Button>
        </div>
    );
}
