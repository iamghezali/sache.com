import { cva, type VariantProps } from 'class-variance-authority';
import type { JSX } from 'react';
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

interface OrdersBadgeProps {
    children?: React.ReactNode;
}

const orderbadgeVariants = cva('h-10 min-w-48 rounded-xl border px-4 text-sm font-normal text-black', {
    variants: {
        variant: {
            'white': 'border-[#D1D1D1] bg-[#F7F7F7]',
            'orange': 'border-[#C25406] bg-[#F98F43]',
            'orange-light': 'border-[#D1B598] bg-[#FFEDD9]',
            'blue': 'border-[#4378A9] bg-[#9DBCD8]',
            'blue-light': 'border-[#98D1C3] bg-[#D9FFF2]',
        },
    },

    defaultVariants: {
        variant: 'white',
    },
});

export default function OrdersBadge({ variant = 'white', children }: OrdersBadgeProps & VariantProps<typeof orderbadgeVariants>): JSX.Element {
    return <Badge className={cn(orderbadgeVariants({ variant }))}>{children}</Badge>;
}

export type OrderbadgeVariants = VariantProps<typeof orderbadgeVariants>;
