import { useState, type JSX } from 'react';
import { Button } from '@/components/ui/button';
import { Field, FieldLabel, FieldTitle } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { Slider } from '@/components/ui/slider';
import WebLayout from '@/layouts/web-layout';

export default function UserSettings(): JSX.Element {
    const [height, setHeight] = useState([162]);
    const [waist, setWaist] = useState([60]);
    const [chest, setChest] = useState([67]);
    const [shoulderWidth, setShoulderWidth] = useState([80]);

    return (
        <WebLayout>
            <div className="mt-11.5">
                <h1 className="text-4xl/tight font-bold">Account Settings</h1>

                <section className="mt-9">
                    <h2 className="text-2xl/tight font-bold">Basic Info</h2>

                    <div className="mt-6">
                        <form action="">
                            <div className="flex flex-col gap-4.5">
                                <Field>
                                    <FieldLabel
                                        className="text-lg font-medium"
                                        htmlFor="item_name"
                                    >
                                        Name
                                    </FieldLabel>
                                    <Input id="item_name" />
                                </Field>

                                <Field>
                                    <FieldLabel
                                        className="text-lg font-medium"
                                        htmlFor="item_name"
                                    >
                                        Email
                                    </FieldLabel>
                                    <Input
                                        id="item_name"
                                        type="email"
                                    />
                                </Field>

                                <Field>
                                    <FieldLabel
                                        className="text-lg font-medium"
                                        htmlFor="item_name"
                                    >
                                        Phone Number
                                    </FieldLabel>
                                    <Input
                                        id="item_name"
                                        type="email"
                                    />
                                </Field>

                                <Button
                                    className="ml-auto text-black hover:bg-brand-secondary-300/80"
                                    size="interactions"
                                    variant="secondary"
                                >
                                    Save
                                </Button>
                            </div>
                        </form>
                    </div>
                </section>

                <Separator
                    className="my-8 bg-brand-neutral-alt-500"
                    orientation="horizontal"
                />

                <section>
                    <h2 className="text-2xl/tight font-bold">Change Password</h2>

                    <div className="mt-6">
                        <form action="">
                            <div className="flex flex-col gap-4.5">
                                <Field>
                                    <FieldLabel
                                        className="text-lg font-medium"
                                        htmlFor="item_name"
                                    >
                                        Old Password
                                    </FieldLabel>
                                    <Input id="item_name" />
                                </Field>

                                <Field>
                                    <FieldLabel
                                        className="text-lg font-medium"
                                        htmlFor="item_name"
                                    >
                                        New Password
                                    </FieldLabel>
                                    <Input
                                        id="item_name"
                                        type="email"
                                    />
                                </Field>

                                <Field>
                                    <FieldLabel
                                        className="text-lg font-medium"
                                        htmlFor="item_name"
                                    >
                                        Retype Password
                                    </FieldLabel>
                                    <Input
                                        id="item_name"
                                        type="email"
                                    />
                                </Field>

                                <Button
                                    className="ml-auto text-black hover:bg-brand-secondary-300/80"
                                    size="interactions"
                                    variant="secondary"
                                >
                                    Change Password
                                </Button>
                            </div>
                        </form>
                    </div>
                </section>

                <Separator
                    className="my-8 bg-brand-neutral-alt-500"
                    orientation="horizontal"
                />

                <section>
                    <h2 className="text-2xl/tight font-bold">Address Management</h2>

                    <div className="mt-6">
                        <form action="">
                            <div className="flex flex-col gap-4.5">
                                <Field>
                                    <FieldLabel
                                        className="text-lg font-medium"
                                        htmlFor="item_name"
                                    >
                                        Full Name
                                    </FieldLabel>
                                    <Input id="item_name" />
                                </Field>

                                <Field>
                                    <FieldLabel
                                        className="text-lg font-medium"
                                        htmlFor="item_name"
                                    >
                                        Address
                                    </FieldLabel>
                                    <Input id="item_name" />
                                </Field>

                                <Field>
                                    <FieldLabel
                                        className="text-lg font-medium"
                                        htmlFor="item_name"
                                    >
                                        Zid Code
                                    </FieldLabel>
                                    <Input id="item_name" />
                                </Field>

                                <Field>
                                    <FieldLabel
                                        className="text-lg font-medium"
                                        htmlFor="item_name"
                                    >
                                        Willaya
                                    </FieldLabel>
                                    <Input id="item_name" />
                                </Field>

                                <Field>
                                    <FieldLabel
                                        className="text-lg font-medium"
                                        htmlFor="item_name"
                                    >
                                        Country
                                    </FieldLabel>
                                    <Input id="item_name" />
                                </Field>

                                <Field>
                                    <FieldLabel
                                        className="text-lg font-medium"
                                        htmlFor="item_name"
                                    >
                                        Phone Number
                                    </FieldLabel>
                                    <Input id="item_name" />
                                </Field>

                                <Button
                                    className="ml-auto text-black hover:bg-brand-secondary-300/80"
                                    size="interactions"
                                    variant="secondary"
                                >
                                    Save
                                </Button>
                            </div>
                        </form>
                    </div>
                </section>

                <Separator
                    className="my-8 bg-brand-neutral-alt-500"
                    orientation="horizontal"
                />

                <section>
                    <h2 className="text-2xl/tight font-bold">Saved Measurement</h2>

                    <div className="mt-6">
                        <div className="flex justify-between gap-10">
                            <div className="max-w-xl flex-1">
                                <Field>
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

                            <div className="max-w-xl flex-1">
                                <Field>
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

                        <div className="mt-9 flex justify-between gap-10">
                            <div className="max-w-xl flex-1">
                                <Field>
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

                            <div className="max-w-xl flex-1">
                                <Field>
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
                </section>
            </div>
        </WebLayout>
    );
}
