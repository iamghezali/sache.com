import type { JSX } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import CoOrderItemCard from '@/components/web/pages/orders/co-order-item-card';
import EmptyOrders from '@/components/web/pages/orders/empty-orders';
import RtwOrderItemCard from '@/components/web/pages/orders/rtw-order-item-card';
import WebLayout from '@/layouts/web-layout';

export default function OrdersList(): JSX.Element {
    return (
        <WebLayout>
            <section>
                <div className="mt-12">
                    <h1 className="text-7xl font-bold text-brand-neutral-1000">My Orders</h1>

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
                                <div className="flex flex-col gap-6">
                                    <CoOrderItemCard
                                        OrderItem={{
                                            id: '1',
                                            title: 'Order Item 1',
                                            order_id: '2030',
                                            order_type: 'custom_order',
                                            order_status: 'to-decide',
                                            last_update: '13/03/2026',
                                            offer: {
                                                price: '13,000',
                                                estimated_due_date: '12/03/2026',
                                            },
                                        }}
                                    />

                                    <RtwOrderItemCard
                                        OrderItem={{
                                            id: '2',
                                            title: 'Order Item 2',
                                            order_id: '3030',
                                            order_type: 'ready-to-wear',
                                            order_status: 'processing',
                                            last_update: '13/03/2026',
                                        }}
                                    />
                                </div>
                            </TabsContent>

                            <TabsContent value="active">Active.</TabsContent>

                            <TabsContent value="delivered">
                                <EmptyOrders message="Your don't have delivered items" />
                            </TabsContent>
                            <TabsContent value="custom"></TabsContent>
                        </Tabs>
                    </div>
                </div>
            </section>
        </WebLayout>
    );
}
