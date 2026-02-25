import { Link } from '@inertiajs/react';
import { ArrowLeftIcon, ArrowRightIcon } from 'lucide-react';
import type { JSX } from 'react';
import { Button } from '@/components/ui/button';

export default function StepNewItemReview(): JSX.Element {
    return (
        <div className="mt-10.5">
            <div className="flex flex-col gap-10.5">
                <section className="rounded-2xl border border-brand-neutral-1000 p-6">
                    <div className="flex min-h-14.5 items-center justify-between gap-4">
                        <h2 className="text-3xl font-semibold">Your Item</h2>
                        <Button
                            className="text-base"
                            asChild
                        >
                            <Link href="/custom-order/create/?step=2&newItemStep=1">Edit</Link>
                        </Button>
                    </div>

                    <div className="mt-8">
                        <h3 className="text-[1.375rem]/tight font-medium">Order Type</h3>

                        <ul className="mt-7 flex flex-col gap-6">
                            <li className="text-xl">
                                <span className="text-brand-neutral-alt-600">What is this order for? </span>
                                <span className="font-medium">Individual</span>
                            </li>

                            <li className="text-xl">
                                <span className="text-brand-neutral-alt-600">What would you like to create? </span>
                                <span className="font-medium">Clothing</span>
                            </li>

                            <li className="text-xl">
                                <span className="text-brand-neutral-alt-600">Gender </span>
                                <span className="font-medium">Female</span>
                            </li>
                        </ul>
                    </div>

                    <div className="mt-8">
                        <h3 className="text-[1.375rem]/tight font-medium">Order Details</h3>

                        <ul className="mt-7 flex flex-col gap-6">
                            <li className="w-full">
                                <div className="flex w-full justify-between gap-4">
                                    <span className="text-xl">
                                        <span className="text-brand-neutral-alt-600">Order Name </span>
                                        <span className="font-medium">Abbaya Female 2026 style</span>
                                    </span>

                                    <span className="text-xl">
                                        <span className="text-brand-neutral-alt-600">What are you looking for </span>
                                        <span className="font-medium">Abbaya</span>
                                    </span>
                                </div>
                            </li>

                            <li className="text-xl">
                                <span className="text-brand-neutral-alt-600">Inspiration </span>
                                <ul className="inline-flex gap-2">
                                    <li className="rounded-sm bg-brand-neutral-alt-300 px-2 py-1">imgabbaya1.jpg</li>
                                    <li className="rounded-sm bg-brand-neutral-alt-300 px-2 py-1">imgabbaya2.jpg</li>
                                    <li className="rounded-sm bg-brand-neutral-alt-300 px-2 py-1">imgabbaya3.jpg</li>
                                    <li className="rounded-sm bg-brand-neutral-alt-300 px-2 py-1">imgabbaya4.jpg</li>
                                    <li className="rounded-sm bg-brand-neutral-alt-300 px-2 py-1">imgabbaya5.jpg</li>
                                </ul>
                            </li>

                            <li className="text-xl">
                                <span className="text-brand-neutral-alt-600">Short Description </span>
                                <span className="block text-pretty">
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. At rem quo nihil corrupti hic, numquam debitis eaque,
                                    atque vitae autem porro maxime quod, dolorem qui consectetur dicta tempora deleniti? Corrupti!
                                </span>
                            </li>

                            <li className="w-full">
                                <div className="flex w-full gap-4">
                                    <span className="basis-1/2 text-xl">
                                        <span className="text-brand-neutral-alt-600">Quantity </span>
                                        <span className="font-medium">1</span>
                                    </span>

                                    <span className="basis-1/2 text-xl">
                                        <span className="text-brand-neutral-alt-600">Preferred delivery timeframe </span>
                                        <span className="font-medium">8 Days</span>
                                    </span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </section>

                <section className="rounded-2xl border border-brand-neutral-1000 p-6">
                    <div className="flex min-h-14.5 items-center justify-between gap-4">
                        <h2 className="text-3xl font-semibold">Measurements</h2>
                        <Button
                            className="text-base"
                            asChild
                        >
                            <Link href="/custom-order/create/?step=2&newItemStep=2">Edit</Link>
                        </Button>
                    </div>

                    <div className="mt-8">
                        <ul className="mt-7 flex flex-col gap-6">
                            <li className="text-xl">
                                <span className="text-brand-neutral-alt-600">How would you like to provide measurements? </span>
                                <span className="font-medium">Custom Measurements</span>
                            </li>

                            <li className="w-full">
                                <div className="flex w-full justify-between gap-4">
                                    <span className="basis-1/2 text-xl">
                                        <span className="text-brand-neutral-alt-600">Height </span>
                                        <span className="font-medium">162cm</span>
                                    </span>

                                    <span className="basis-1/2 text-xl">
                                        <span className="text-brand-neutral-alt-600">Waist </span>
                                        <span className="font-medium">60cm</span>
                                    </span>
                                </div>
                            </li>

                            <li className="w-full">
                                <div className="flex w-full justify-between gap-4">
                                    <span className="basis-1/2 text-xl">
                                        <span className="text-brand-neutral-alt-600">Chest </span>
                                        <span className="font-medium">67cm</span>
                                    </span>

                                    <span className="basis-1/2 text-xl">
                                        <span className="text-brand-neutral-alt-600">Shoulder Width </span>
                                        <span className="font-medium">80cm</span>
                                    </span>
                                </div>
                            </li>

                            <li className="text-xl">
                                <span className="text-brand-neutral-alt-600">Fitting Preferences </span>

                                <span className="block text-pretty">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, esse.</span>
                            </li>
                        </ul>
                    </div>
                </section>
            </div>

            <div className="mt-10.5">
                <div className="flex justify-between">
                    <Button
                        variant="neutral"
                        size="sm"
                        asChild
                    >
                        <Link href="/custom-order/create/?step=2&newItemStep=2">
                            <ArrowLeftIcon strokeWidth={3} />
                            Back
                        </Link>
                    </Button>

                    <Button
                        variant="default"
                        size="sm"
                        asChild
                    >
                        <Link href="/custom-order/create/?step=1&itemExist">
                            Create Item
                            <ArrowRightIcon strokeWidth={3} />
                        </Link>
                    </Button>
                </div>
            </div>
        </div>
    );
}
