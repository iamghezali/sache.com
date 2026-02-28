import type { JSX } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import type { CO_Order, CO_Order_Offer, RTW_Order } from '@/components/web/pages/orders';
import EmptyOrders from '@/components/web/pages/orders/empty-orders';
import OrderCard from '@/components/web/pages/orders/order-card';
import WebLayout from '@/layouts/web-layout';

type OrdersType = RTW_Order | CO_Order | CO_Order_Offer;

const Orders: OrdersType[] = [
    {
        id: '1043',
        type: 'custom-order',
        title: 'Abbaya Female 2026 style',
        status: 'to-decide',
        updated_on: '28/03/2026',

        offer: {
            price: '18,500',
            estimated_date: '29/03/2026',
        },
    },

    {
        id: '2350',
        type: 'ready-to-wear',
        title: 'Order Sach 1',
        status: 'processing',
        updated_on: '24/03/2026',
    },

    {
        id: '7042',
        type: 'custom-order',
        title: 'Isdal Female Summer',
        status: 'confirmed',
        updated_on: '25/03/2026',
    },
];

export default function OrdersList(): JSX.Element {
    const params = new URLSearchParams(window.location.search);
    const itemExist = params.get('itemExist');

    return (
        <WebLayout>
            <section>
                <div className="mt-12">
                    <h1 className="text-7xl font-bold text-brand-neutral-1000">My Orders</h1>

                    {itemExist !== null ? (
                        <div className="mt-7">
                            <Tabs
                                className="gap-6"
                                defaultValue="all"
                            >
                                <TabsList>
                                    <TabsTrigger value="all">All</TabsTrigger>
                                    <TabsTrigger value="active">Active</TabsTrigger>
                                    <TabsTrigger value="delivered">Delivered</TabsTrigger>
                                    <TabsTrigger value="custom">Custom</TabsTrigger>
                                </TabsList>

                                <TabsContent value="all">
                                    <div className="flex flex-col gap-5">
                                        {Orders.map((order, i) => (
                                            <OrderCard
                                                key={`order-${i}-${order.id}`}
                                                orderData={order}
                                            />
                                        ))}
                                    </div>
                                </TabsContent>
                            </Tabs>
                        </div>
                    ) : (
                        <EmptyOrders />
                    )}
                </div>
            </section>
        </WebLayout>
    );
}
