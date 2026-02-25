import { Link } from '@inertiajs/react';
import { ArrowLeftIcon, ArrowRightIcon, BuildingIcon, ShirtIcon, SofaIcon, UserIcon, UsersIcon } from 'lucide-react';
import { type JSX } from 'react';
import { Button } from '@/components/ui/button';
import { Field, FieldDescription, FieldLabel } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import InputDropzone from '@/components/ui/input-dropzone';
import { Separator } from '@/components/ui/separator';
import { Textarea } from '@/components/ui/textarea';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';

export default function StepNewItemInformation(): JSX.Element {
    return (
        <div className="mt-10.5">
            <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-4">
                    <h2 className="text-base/tight font-semibold text-brand-neutral-1000">1. What is this order for?</h2>

                    <div>
                        <ToggleGroup
                            className="flex w-161.25 gap-6"
                            type="single"
                            variant="custom-order"
                            defaultValue="individual"
                        >
                            <ToggleGroupItem value="individual">
                                <UserIcon strokeWidth={1.5} />
                                Individual
                            </ToggleGroupItem>
                            <ToggleGroupItem value="wholesale">
                                <UsersIcon strokeWidth={1.5} />
                                Wholesale
                            </ToggleGroupItem>
                            <ToggleGroupItem value="company">
                                <BuildingIcon strokeWidth={1.5} />
                                Company
                            </ToggleGroupItem>
                        </ToggleGroup>

                        <span className="mt-2 block">This is for individual orders</span>
                    </div>
                </div>

                <div className="flex flex-col gap-4">
                    <h2 className="text-base/tight font-semibold text-brand-neutral-1000">2. What would you like to create?</h2>

                    <ToggleGroup
                        className="flex w-119 gap-4"
                        type="single"
                        variant="custom-order"
                        defaultValue="clothing"
                    >
                        <ToggleGroupItem value="clothing">
                            <ShirtIcon strokeWidth={1.5} />
                            Clothing
                        </ToggleGroupItem>
                        <ToggleGroupItem value="living_room_salon">
                            <SofaIcon strokeWidth={1.5} />
                            Living Room Salon
                        </ToggleGroupItem>
                    </ToggleGroup>
                </div>

                <div className="flex flex-col gap-4">
                    <h2 className="text-base/tight font-semibold text-brand-neutral-1000">3. Gender</h2>

                    <ToggleGroup
                        className="flex w-119 gap-4"
                        type="single"
                        variant="custom-gender"
                        value="female"
                    >
                        <ToggleGroupItem value="female">Female</ToggleGroupItem>
                        <ToggleGroupItem
                            value="male"
                            disabled
                        >
                            Male
                        </ToggleGroupItem>
                    </ToggleGroup>
                </div>
            </div>

            <Separator
                className="my-10.5 bg-brand-neutral-500"
                orientation="horizontal"
            />

            <div>
                <form action="">
                    <div className="flex flex-col gap-8">
                        <Field>
                            <FieldLabel
                                className="text-xl"
                                htmlFor="item_name"
                            >
                                Item Name
                            </FieldLabel>
                            <Input id="item_name" />
                        </Field>

                        <Field>
                            <FieldLabel
                                className="text-xl"
                                htmlFor="category"
                            >
                                What are you looking for?
                            </FieldLabel>
                            <Input id="category" />
                        </Field>

                        <Field>
                            <FieldLabel
                                className="text-xl"
                                htmlFor="inspiration_images"
                            >
                                Upload Your Inspiration
                            </FieldLabel>

                            <InputDropzone />

                            <FieldDescription>Photos help us understand your expectations better.</FieldDescription>
                        </Field>

                        <Field>
                            <FieldLabel
                                className="text-xl"
                                htmlFor="category"
                            >
                                Will you provide the fabric?
                            </FieldLabel>

                            <Input id="category" />
                            <FieldDescription>
                                If SASH provides the fabric, an advance payment will be required before production starts.
                            </FieldDescription>
                        </Field>

                        <Field>
                            <FieldLabel
                                className="text-xl"
                                htmlFor="category"
                            >
                                Short Description
                            </FieldLabel>

                            <Textarea
                                className="min-h-54.5"
                                id="category"
                            />
                        </Field>

                        <div className="flex items-center gap-4">
                            <Field>
                                <FieldLabel
                                    className="text-xl"
                                    htmlFor="category"
                                >
                                    Quantity
                                </FieldLabel>

                                <Input
                                    id="category"
                                    type="number"
                                    defaultValue="1"
                                    min="1"
                                />
                            </Field>

                            <Field>
                                <FieldLabel
                                    className="text-xl"
                                    htmlFor="category"
                                >
                                    Preferred Delivery timeframe
                                </FieldLabel>

                                <Input id="category" />
                            </Field>
                        </div>
                    </div>
                </form>
            </div>

            <div className="mt-10.5">
                <div className="flex justify-between">
                    <Button
                        variant="neutral"
                        size="sm"
                        asChild
                    >
                        <Link href="/custom-order/create/?step=1">
                            <ArrowLeftIcon strokeWidth={3} />
                            Back
                        </Link>
                    </Button>

                    <Button
                        variant="default"
                        size="sm"
                        asChild
                    >
                        <Link href="/custom-order/create/?step=2&newItemStep=2">
                            Continue to Measurmements
                            <ArrowRightIcon strokeWidth={3} />
                        </Link>
                    </Button>
                </div>
            </div>
        </div>
    );
}
