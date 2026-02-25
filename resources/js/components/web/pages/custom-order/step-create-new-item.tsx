import { Link, router } from '@inertiajs/react';
import { Tabs as TabsPrimitive } from 'radix-ui';
import { useEffect, useState, type JSX } from 'react';

import StepNewItemInformation from '@/components/web/pages/custom-order/step-new-item-information';
import StepNewItemMeasurments from '@/components/web/pages/custom-order/step-new-item-measurments';
import StepNewItemReview from '@/components/web/pages/custom-order/step-new-item-review';

interface StepCreateNewItemInterface {
    newItemStep: string | null;
}

export default function StepCreateNewItem({ newItemStep }: StepCreateNewItemInterface): JSX.Element {
    const [activeTab, setActiveTab] = useState<string>('');

    useEffect(() => {
        if (newItemStep === null || newItemStep === '') {
            router.visit('/custom-order/create/?step=2&newItemStep=1', {
                onStart: () => setActiveTab('1'),
            });
        } else {
            setActiveTab(newItemStep);
        }
    }, [newItemStep]);

    return (
        <section>
            <div className="mt-8">
                <TabsPrimitive.Root
                    className="flex flex-col"
                    value={activeTab}
                    data-orientation="horizontal"
                >
                    <div>
                        <TabsPrimitive.Content value="1">
                            <h1 className="text-[2.875rem] leading-17.25 font-bold text-brand-neutral-1000">Create a New Item</h1>
                        </TabsPrimitive.Content>

                        <TabsPrimitive.Content value="2">
                            <h1 className="text-[2.875rem] leading-17.25 font-bold text-brand-neutral-1000">Provide Measurements</h1>
                        </TabsPrimitive.Content>

                        <TabsPrimitive.Content value="3">
                            <h1 className="text-[2.875rem] leading-17.25 font-bold text-brand-neutral-1000">Review Your Item</h1>
                        </TabsPrimitive.Content>
                    </div>

                    <TabsPrimitive.List className="mt-3 inline-flex w-208 gap-4.5">
                        <TabsPrimitive.Trigger
                            className='h-1.5 flex-1 rounded-full bg-brand-neutral-alt-400 transition-all data-[state="active"]:bg-brand-primary-300'
                            data-orientation="horizontal"
                            value="1"
                            asChild
                        >
                            <Link
                                href="/custom-order/create/?step=2&newItemStep=1"
                                onFinish={() => setActiveTab('1')}
                            />
                        </TabsPrimitive.Trigger>
                        <TabsPrimitive.Trigger
                            className='h-1.5 flex-1 rounded-full bg-brand-neutral-alt-400 transition-all data-[state="active"]:bg-brand-primary-300'
                            data-orientation="horizontal"
                            value="2"
                            asChild
                        >
                            <Link
                                href="/custom-order/create/?step=2&newItemStep=2"
                                onFinish={() => setActiveTab('2')}
                            />
                        </TabsPrimitive.Trigger>
                        <TabsPrimitive.Trigger
                            className='h-1.5 flex-1 rounded-full bg-brand-neutral-alt-400 transition-all data-[state="active"]:bg-brand-primary-300'
                            value="3"
                            asChild
                            data-orientation="horizontal"
                        >
                            <Link
                                href="/custom-order/create/?step=2&newItemStep=3"
                                onFinish={() => setActiveTab('3')}
                            />
                        </TabsPrimitive.Trigger>
                    </TabsPrimitive.List>

                    <TabsPrimitive.Content value="1">
                        <StepNewItemInformation />
                    </TabsPrimitive.Content>

                    <TabsPrimitive.Content value="2">
                        <StepNewItemMeasurments />
                    </TabsPrimitive.Content>

                    <TabsPrimitive.Content value="3">
                        <StepNewItemReview />
                    </TabsPrimitive.Content>
                </TabsPrimitive.Root>
            </div>
        </section>
    );
}
