import { Link } from '@inertiajs/react';
import { CopyIcon, PencilLineIcon } from 'lucide-react';
import type { JSX } from 'react';
import { Button } from '@/components/ui/button';
import PlaceholderImage from '@/components/ui/placeholderImage';

export default function CustomOrderItem(): JSX.Element {
    return (
        <div className="rounded-2xl border border-brand-primary-100 p-3 text-brand-neutral-1000">
            <div className="flex gap-4">
                <div className="shrink-0 basis-32">
                    <div className="relative overflow-hidden rounded-2xl bg-neutral-100 pt-[129%]">
                        <PlaceholderImage />
                    </div>
                </div>

                <div className="flex flex-1 items-center justify-between gap-4">
                    <div>
                        <h1 className="text-4xl leading-14 font-bold">Abbaya Female 2026 style</h1>

                        <ul className="mt-2 flex flex-col">
                            <li className="flex items-baseline gap-2 text-lg/tight">
                                <span className="text-brand-neutral-alt-700">Item Type:</span>
                                <span>Abbaya</span>
                            </li>

                            <li className="mt-4 flex items-baseline gap-2 text-base/tight">
                                <span className="basis-36">Clothing</span>
                                <span>Individual</span>
                            </li>

                            <li className="mt-3 flex items-baseline gap-2 text-base/tight">
                                <span className="basis-36">Size: Custom</span>
                                <span>Quantity: 1</span>
                            </li>
                        </ul>
                    </div>

                    <div className="flex shrink-0 basis-34 flex-col gap-4">
                        <Button
                            size="interactions"
                            asChild
                        >
                            <Link href="/custom-order/create/?itemExist=&step=4">
                                Edit
                                <PencilLineIcon />
                            </Link>
                        </Button>

                        <Button
                            variant="outline"
                            size="interactions"
                        >
                            Duplicate
                            <CopyIcon />
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
