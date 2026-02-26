import type { JSX } from 'react';
import { Button } from '@/components/ui/button';
import { Field, FieldLabel } from '@/components/ui/field';
import { Input } from '@/components/ui/input';

export default function BasicInfo(): JSX.Element {
    return (
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
    );
}
