import { Link } from '@inertiajs/react';
import { ArrowRightIcon, PlusIcon } from 'lucide-react';
import type { JSX } from 'react';
import { Button } from '@/components/ui/button';
import { Field, FieldLabel } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import CustomOrderItem from '@/components/web/pages/custom-order/custom-order-item';

interface StepCustomOrderFolderInterface {
    itemExist: string | null;
}

export default function StepCustomOrderFolder({ itemExist }: StepCustomOrderFolderInterface): JSX.Element {
    return (
        <section>
            <div className="mt-8">
                <h1 className="text-5xl/snug font-bold">Create a Custom Order</h1>

                <div className="mt-6">
                    <form>
                        <div className="flex flex-col gap-4">
                            <Field>
                                <FieldLabel
                                    className="text-xl"
                                    htmlFor="order_title"
                                >
                                    Order Title
                                </FieldLabel>
                                <Input id="order_title" />
                            </Field>

                            <div className="flex flex-col gap-4">
                                {itemExist !== null && (
                                    <>
                                        <CustomOrderItem />
                                    </>
                                )}
                            </div>

                            <Button
                                variant="vertical"
                                size="rectangle"
                                asChild
                            >
                                <Link
                                    href="/custom-order/create/?step=2&newItemStep=1"
                                    as="button"
                                >
                                    <PlusIcon className="size-13.5 rounded-full bg-brand-primary-100 p-4 text-brand-primary-300" />
                                    Add New Item
                                </Link>
                            </Button>
                        </div>
                    </form>
                </div>

                <div className="mt-10 flex justify-end">
                    <Button
                        size="sm"
                        variant={itemExist !== null ? 'default' : 'neutral'}
                        disabled={itemExist !== null ? false : true}
                        asChild
                    >
                        <Link
                            href="/custom-order/create/?step=3"
                            as="button"
                        >
                            Confirm Order <ArrowRightIcon strokeWidth={3} />
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}
