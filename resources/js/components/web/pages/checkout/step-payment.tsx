import { ArrowRightIcon } from 'lucide-react';
import type { JSX } from 'react';
import { Button } from '@/components/ui/button';
import { Field, FieldContent, FieldLabel } from '@/components/ui/field';
import PlaceholderImage from '@/components/ui/placeholderImage';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { useCheckout } from '@/pages/checkout';

export default function StepPayment(): JSX.Element {
    const { setActiveStep, setStepValid, scrollToStep } = useCheckout();

    function HandleConfirmation() {
        setStepValid('4');
        setActiveStep('5');
        scrollToStep('5');
    }

    return (
        <div>
            <form action="">
                <div className="mt-4">
                    <h2 className="text-xl font-medium text-brand-neutral-1000">Choose a Payment option</h2>

                    <div className="mt-6">
                        <RadioGroup
                            className="gap-6"
                            defaultValue="chargily"
                        >
                            <FieldLabel htmlFor="payment_option_yalidine">
                                <Field orientation="horizontal">
                                    <RadioGroupItem
                                        id="payment_option_yalidine"
                                        value="cash_on_delivery"
                                    />

                                    <FieldContent>
                                        <div className="flex items-center justify-between">
                                            <span className="min-w-[12ch] text-lg font-medium">Cash on Delivery</span>

                                            <span className="font-semibold">12,400 DZD TTC</span>
                                        </div>
                                    </FieldContent>
                                </Field>
                            </FieldLabel>

                            <FieldLabel htmlFor="payment_option_chargily">
                                <Field orientation="horizontal">
                                    <RadioGroupItem
                                        id="payment_option_chargily"
                                        value="chargily"
                                    />

                                    <FieldContent>
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-4">
                                                <div className="relative h-8 w-22">
                                                    <PlaceholderImage />
                                                </div>
                                                <span className="min-w-[12ch] text-lg font-medium">Chargily</span>
                                                <span className="font-normal">Online Payment</span>
                                            </div>

                                            <span className="font-semibold">12,400 DZD TTC</span>
                                        </div>
                                    </FieldContent>
                                </Field>
                            </FieldLabel>
                        </RadioGroup>
                    </div>
                </div>

                <Button
                    className="mt-6 w-full justify-between px-4 uppercase"
                    variant="neutral"
                    type="button"
                    onClick={HandleConfirmation}
                >
                    Confirm & Pay
                    <ArrowRightIcon />
                </Button>
            </form>
        </div>
    );
}
