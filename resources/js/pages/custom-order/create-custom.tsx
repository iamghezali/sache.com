import type { JSX } from 'react';
import OnBoarding from '@/components/web/pages/custom-order/on-boarding';
import WebLayout from '@/layouts/web-layout';

export default function CreateCustom(): JSX.Element {
    const params = new URLSearchParams(window.location.search);
    const firstTime = params.get('first_time');

    return (
        <WebLayout>
            {firstTime !== null ? (
                <OnBoarding />
            ) : (
                <div>
                    <h1></h1>
                </div>
            )}
        </WebLayout>
    );
}
