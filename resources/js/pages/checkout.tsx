import { CheckIcon } from 'lucide-react';
import { createContext, useContext, useRef, useState, type JSX } from 'react';
import {
    StepperAccordion,
    StepperAccordionContent,
    StepperAccordionItem,
    StepperAccordionTrigger,
} from '@/components/web/pages/checkout/accordion-stepper';

import StepAddress from '@/components/web/pages/checkout/step-address';
import StepDeliveryMode from '@/components/web/pages/checkout/step-delivery-mode';
import StepPayment from '@/components/web/pages/checkout/step-payment';
import StepPersonnalInfo from '@/components/web/pages/checkout/step-personnal-info';
import StepValidation from '@/components/web/pages/checkout/step-validation';
import WebLayout from '@/layouts/web-layout';

interface Step {
    value: string;
    label: string;
    component: JSX.Element;
    valid?: boolean;
}

interface CheckoutContextType {
    setActiveStep: (step: string) => void;
    setStepValid: (step: string) => void;
    scrollToStep: (step: string) => void;
}

const CheckoutContext = createContext<CheckoutContextType | undefined>(undefined);

export const useCheckout = () => {
    const context = useContext(CheckoutContext);
    if (!context) {
        throw new Error('useCheckout must be used within a CheckoutProvider');
    }
    return context;
};

export default function Checkout(): JSX.Element {
    const [activeStep, setActiveStep] = useState<string>('1');
    const [checkoutSteps, setCheckoutSteps] = useState<Step[]>([
        {
            value: '1',
            label: 'Personal Info',
            component: <StepPersonnalInfo />,
            valid: false,
        },
        {
            value: '2',
            label: 'Your Address',
            component: <StepAddress />,
            valid: false,
        },
        {
            value: '3',
            label: 'Delivery Mode',
            component: <StepDeliveryMode />,
            valid: false,
        },
        {
            value: '4',
            label: 'Payment',
            component: <StepPayment />,
            valid: false,
        },
        {
            value: '5',
            label: 'Validation',
            component: <StepValidation />,
            valid: false,
        },
    ]);
    const stepsRefs = useRef<(HTMLDivElement | null)[]>([]);

    function setStepValid(value: string) {
        setCheckoutSteps((prev) => prev.map((step) => (step.value === value ? { ...step, valid: true } : step)));
    }

    function scrollToStep(step: string) {
        setTimeout(() => {
            // stepsRefs.current[parseInt(step) - 1]?.scrollIntoView({ behavior: 'smooth' });
            stepsRefs.current[parseInt(step) - 1]?.scrollIntoView({ behavior: 'smooth' });
        }, 300);
    }

    return (
        <WebLayout>
            <section>
                <div className="mt-5 max-w-3xl">
                    <CheckoutContext.Provider value={{ setActiveStep, setStepValid, scrollToStep }}>
                        <StepperAccordion
                            className="flex flex-col gap-6"
                            type="single"
                            collapsible
                            value={activeStep}
                        >
                            {checkoutSteps.map((step, i) => (
                                <StepperAccordionItem
                                    className="scroll-mt-5"
                                    ref={(e) => {
                                        stepsRefs.current[i] = e;
                                    }}
                                    key={`checkout-step-${step.value}`}
                                    value={step.value}
                                >
                                    <StepperAccordionTrigger>
                                        {step?.valid ? <CheckIcon className="text-success-200" /> : `${step.value}. `}
                                        <span>{step.label}</span>
                                    </StepperAccordionTrigger>

                                    <StepperAccordionContent>{step.component}</StepperAccordionContent>
                                </StepperAccordionItem>
                            ))}
                        </StepperAccordion>
                    </CheckoutContext.Provider>
                </div>
            </section>
        </WebLayout>
    );
}
