import { ArchiveXIcon, HeartIcon } from 'lucide-react';
import type { JSX } from 'react';
import PlaceholderImage from '@/components/ui/placeholderImage';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function CartItem(): JSX.Element {
    return (
        <div>
            <div className="flex gap-6">
                <div className="shrink-0 basis-39">
                    <div className="relative overflow-hidden rounded-3xl bg-neutral-300 pt-[120%]">
                        <PlaceholderImage />
                    </div>
                </div>

                <div className="min-w-0 grow">
                    <div className="flex h-full flex-col">
                        <div className="flex items-center justify-between">
                            <span className="text-2xl font-semibold text-brand-neutral-1000">Cozy Knit Set</span>
                            <span className="text-2xl font-semibold text-brand-secondary-300">12,000 DZD</span>
                        </div>

                        <span className="mt-2 inline-block text-xl/tight text-brand-neutral-1000/80">Beige Color</span>

                        <div className="mt-6 flex items-center gap-4">
                            <Select defaultValue="l">
                                <SelectTrigger className="min-w-25">
                                    <SelectValue placeholder="Size" />
                                </SelectTrigger>
                                <SelectContent position="popper">
                                    <SelectGroup>
                                        <SelectItem value="xs">Size XS</SelectItem>
                                        <SelectItem value="s">Size S</SelectItem>
                                        <SelectItem value="m">Size M</SelectItem>
                                        <SelectItem value="l">Size L</SelectItem>
                                        <SelectItem value="xl">Size XL</SelectItem>
                                        <SelectItem value="xxl">Size XXL</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>

                            <div className="flex items-center gap-1">
                                <Button
                                    variant="ghost"
                                    size="icon-md"
                                >
                                    -
                                </Button>

                                <Input
                                    className="w-10 text-center"
                                    value={1}
                                />

                                <Button
                                    variant="ghost"
                                    size="icon-md"
                                >
                                    +
                                </Button>
                            </div>
                        </div>

                        <div className="mt-auto flex gap-6">
                            <HeartIcon
                                className="size-8"
                                strokeWidth={1}
                            />

                            <ArchiveXIcon
                                className="size-8"
                                strokeWidth={1}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
