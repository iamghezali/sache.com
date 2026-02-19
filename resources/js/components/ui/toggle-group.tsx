import { cva, type VariantProps } from 'class-variance-authority';
import { ToggleGroup as ToggleGroupPrimitive } from 'radix-ui';
import * as React from 'react';

import { cn } from '@/lib/utils';

const toggleVariants = cva(
    'shrink-0 cursor-pointer transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none',
    {
        variants: {
            variant: {
                'categories-filter': [
                    'rounded-xl bg-brand-neutral-alt-500 px-4 py-3 text-xs font-medium text-white hover:bg-brand-neutral-1000/90 disabled:opacity-50',
                    'data-[state=on]:bg-brand-neutral-1000',
                ],

                'sizes-filter': [
                    'size-12 rounded-lg bg-brand-shade-white text-sm font-medium text-brand-neutral-1000 hover:bg-brand-neutral-1000/90 hover:text-white disabled:bg-brand-neutral-200 disabled:text-brand-neutral-500',
                    'data-[state=on]:bg-brand-neutral-1000 data-[state=on]:text-white',
                ],

                'sizes-filter-lg': [
                    'h-12 flex-1 rounded-lg bg-brand-shade-white text-sm font-medium text-brand-neutral-1000 hover:bg-brand-neutral-1000/90 hover:text-white disabled:bg-brand-neutral-200 disabled:text-brand-neutral-500',
                    'data-[state=on]:bg-brand-neutral-1000 data-[state=on]:text-white',
                ],

                'colors-filter': ['rounded-lg ring-3 ring-transparent', 'data-[state=on]:ring-brand-neutral-1000'],
            },
        },
        defaultVariants: {
            variant: 'sizes-filter',
        },
    },
);

const ToggleGroupContext = React.createContext<VariantProps<typeof toggleVariants>>({
    variant: 'sizes-filter',
});

function ToggleGroup({
    className,
    variant,
    children,
    ...props
}: React.ComponentProps<typeof ToggleGroupPrimitive.Root> &
    VariantProps<typeof toggleVariants> & {
        spacing?: number;
    }) {
    return (
        <ToggleGroupPrimitive.Root
            className={cn('', className)}
            data-slot="toggle-group"
            data-variant={variant}
            {...props}
        >
            <ToggleGroupContext.Provider value={{ variant }}>{children}</ToggleGroupContext.Provider>
        </ToggleGroupPrimitive.Root>
    );
}

function ToggleGroupItem({
    className,
    children,
    variant,
    ...props
}: React.ComponentProps<typeof ToggleGroupPrimitive.Item> & VariantProps<typeof toggleVariants>) {
    const context = React.useContext(ToggleGroupContext);

    return (
        <ToggleGroupPrimitive.Item
            className={cn(
                toggleVariants({
                    variant: context.variant || variant,
                }),

                className,
            )}
            data-slot="toggle-group-item"
            data-variant={context.variant || variant}
            {...props}
        >
            {children}
        </ToggleGroupPrimitive.Item>
    );
}

export { ToggleGroup, ToggleGroupItem };
