import type { OrderbadgeVariants } from '@/components/web/pages/orders/orders-badge';

interface BaseOrder {
    id: string;
    title: string;
    updated_on: string;
}

interface RTW_Order extends BaseOrder {
    type: 'ready-to-wear';
    status: 'processing' | 'on-delivery' | 'delivered';
}

interface CO_Order extends BaseOrder {
    type: 'custom-order';
    status: 'confirmed' | 'production' | 'on-delivery' | 'delivered';
}

interface CO_Order_Offer extends Omit<CO_Order, 'status'> {
    status: 'to-decide';

    offer: {
        price: string;
        estimated_date: string;
    };
}

type StatusTypes = RTW_Order['status'] | CO_Order['status'] | CO_Order_Offer['status'];

type StatusLabelsConfig = {
    label: string;
    variant: OrderbadgeVariants['variant'];
};

const statusLabels: Record<StatusTypes, StatusLabelsConfig> = {
    'processing': {
        label: 'Processing',
        variant: 'blue-light',
    },
    'to-decide': {
        label: 'To Decide',
        variant: 'white',
    },
    'confirmed': {
        label: 'Confirmed',
        variant: 'white',
    },
    'production': {
        label: 'Production',
        variant: 'white',
    },
    'on-delivery': {
        label: 'On Delivery',
        variant: 'white',
    },
    'delivered': {
        label: 'Delivered',
        variant: 'white',
    },
};

export type { RTW_Order, CO_Order, CO_Order_Offer };
export { statusLabels };
