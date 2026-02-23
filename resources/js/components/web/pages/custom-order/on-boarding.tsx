import { router } from '@inertiajs/react';
import { ArrowRightIcon } from 'lucide-react';
import { Tabs as TabsPrimitive } from 'radix-ui';
import { useState, type JSX } from 'react';
import { Button } from '@/components/ui/button';
import PlaceholderImage from '@/components/ui/placeholderImage';
import useAOS from '@/hooks/useAOS';

export default function OnBoarding(): JSX.Element {
    useAOS();

    const [activeTab, setActiveTab] = useState<string>('step-1');

    function GotoNext() {
        switch (activeTab) {
            case 'step-1':
                setActiveTab('step-2');
                break;

            case 'step-2':
                setActiveTab('step-3');
                break;

            case 'step-3':
                router.visit('/');
                break;

            default:
                break;
        }
    }

    return (
        <section>
            <div className="mt-8">
                <TabsPrimitive.Root
                    data-orientation="horizontal"
                    value={activeTab}
                    onValueChange={setActiveTab}
                >
                    <TabsPrimitive.Content value="step-1">
                        <div>
                            <div className="flex items-start justify-center">
                                <div className="relative w-75">
                                    <div className="pt-[120%]">
                                        <div
                                            className="absolute top-1/2 left-1/2 z-20 w-75 -translate-1/2 rounded-4xl bg-brand-shade-white p-2 shadow-2xl"
                                            data-aos="zoom-in-right"
                                            data-aos-delay="100"
                                            data-aos-once="true"
                                        >
                                            <div className="relative overflow-hidden rounded-3xl bg-neutral-200 pt-[120%]">
                                                <PlaceholderImage />
                                            </div>
                                        </div>

                                        <div
                                            className="absolute top-5 -left-4/12 z-10 w-75 -translate-x-1/2 scale-95 -rotate-10 rounded-4xl bg-brand-shade-white p-2 shadow-2xl"
                                            data-aos="zoom-in-right"
                                            data-aos-once="true"
                                        >
                                            <div className="relative overflow-hidden rounded-3xl bg-neutral-200 pt-[120%]">
                                                <PlaceholderImage />
                                            </div>
                                        </div>

                                        <div
                                            className="absolute top-5 -right-4/12 z-10 w-75 translate-x-1/2 scale-95 rotate-10 rounded-4xl bg-brand-shade-white p-2 shadow-2xl"
                                            data-aos="zoom-in-right"
                                            data-aos-delay="200"
                                            data-aos-once="true"
                                        >
                                            <div className="relative overflow-hidden rounded-3xl bg-neutral-200 pt-[120%]">
                                                <PlaceholderImage />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-14 flex flex-col items-center">
                                <h2
                                    className="text-5xl leading-17.5 font-bold text-brand-neutral-1000"
                                    data-aos="fade-right"
                                    data-aos-once="true"
                                >
                                    Share Your Idea
                                </h2>

                                <span
                                    className="mt-4 block text-center text-[1.375rem]/tight text-brand-neutral-1000"
                                    data-aos="fade-right"
                                    data-aos-delay="100"
                                    data-aos-once="true"
                                >
                                    <span className="font-medium">Upload reference images and tell us what you want to create.</span>
                                    <br />
                                    Clothing or living room salon — your idea is the starting point.
                                </span>
                            </div>
                        </div>
                    </TabsPrimitive.Content>

                    <TabsPrimitive.Content value="step-2">
                        <div>
                            <div className="flex items-start justify-center">
                                <div className="relative w-75">
                                    <div className="pt-[120%]">
                                        <div
                                            className="absolute top-5 left-5/100 z-20 w-75 -translate-x-1/2 -rotate-5 rounded-4xl bg-brand-shade-white p-2 shadow-2xl"
                                            data-aos="zoom-in-right"
                                            data-aos-once="true"
                                        >
                                            <div className="relative overflow-hidden rounded-3xl bg-neutral-200 pt-[120%]">
                                                <PlaceholderImage />
                                            </div>
                                        </div>

                                        <div
                                            className="absolute top-5 right-5/100 z-10 w-75 translate-x-1/2 rotate-5 rounded-4xl bg-brand-shade-white p-2 shadow-2xl"
                                            data-aos="zoom-in-right"
                                            data-aos-delay="100"
                                            data-aos-once="true"
                                        >
                                            <div className="relative overflow-hidden rounded-3xl bg-neutral-200 pt-[120%]">
                                                <PlaceholderImage />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-14 flex flex-col items-center">
                                <h2
                                    className="text-5xl leading-17.5 font-bold text-brand-neutral-1000"
                                    data-aos="fade-right"
                                    data-aos-once="true"
                                >
                                    We Review & Price
                                </h2>

                                <span
                                    className="mt-4 block text-center text-[1.375rem]/tight text-brand-neutral-1000"
                                    data-aos="fade-right"
                                    data-aos-delay="100"
                                    data-aos-once="true"
                                >
                                    <span className="font-medium">Our team reviews your request and prepares a custom price.</span>
                                    <br />
                                    You’ll be notified once everything is confirmed.
                                </span>
                            </div>
                        </div>
                    </TabsPrimitive.Content>

                    <TabsPrimitive.Content value="step-3">
                        <div>
                            <div className="flex items-start justify-center">
                                <div className="relative w-75">
                                    <div className="pt-[120%]">
                                        <div
                                            className="absolute top-1/2 left-1/2 z-20 w-75 -translate-1/2 rounded-4xl bg-brand-shade-white p-2 shadow-2xl"
                                            data-aos="zoom-in-right"
                                            data-aos-once="true"
                                        >
                                            <div className="relative overflow-hidden rounded-3xl bg-neutral-200 pt-[120%]">
                                                <PlaceholderImage />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-14 flex flex-col items-center">
                                <h2
                                    className="text-5xl leading-17.5 font-bold text-brand-neutral-1000"
                                    data-aos="fade-right"
                                    data-aos-once="true"
                                >
                                    We Produce & Deliver
                                </h2>

                                <span
                                    className="mt-4 block text-center text-[1.375rem]/tight text-brand-neutral-1000"
                                    data-aos="fade-right"
                                    data-aos-delay="100"
                                    data-aos-once="true"
                                >
                                    <span className="font-medium">Your order is crafted, quality-checked, and delivered to you.</span>
                                    <br />
                                    You can track every stage until it arrives.
                                </span>
                            </div>
                        </div>
                    </TabsPrimitive.Content>

                    <div className="mt-6 flex justify-center">
                        <div className="flex flex-col items-center">
                            <Button
                                className="w-69"
                                size="sm"
                                onClick={GotoNext}
                            >
                                Next
                                <ArrowRightIcon strokeWidth={3} />
                            </Button>

                            <TabsPrimitive.TabsList className="mt-6 inline-flex w-69 gap-4 border">
                                <TabsPrimitive.TabsTrigger
                                    className='h-1.5 flex-1 rounded-full bg-brand-neutral-alt-400 transition-all data-[state="active"]:bg-brand-primary-300'
                                    data-orientation="horizontal"
                                    value="step-1"
                                />

                                <TabsPrimitive.TabsTrigger
                                    className='h-1.5 flex-1 rounded-full bg-brand-neutral-alt-400 transition-all data-[state="active"]:bg-brand-primary-300'
                                    data-orientation="horizontal"
                                    value="step-2"
                                />

                                <TabsPrimitive.TabsTrigger
                                    className='h-1.5 flex-1 rounded-full bg-brand-neutral-alt-400 transition-all data-[state="active"]:bg-brand-primary-300'
                                    data-orientation="horizontal"
                                    value="step-3"
                                />
                            </TabsPrimitive.TabsList>
                        </div>
                    </div>
                </TabsPrimitive.Root>
            </div>
        </section>
    );
}
