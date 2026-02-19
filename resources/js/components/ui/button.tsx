import { cva, type VariantProps } from 'class-variance-authority';
import { Slot } from 'radix-ui';
import * as React from 'react';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
    "inline-flex shrink-0 cursor-pointer items-center justify-center gap-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
    {
        variants: {
            variant: {
                default: 'bg-brand-primary-200 text-brand-neutral-1000 hover:bg-brand-neutral-1000/95 hover:text-white',
                destructive:
                    'bg-error-100 text-white hover:bg-error-100/90 focus-visible:ring-error-100/20 dark:bg-error-100/60 dark:focus-visible:ring-error-100/40',
                outline: 'border border-brand-neutral-1000 text-brand-neutral-1000 hover:bg-brand-neutral-1000/95 hover:text-white',
                secondary: 'bg-brand-secondary-300 text-white hover:bg-brand-neutral-1000/95',
                neutral: 'bg-brand-neutral-1000 text-white hover:bg-brand-neutral-1000/95',
                ghost: 'hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50',
                link: 'text-primary underline-offset-4 hover:underline',
            },
            size: {
                default: 'h-12 px-6 py-2',
                sm: 'h-10.75 px-5 text-base font-semibold',
                'icon-md': 'size-10',
                'icon-lg': 'size-12',
                pagination: 'px-4 py-2',
            },
        },
        defaultVariants: {
            variant: 'default',
            size: 'default',
        },
    },
);

function Button({
    className,
    variant = 'default',
    size = 'default',
    asChild = false,
    ...props
}: React.ComponentProps<'button'> &
    VariantProps<typeof buttonVariants> & {
        asChild?: boolean;
    }) {
    const Comp = asChild ? Slot.Root : 'button';

    return (
        <Comp
            className={cn(buttonVariants({ variant, size, className }))}
            data-slot="button"
            data-variant={variant}
            data-size={size}
            {...props}
        />
    );
}

export { Button, buttonVariants };
