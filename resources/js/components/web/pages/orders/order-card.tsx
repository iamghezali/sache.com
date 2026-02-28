import { Link } from '@inertiajs/react';
import { CheckIcon, CircleOffIcon, MessageCircleIcon } from 'lucide-react';
import type { JSX } from 'react';
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
                            <Button
                                className="w-60"
                                variant="destructive"
                                size="interactions"
                            >
                                Decline & Cancel Order
                                <CircleOffIcon />
                            </Button>

                            <Button
                                className="w-60 text-black hover:bg-brand-secondary-300/80"
                                variant="secondary"
                                size="interactions"
                            >
                                Negociate
                                <MessageCircleIcon />
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
                            <Button size="sm">View Order</Button>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}
