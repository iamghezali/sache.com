import { CheckIcon } from 'lucide-react';
import { createContext, useContext, useRef, useState, type JSX } from 'react';
import PlaceholderImage from '@/components/ui/placeholderImage';
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
    const [activeStep, setActiveStep] = useState<string>('5');
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
            stepsRefs.current[parseInt(step) - 1]?.scrollIntoView({ behavior: 'smooth' });
        }, 300);
    }

    return (
        <WebLayout>
            <section>
                <div className="mt-5">
                    <div className="flex gap-25">
                        <div className="min-w-0 grow">
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

                        <div className="basis-117">
                            <div className="sticky top-7">
                                <div className="flex flex-col gap-12">
                                    <div className="rounded-3xl bg-brand-shade-white p-6">
                                        <h2 className="text-[2rem]/tight font-semibold text-brand-neutral-1000">Order Summary</h2>

                                        <ul className="mt-6 flex flex-col gap-4 text-brand-neutral-1000">
                                            <li className="flex items-center justify-between text-xl">
                                                <span>
                                                    <span className="text-brand-neutral-800">x1</span> Cozy Knit Set
                                                </span>
                                                <span className="text-brand-neutral-1000/80">12,000 DZD</span>
                                            </li>
                                            <li className="flex items-center justify-between text-xl">
                                                <span>Delivery</span>
                                                <span className="text-brand-neutral-1000/80">400 DZD</span>
                                            </li>
                                            <li className="flex items-center justify-between text-xl">
                                                <span>Sales Tax</span>
                                                <span className="text-brand-neutral-1000/80">-</span>
                                            </li>
                                            <li className="flex items-center justify-between text-2xl/tight font-semibold">
                                                <span>Total</span>
                                                <span className="text-brand-neutral-1000/80">12,400 DZD</span>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="rounded-3xl bg-brand-shade-white p-6">
                                        <h2 className="text-2xl/tight font-semibold text-brand-neutral-1000">Order Details</h2>
                                        <div className="mt-6 flex gap-6">
                                            <div className="basis-32">
                                                <div className="relative overflow-hidden rounded-3xl bg-neutral-200 pt-[120%]">
                                                    <PlaceholderImage />
                                                </div>
                                            </div>

                                            <div>
                                                <span className="block text-2xl leading-7 font-semibold text-brand-neutral-1000">Cozy Knit Set</span>

                                                <span className="mt-2 block text-brand-neutral-1000/80">Beige Color</span>
                                                <ul className="mt-3 flex gap-8 text-base font-medium text-brand-neutral-1000/80">
                                                    <li>Size L</li>
                                                    <li>Quantity 1</li>
                                                </ul>

                                                <span className="mt-2 block text-2xl font-semibold text-brand-secondary-300">12,400 DZD</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </WebLayout>
    );
}
