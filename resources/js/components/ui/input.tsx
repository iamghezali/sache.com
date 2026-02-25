import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';

import { cn } from '@/lib/utils';

const inputVariants = cva('', {
    variants: {
        variant: {
            default: [
                'h-12 w-full min-w-0 rounded-lg border border-brand-neutral-1000 bg-transparent px-4 py-1 text-base shadow-xs transition-all outline-none disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50',
                'focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50',
                'aria-invalid:border-destructive aria-invalid:ring-destructive/20',
            ],
        },
    },

    defaultVariants: {
        variant: 'default',
    },
});

function Input({ className, variant = 'default', type, ...props }: React.ComponentProps<'input'> & VariantProps<typeof inputVariants>) {
    return (
        <input
            className={cn(inputVariants({ variant }), className)}
            type={type}
            data-slot="input"
            {...props}
        />
    );
}

export { Input };
