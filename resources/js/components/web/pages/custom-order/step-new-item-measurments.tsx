import { Link } from '@inertiajs/react';
import { ArrowLeftIcon, ArrowRightIcon } from 'lucide-react';
import { Tabs as TabsPrimitive } from 'radix-ui';
import { useState, type JSX } from 'react';
import { Button } from '@/components/ui/button';
import { Field, FieldLabel, FieldTitle } from '@/components/ui/field';
import PlaceholderImage from '@/components/ui/placeholderImage';
import { Slider } from '@/components/ui/slider';
import { Textarea } from '@/components/ui/textarea';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { CustomMeasurmementsIllustration, StandardMeasurmementsIllustration } from '@/components/web/pages/custom-order/MeasurementIllustrations';

export default function StepNewItemMeasurments(): JSX.Element {
    const [height, setHeight] = useState([162]);
    const [waist, setWaist] = useState([60]);
    const [chest, setChest] = useState([67]);
    const [shoulderWidth, setShoulderWidth] = useState([80]);

    return (
        <div className="mt-10.5">
            <div className="flex flex-col gap-4">
                <h2 className="text-base/tight font-semibold text-brand-neutral-1000">1. How would you like to provide measurements?</h2>

                <TabsPrimitive.Root
                    className="flex flex-col"
                    data-orientation="horizontal"
                    defaultValue="standard"
                >
                    <div className="flex justify-between gap-4">
                        <div>
                            <TabsPrimitive.TabsList className="flex w-161 gap-6">
                                <TabsPrimitive.Trigger
                                    className='flex h-48 flex-1 flex-col items-center justify-center rounded-lg border border-brand-neutral-alt-500 data-[state="active"]:border-brand-primary-200 data-[state="active"]:bg-brand-primary-100 [&_svg]:text-brand-neutral-100 data-[state="active"]:[&_svg]:text-brand-primary-100'
                                    value="standard"
                                >
                                    <div>
                                        <span className="font-medium">Standard Size (Recommanded)</span>
                                        <span className="mt-1 block text-xs">Best for most customers.</span>
                                    </div>

                                    <div className="mt-2.5">
                                        <StandardMeasurmementsIllustration />
                                    </div>
                                </TabsPrimitive.Trigger>

                                <TabsPrimitive.Trigger
                                    className='flex h-48 flex-1 flex-col items-center justify-center rounded-lg border border-brand-neutral-alt-500 data-[state="active"]:border-brand-primary-200 data-[state="active"]:bg-brand-primary-100 [&_svg]:text-brand-neutral-100 data-[state="active"]:[&_svg]:text-brand-primary-100'
                                    value="custom"
                                >
                                    <div>
                                        <span className="font-medium">Custom Measurements</span>
                                        <span className="mt-1 block text-xs">Recommended for tailored results.</span>
                                    </div>

                                    <div className="mt-2.5">
                                        <CustomMeasurmementsIllustration />
                                    </div>
                                </TabsPrimitive.Trigger>
                            </TabsPrimitive.TabsList>

                            <TabsPrimitive.Content value="standard">
                                <div className="mt-10.5 w-161">
                                    <div className="flex justify-between">
                                        <h3 className="font-semibold text-brand-neutral-1000 uppercase">Size</h3>

                                        <Button
                                            className="uppercase"
                                            variant="link"
                                            size="inline"
                                        >
                                            Size Chart
                                        </Button>
                                    </div>

                                    <ToggleGroup
                                        className="mt-2 flex gap-1"
                                        type="single"
                                        variant={'sizes-filter-lg'}
                                        defaultValue="xs"
                                    >
                                        <ToggleGroupItem value="xs">XS</ToggleGroupItem>
                                        <ToggleGroupItem value="s">S</ToggleGroupItem>
                                        <ToggleGroupItem value="m">M</ToggleGroupItem>
                                        <ToggleGroupItem value="l">L</ToggleGroupItem>
                                        <ToggleGroupItem value="xl">XL</ToggleGroupItem>
                                        <ToggleGroupItem value="xxl">XXL</ToggleGroupItem>
                                    </ToggleGroup>
                                </div>
                            </TabsPrimitive.Content>

                            <TabsPrimitive.Content value="custom">
                                <div className="mt-10.5">
                                    <div className="flex gap-6">
                                        <div className="w-78">
                                            <Field className="w-full max-w-xs">
                                                <FieldTitle className="text-sm font-normal">
                                                    <span>
                                                        Height <span className="font-medium text-brand-primary-400">{height[0]}</span>cm
                                                    </span>
                                                </FieldTitle>

                                                <Slider
                                                    className="mt-1 w-full"
                                                    value={height}
                                                    onValueChange={setHeight}
                                                    max={220}
                                                    min={40}
                                                    step={1}
                                                />
                                            </Field>
                                        </div>

                                        <div className="w-78">
                                            <Field className="w-full max-w-xs">
                                                <FieldTitle className="text-sm font-normal">
                                                    <span>
                                                        Waist <span className="font-medium text-brand-primary-400">{waist[0]}</span>cm
                                                    </span>
                                                </FieldTitle>

                                                <Slider
                                                    className="mt-1 w-full"
                                                    value={waist}
                                                    onValueChange={setWaist}
                                                    max={220}
                                                    min={40}
                                                    step={1}
                                                />
                                            </Field>
                                        </div>
                                    </div>

                                    <div className="mt-9 flex gap-6">
                                        <div className="w-78">
                                            <Field className="w-full max-w-xs">
                                                <FieldTitle className="text-sm font-normal">
                                                    <span>
                                                        Chest <span className="font-medium text-brand-primary-400">{chest[0]}</span>cm
                                                    </span>
                                                </FieldTitle>

                                                <Slider
                                                    className="mt-1 w-full"
                                                    value={chest}
                                                    onValueChange={setChest}
                                                    max={220}
                                                    min={40}
                                                    step={1}
                                                />
                                            </Field>
                                        </div>

                                        <div className="w-78">
                                            <Field className="w-full max-w-xs">
                                                <FieldTitle className="text-sm font-normal">
                                                    <span>
                                                        Shoulder width <span className="font-medium text-brand-primary-400">{shoulderWidth[0]}</span>
                                                        cm
                                                    </span>
                                                </FieldTitle>

                                                <Slider
                                                    className="mt-1 w-full"
                                                    value={shoulderWidth}
                                                    onValueChange={setShoulderWidth}
                                                    max={220}
                                                    min={40}
                                                    step={1}
                                                />
                                            </Field>
                                        </div>
                                    </div>
                                </div>
                            </TabsPrimitive.Content>
                        </div>

                        <TabsPrimitive.Content value="custom">
                            <div className="relative -mt-24 h-110 w-95">
                                <PlaceholderImage />
                            </div>
                        </TabsPrimitive.Content>
                    </div>
                </TabsPrimitive.Root>
            </div>

            <div className="mt-10.5">
                <Field>
                    <FieldLabel
                        className="text-xl"
                        htmlFor="fitting-preference"
                    >
                        Any fitting preference?
                    </FieldLabel>
                    <Textarea
                        className="min-h-25"
                        id="fitting-preference"
                    />
                </Field>
            </div>

            <div className="mt-10.5">
                <div className="flex justify-between">
                    <Button
                        variant="neutral"
                        size="sm"
                        asChild
                    >
                        <Link href="/custom-order/create/?step=2&newItemStep=1">
                            <ArrowLeftIcon strokeWidth={3} />
                            Back
                        </Link>
                    </Button>

                    <Button
                        variant="default"
                        size="sm"
                        asChild
                    >
                        <Link href="/custom-order/create/?step=2&newItemStep=3">
                            Continue to review
                            <ArrowRightIcon strokeWidth={3} />
                        </Link>
                    </Button>
                </div>
            </div>
        </div>
    );
}
