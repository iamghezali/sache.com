import { ArrowRightIcon } from 'lucide-react';
import type { JSX } from 'react';
import { Button } from '@/components/ui/button';
import { Field, FieldContent, FieldLabel } from '@/components/ui/field';
import PlaceholderImage from '@/components/ui/placeholderImage';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Textarea } from '@/components/ui/textarea';
import { useCheckout } from '@/pages/checkout/checkout';

export default function StepDeliveryMode(): JSX.Element {
    const { goToStep, setStepValid, scrollToStep } = useCheckout();

    function HandleConfirmation() {
        setStepValid('3');
        scrollToStep('3');
        goToStep('4');
    }

    return (
        <div>
            <form action="">
                <div className="mt-4">
                    <h2 className="text-xl font-medium text-brand-neutral-1000">Choose a Delivery</h2>

                    <div className="mt-6">
                        <RadioGroup className="gap-6">
                            <FieldLabel htmlFor="delivery_option_yalidine">
                                <Field orientation="horizontal">
                                    <RadioGroupItem
                                        id="delivery_option_yalidine"
                                        value="yalidine"
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

                                            <span className="font-semibold">800 DZD TTC</span>
                                        </div>
                                    </FieldContent>
                                </Field>
                            </FieldLabel>

                            <FieldLabel htmlFor="delivery_option_zrexpress">
                                <Field orientation="horizontal">
                                    <RadioGroupItem
                                        id="delivery_option_zrexpress"
                                        value="zrexpress"
                                    />

                                    <FieldContent>
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-4">
                                                <div className="relative h-8 w-22">
                                                    <PlaceholderImage />
                                                </div>
                                                <span className="min-w-[12ch] text-lg font-medium">ZR Express</span>
                                                <span className="font-normal">Stop Desk Delivery</span>
                                            </div>

                                            <span className="font-semibold">300 DZD TTC</span>
                                        </div>
                                    </FieldContent>
                                </Field>
                            </FieldLabel>
                        </RadioGroup>
                    </div>

                    <div className="mt-6 flex flex-col gap-6">
                        <Textarea placeholder="If you want to leave a message about delivery it goes here..." />
                    </div>
                </div>

                <Button
                    className="mt-6 w-full justify-between px-4 uppercase"
                    type="button"
                    variant="neutral"
                    onClick={HandleConfirmation}
                >
                    Continue
                    <ArrowRightIcon />
                </Button>
            </form>
        </div>
    );
}
