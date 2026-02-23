import { Link } from '@inertiajs/react';
import { ArrowRightIcon } from 'lucide-react';
import type { JSX } from 'react';

import { Button } from '@/components/ui/button';
import OrdersBadge from '@/components/web/pages/orders/orders-badge';

type OrderStatusType = 'order-confirmed' | 'processing' | 'production' | 'order-paid';

interface OrderItemInterface {
    id: string;
    title: string;
    order_id: string;
    order_type: 'custom_order' | 'ready-to-wear';
    order_status: OrderStatusType;
    last_update: string;
}

export default function RtwOrderItemCard({ OrderItem }: { OrderItem: OrderItemInterface }): JSX.Element {
    const statusLabels = {
        'order-confirmed': {
            label: 'Order Confirmed',
            variant: 'white',
        },
        processing: {
            label: 'Processing',
            variant: 'blue-light',
        },
        production: {
            label: 'Production',
            variant: 'white',
        },
        'order-paid': {
            label: 'Order Paid',
            variant: 'orange-light',
        },
    } as const;

    return (
        <>
            <div className="rounded-2xl border border-brand-neutral-alt-500 px-6 py-4 text-brand-neutral-1000">
                <div className="flex items-center justify-between">
                    <div className="flex items-baseline gap-1">
                        <span className="text-brand-neutral-alt-700">Order ID:</span>
                        <span>#SASH-{OrderItem.order_id}</span>
                    </div>

                    <div className="flex items-baseline gap-1">
                        <span className="text-brand-neutral-alt-700">Order Type:</span>
                        <span>Ready-To-Wear</span>
                    </div>
                </div>

                <div className="mt-6 flex items-baseline justify-between">
                    <h2 className="text-[2rem]/tight font-bold">{OrderItem.title}</h2>

                    <OrdersBadge variant={statusLabels[OrderItem.order_status].variant}>{statusLabels[OrderItem.order_status].label}</OrdersBadge>
                </div>

                <div className="mt-6 flex items-center justify-between">
                    <div className="flex items-baseline gap-1">
                        <span className="text-brand-neutral-alt-700">Updated On:</span>
                        <span>{OrderItem.last_update}</span>
                    </div>

                    <Button
                        className="min-w-48"
                        size="sm"
                        asChild
                    >
                        <Link href="/shop/orders/ready-to-wear/sash-order-id">
                            View Order
                            <ArrowRightIcon strokeWidth={3} />
                        </Link>
                    </Button>
                </div>
            </div>
        </>
    );
}
