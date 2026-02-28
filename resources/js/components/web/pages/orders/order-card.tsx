import { Link } from '@inertiajs/react';
import { ArrowRightIcon, CheckIcon, CircleOffIcon, MessageCircleIcon } from 'lucide-react';
import { type JSX } from 'react';

import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from '@/components/ui/alert-dialog';

import { Button } from '@/components/ui/button';
import { statusLabels, type CO_Order, type CO_Order_Offer, type RTW_Order } from '@/components/web/pages/orders';
import OrdersBadge from '@/components/web/pages/orders/orders-badge';

interface OrderCardInterface {
    orderData: RTW_Order | CO_Order | CO_Order_Offer;
}

export default function OrderCard({ orderData }: OrderCardInterface): JSX.Element {
    return (
        <div className="flex flex-col gap-6 rounded-2xl border border-brand-neutral-alt-500 px-6.5 py-4.5">
            <div className="flex items-center justify-between">
                <div>
                    <span className="text-brand-neutral-alt-700">Order ID: </span>
                    <span>#SASH-{orderData.id}</span>
                </div>

                <div>
                    <span className="text-brand-neutral-alt-700">Order Type: </span>
                    <span>
                        {orderData.type === 'ready-to-wear' && 'Ready-to-Wear'}
                        {orderData.type === 'custom-order' && 'Custom Order'}
                    </span>
                </div>
            </div>

            <div className="flex items-center justify-between">
                <h2 className="text-[2rem] font-bold hover:underline">
                    <Link href="">{orderData.title}</Link>
                </h2>

                <div>
                    {orderData.status === 'to-decide' ? (
                        <span className="text-[1.625rem] font-semibold">{orderData.offer.price} DZD</span>
                    ) : (
                        <OrdersBadge variant={statusLabels[orderData.status].variant}>{statusLabels[orderData.status].label}</OrdersBadge>
                    )}
                </div>
            </div>

            <div className="flex items-center justify-between">
                <div>
                    {orderData.status === 'to-decide' ? (
                        <>
                            <span className="text-brand-neutral-alt-700">Estimated Delivery Date: </span>
                            <span className="font-bold">{orderData.offer.estimated_date}</span>
                        </>
                    ) : (
                        <>
                            <span className="text-brand-neutral-alt-700">Updated On: </span>
                            <span>{orderData.updated_on}</span>
                        </>
                    )}
                </div>

                <div>
                    {orderData.status === 'to-decide' ? (
                        <div className="flex gap-2">
                            <AlertDialog>
                                <AlertDialogTrigger asChild>
                                    <Button
                                        className="w-60"
                                        variant="destructive"
                                        size="interactions"
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
                                        <AlertDialogAction variant="destructive">
                                            Decline & Cancel Order
                                            <CircleOffIcon />
                                        </AlertDialogAction>
                                    </AlertDialogFooter>
                                </AlertDialogContent>
                            </AlertDialog>

                            <Button
                                className="w-60 text-black hover:bg-brand-secondary-300/80"
                                variant="secondary"
                                size="interactions"
                                asChild
                            >
                                <Link href="/inbox">
                                    Negociate
                                    <MessageCircleIcon />
                                </Link>
                            </Button>

                            <Button
                                className="w-60"
                                variant="success"
                                size="interactions"
                            >
                                Accept & Pay
                                <CheckIcon strokeWidth={3} />
                            </Button>
                        </div>
                    ) : (
                        <>
                            <Button
                                size="sm"
                                asChild
                            >
                                <Link href="">
                                    View Order
                                    <ArrowRightIcon />
                                </Link>
                            </Button>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}
