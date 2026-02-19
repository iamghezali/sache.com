import { cva, type VariantProps } from 'class-variance-authority';
import { Toggle as TogglePrimitive } from 'radix-ui';
import * as React from 'react';

import { cn } from '@/lib/utils';

const toggleVariants = cva(
    "inline-flex shrink-0 cursor-pointer items-center justify-center rounded-lg transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
    {
        variants: {
            variant: {
                neutral: [
                    'bg-brand-neutral-1000 text-white hover:bg-brand-neutral-1000/95',
                    'data-[state=on]:[&_svg]:fill-white data-[state=on]:[&_svg]:text-white',
                ],
            },
            size: {
                icon: 'size-12',
            },
        },
        defaultVariants: {
            variant: 'neutral',
        },
    },
);

function Toggle({ className, variant, size, ...props }: React.ComponentProps<typeof TogglePrimitive.Root> & VariantProps<typeof toggleVariants>) {
    return (
        <TogglePrimitive.Root
            className={cn(toggleVariants({ variant, size, className }))}
            data-slot="toggle"
            {...props}
        />
    );
}

export { Toggle, toggleVariants };
