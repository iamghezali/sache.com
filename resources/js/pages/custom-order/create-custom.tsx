import type { JSX } from 'react';
import OnBoarding from '@/components/web/pages/custom-order/on-boarding';
import WebLayout from '@/layouts/web-layout';

export default function CreateCustom(): JSX.Element {
    const firstTime = false;
    return (
        <WebLayout>
            {firstTime ? (
                <OnBoarding />
            ) : (
                <div>
                    <h1></h1>
                </div>
            )}
        </WebLayout>
    );
}
