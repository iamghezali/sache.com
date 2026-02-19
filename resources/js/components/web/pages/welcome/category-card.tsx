import { ArrowUpRightIcon } from 'lucide-react';
import type { JSX } from 'react';
import { Button } from '@/components/ui/button';
import PlaceholderImage from '@/components/ui/placeholderImage';

export default function CategoryCard(): JSX.Element {
    return (
        <div className="w-full shrink basis-full">
            <div className="rounded-[3.5rem] bg-brand-shade-white p-3">
                <div className="relative z-0 overflow-hidden rounded-3xl">
                    {/* image layer  */}
                    <div className="relative z-10 w-full overflow-hidden rounded-[3rem] bg-neutral-100 pt-[92.58%]">
                        <PlaceholderImage />
                    </div>

                    {/* forground layer  */}
                    <div className="category-gradient absolute inset-0 top-0 z-10 flex px-7.5 py-4">
                        <div className="z-20 mt-auto flex w-full items-end">
                            <h3 className="w-64 text-4xl font-semibold text-brand-neutral-1000 capitalize">Soiree Collection</h3>

                            <Button
                                className="ml-auto"
                                variant={'neutral'}
                                size={'icon'}
                            >
                                <ArrowUpRightIcon
                                    className="size-8"
                                    strokeWidth={1}
                                />
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
