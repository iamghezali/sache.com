import type { JSX } from 'react';
import { Button } from '@/components/ui/button';
import { useCheckout } from '@/pages/checkout/checkout';

export default function StepPersonnalInfo(): JSX.Element {
    const { setActiveStep, setStepValid, scrollToStep } = useCheckout();

    function HandleConfirmation() {
        setStepValid('1');
        setActiveStep('2');
        scrollToStep('1');
    }

    return (
        <div>
            <Button
                className="w-full"
                variant="neutral"
                onClick={HandleConfirmation}
            >
                Login
            </Button>
        </div>
    );
}
