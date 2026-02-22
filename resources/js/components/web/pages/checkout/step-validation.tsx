import { Link } from '@inertiajs/react';
import { ArrowRight } from 'lucide-react';
import type { JSX } from 'react';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Field, FieldContent, FieldLabel } from '@/components/ui/field';
import { Label } from '@/components/ui/label';
import PlaceholderImage from '@/components/ui/placeholderImage';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

export default function StepValidation(): JSX.Element {
    return (
        <div className="flex flex-col gap-8">
            <div className="mt-4 flex flex-col gap-5">
                <h2 className="text-xl font-medium">Your Addresses</h2>

                <div className="flex gap-14">
                    <div className="min-w-0 grow rounded-xl border-2 border-brand-neutral-1000 px-4 py-5">
                        <h6 className="block text-lg font-medium">Your Delivery Address</h6>

                        <ul className="mt-4 space-y-2.5">
                            <li>Amira Chaabani</li>
                            <li>Cite AADL Douira Bloc F03 Porte N05</li>
                            <li>16 000, Alger</li>
                            <li>Algeria</li>
                            <li>0748281739</li>
                        </ul>
                    </div>

                    <div className="min-w-0 grow rounded-xl border-2 border-brand-neutral-1000 px-4 py-5">
                        <h6 className="block text-lg font-medium">Your Invoice Address</h6>

                        <ul className="mt-4 space-y-2.5">
                            <li>Amira Chaabani</li>
                            <li>Cite AADL Douira Bloc F03 Porte N05</li>
                            <li>16 000, Alger</li>
                            <li>Algeria</li>
                            <li>0748281739</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="flex flex-col gap-5">
                <h2 className="text-xl font-medium">Delivery Option</h2>

                <RadioGroup>
                    <FieldLabel htmlFor="delivery_option_yalidine">
                        <Field orientation="horizontal">
                            <RadioGroupItem
                                id="delivery_option_yalidine"
                                value="yalidine"
                                checked
                                disabled
                            />

                            <FieldContent>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-4">
                                        <div className="relative h-8 w-22">
                                            <PlaceholderImage />
                                        </div>
                                        <span className="min-w-[12ch] text-lg font-medium">Yalidine</span>
                                        <span className="font-normal">Fast Delivery 24H to 48H</span>
                                    </div>

                                    <span className="font-medium">800 DZD TTC</span>
                                </div>
                            </FieldContent>
                        </Field>
                    </FieldLabel>
                </RadioGroup>
            </div>

            <div className="flex flex-col gap-5">
                <h2 className="text-xl font-medium">Payment Option</h2>

                <RadioGroup>
                    <FieldLabel htmlFor="payment_option_cash_on_delivery">
                        <Field orientation="horizontal">
                            <RadioGroupItem
                                id="payment_option_cash_on_delivery"
                                value="cash_on_delivery"
                                checked
                                disabled
                            />

                            <FieldContent>
                                <div className="flex items-center justify-between">
                                    <span className="min-w-[12ch] text-lg font-medium">Cash on Delivery</span>

                                    <span className="font-medium">12,400 DZD TTC</span>
                                </div>
                            </FieldContent>
                        </Field>
                    </FieldLabel>
                </RadioGroup>
            </div>

            <div className="flex flex-col gap-5">
                <Label>
                    <Checkbox
                        checked
                        disabled
                    />
                    My billing and delivery information are the same.
                </Label>

                <Button
                    className="justify-between px-4 uppercase"
                    variant="neutral"
                    asChild
                >
                    <Link href="/shop/checkout/success">
                        Validate & Ship
                        <ArrowRight />
                    </Link>
                </Button>
            </div>
        </div>
    );
}
