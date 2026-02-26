import type { JSX } from 'react';
import { Button } from '@/components/ui/button';
import { Field, FieldLabel } from '@/components/ui/field';
import { Input } from '@/components/ui/input';

export default function AddressManagement(): JSX.Element {
    return (
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
    );
}
