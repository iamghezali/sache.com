import { ArrowRightIcon } from 'lucide-react';
import { Collapsible } from 'radix-ui';
import { useState, type JSX } from 'react';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useCheckout } from '@/pages/checkout/checkout';

export default function StepAddress(): JSX.Element {
    const { goToStep, setStepValid, scrollToStep } = useCheckout();
    const [isChecked, setIsChecked] = useState<boolean | 'indeterminate'>(true);

    function HandleConfirmation() {
        setStepValid('2');
        scrollToStep('2');
        goToStep('3');
    }

    return (
        <div>
            <form action="">
                <div className="mt-4">
                    <h2 className="text-xl font-medium text-brand-neutral-1000">Enter your full address</h2>
                    <div className="mt-6 flex flex-col gap-6">
                        <Input placeholder="Full Name" />
                        <Input placeholder="Address" />
                        <Input placeholder="Willaya" />
                        <Input placeholder="ZIP Code" />
                        <Input placeholder="Country" />
                        <Input placeholder="Phone Number" />
                    </div>
                </div>

                <Label className="mt-6">
                    <Checkbox
                        checked={isChecked}
                        onCheckedChange={setIsChecked}
                    />
                    Use This Address for invoicing.
                </Label>

                <Collapsible.Root open={!isChecked}>
                    <Collapsible.Content className="CollapsibleContent">
                        <div className="mt-6">
                            <h2 className="text-xl font-medium text-brand-neutral-1000">Enter your invoice address</h2>

                            <div className="mt-6 flex flex-col gap-6">
                                <Input placeholder="Full Name" />
                                <Input placeholder="Address" />
                                <Input placeholder="Willaya" />
                                <Input placeholder="ZIP Code" />
                                <Input placeholder="Country" />
                                <Input placeholder="Phone Number" />
                            </div>
                        </div>
                    </Collapsible.Content>
                </Collapsible.Root>

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
