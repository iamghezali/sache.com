import { Link } from '@inertiajs/react';
import { ArrowRightIcon, CheckIcon, CircleOffIcon, MessageCircleIcon } from 'lucide-react';
import type { JSX } from 'react';
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';
import OrdersBadge from '@/components/web/pages/orders/orders-badge';

type OrderStatusType = 'under-review' | 'to-decide' | 'order-confirmed' | 'processing' | 'production' | 'order-paid';

interface OrderItemInterface {
    id: string;
    title: string;
    order_id: string;
    order_type: 'custom_order' | 'ready-to-wear';
    order_status: OrderStatusType;
    last_update: string;
    offer: {
        price: string;
        estimated_due_date: string;
    };
}

export default function CoOrderItemCard({ OrderItem }: { OrderItem: OrderItemInterface }): JSX.Element {
    const statusLabels = {
        'under-review': {
            label: 'Under Review',
            variant: 'white',
        },
        'to-decide': {
            label: 'To Decide',
            variant: 'white',
        },
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
                        <span>Custom Order</span>
                    </div>
                </div>

                <div className="mt-6 flex items-baseline justify-between">
                    <h2 className="text-[2rem]/tight font-bold">{OrderItem.title}</h2>
                    {OrderItem.order_status === 'to-decide' ? (
                        <>
                            <span className="text-2xl font-semibold">{OrderItem.offer?.price} DZD</span>
                        </>
                    ) : (
                        <OrdersBadge variant={statusLabels[OrderItem.order_status].variant}>{statusLabels[OrderItem.order_status].label}</OrdersBadge>
                    )}
                </div>

                <div className="mt-6 flex items-center justify-between">
                    <div className="flex items-baseline gap-1">
                        {OrderItem.order_status === 'order-paid' ? (
                            <>
                                <span className="text-brand-neutral-alt-700">Updated On:</span>
                                <span>{OrderItem.last_update}</span>
                            </>
                        ) : (
                            <>
                                <span className="text-brand-neutral-alt-700">Estimated Delivery Date:</span>
                                <span className="font-semibold">{OrderItem.offer?.estimated_due_date}</span>
                            </>
                        )}
                    </div>

                    {OrderItem.order_status === 'to-decide' ? (
                        <div className="flex items-center gap-2">
                            <AlertDialog>
                                <AlertDialogTrigger asChild>
                                    <Button
                                        size="interactions"
                                        variant="destructive"
                                    >
                                        Decline & Cancel Order
                                        <CircleOffIcon />
                                    </Button>
                                </AlertDialogTrigger>
                                <AlertDialogContent>
                                    <AlertDialogHeader>
                                        <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                                        <AlertDialogDescription>
                                            This action cannot be undone. This will permanently delete your account from our servers.
                                        </AlertDialogDescription>
                                    </AlertDialogHeader>
                                    <AlertDialogFooter>
                                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                                        <AlertDialogAction>Continue</AlertDialogAction>
                                    </AlertDialogFooter>
                                </AlertDialogContent>
                            </AlertDialog>

                            <Button
                                className="text-black hover:bg-brand-secondary-300/80"
                                size="interactions"
                                variant="secondary"
                            >
                                Negociate
                                <MessageCircleIcon />
                            </Button>
                            <Button
                                size="interactions"
                                variant="success"
                            >
                                Accept & Pay
                                <CheckIcon strokeWidth={3} />
                            </Button>
                        </div>
                    ) : (
                        <Button
                            className="min-w-48"
                            size="sm"
                            asChild
                        >
                            <Link href="/shop/orders/custom-order/sash-order-id">
                                View Order
                                <ArrowRightIcon strokeWidth={3} />
                            </Link>
                        </Button>
                    )}
                </div>
            </div>
        </>
    );
}
