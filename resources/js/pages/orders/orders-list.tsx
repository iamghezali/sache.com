import type { JSX } from 'react';
import EmptyOrders from '@/components/web/pages/orders/empty-orders';
import WebLayout from '@/layouts/web-layout';

export default function OrdersList(): JSX.Element {
    const ordersItemsList = Array.from({ length: 1 });

    return (
        <WebLayout>
            <section>
                <div className="mt-12">
                    <h1 className="text-7xl font-bold text-brand-neutral-1000">My Orders</h1>

                    <div>{ordersItemsList.length === 0 ? <EmptyOrders /> : <div></div>}</div>
                </div>
            </section>
        </WebLayout>
    );
}
