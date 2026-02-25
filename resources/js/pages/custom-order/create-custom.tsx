import { type JSX } from 'react';
import OnBoarding from '@/components/web/pages/custom-order/on-boarding';

import StepCreateNewItem from '@/components/web/pages/custom-order/step-create-new-item';
import StepCustomOrderFolder from '@/components/web/pages/custom-order/step-custom-order-folder';
import StepCustomOrderSuccess from '@/components/web/pages/custom-order/step-custom-order-success';

import WebLayout from '@/layouts/web-layout';

export default function CreateCustom(): JSX.Element {
    const params = new URLSearchParams(window.location.search);
    const firstTime = params.get('first_time');
    const currentStep = params.get('step');
    const itemExist = params.get('itemExist');
    const newItemStep = params.get('newItemStep');

    return (
        <WebLayout>
            {firstTime !== null ? (
                <OnBoarding />
            ) : (
                <>
                    {currentStep === null && <StepCustomOrderFolder itemExist={itemExist} />}
                    {currentStep === '' && <StepCustomOrderFolder itemExist={itemExist} />}
                    {currentStep === '1' && <StepCustomOrderFolder itemExist={itemExist} />}
                    {currentStep === '2' && <StepCreateNewItem newItemStep={newItemStep} />}
                    {currentStep === '3' && <StepCustomOrderSuccess />}
                </>
            )}
        </WebLayout>
    );
}
