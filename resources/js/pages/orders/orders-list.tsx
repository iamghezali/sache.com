import type { JSX } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import WebLayout from '@/layouts/web-layout';

export default function OrdersList(): JSX.Element {
    return (
        <WebLayout>
            <section>
                <div className="mt-12">
                    <h1 className="text-7xl font-bold text-brand-neutral-1000">My Orders</h1>

                    <div className="mt-7">
                        <Tabs defaultValue="account">
                            <TabsList>
                                <TabsTrigger value="all">All</TabsTrigger>
                                <TabsTrigger value="active">Active</TabsTrigger>
                                <TabsTrigger value="delivered">Delivered</TabsTrigger>
                                <TabsTrigger value="custom">Custom</TabsTrigger>
                            </TabsList>

                            <TabsContent value="all">All</TabsContent>
                            <TabsContent value="active">Active.</TabsContent>
                            <TabsContent value="delivered">Delivered.</TabsContent>
                            <TabsContent value="custom">Custom.</TabsContent>
                        </Tabs>
                    </div>
                </div>
            </section>
        </WebLayout>
    );
}
