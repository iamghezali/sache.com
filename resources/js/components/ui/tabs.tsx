import { cva, type VariantProps } from 'class-variance-authority';
import { Tabs as TabsPrimitive } from 'radix-ui';
import * as React from 'react';

import { cn } from '@/lib/utils';

function Tabs({ className, orientation = 'horizontal', ...props }: React.ComponentProps<typeof TabsPrimitive.Root>) {
    return (
        <TabsPrimitive.Root
            className={cn('group/tabs flex gap-2 data-[orientation=horizontal]:flex-col', className)}
            data-slot="tabs"
            data-orientation={orientation}
            orientation={orientation}
            {...props}
        />
    );
}

const tabsListVariants = cva(
    'group/tabs-list inline-flex w-fit items-center justify-center text-muted-foreground group-data-[orientation=vertical]/tabs:h-fit group-data-[orientation=vertical]/tabs:flex-col data-[variant=line]:rounded-none',
    {
        variants: {
            variant: {
                default: 'gap-5',
                line: 'gap-1 bg-transparent',
                text: 'px-0 py-2',
            },
        },
        defaultVariants: {
            variant: 'default',
        },
    },
);

function TabsList({
    className,
    variant = 'default',
    ...props
}: React.ComponentProps<typeof TabsPrimitive.List> & VariantProps<typeof tabsListVariants>) {
    return (
        <TabsPrimitive.List
            className={cn(tabsListVariants({ variant }), className)}
            data-slot="tabs-list"
            data-variant={variant}
            {...props}
        />
    );
}

function TabsTrigger({ className, ...props }: React.ComponentProps<typeof TabsPrimitive.Trigger>) {
    return (
        <TabsPrimitive.Trigger
            className={cn(
                "relative inline-flex h-11 min-w-29 flex-1 items-center justify-center gap-1.5 rounded-2xl border border-brand-neutral-1000 px-6 py-1 whitespace-nowrap text-foreground/60 transition-all group-data-[orientation=vertical]/tabs:w-full group-data-[orientation=vertical]/tabs:justify-start hover:text-foreground focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:outline-1 focus-visible:outline-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
                'group-data-[variant=line]/tabs-list:bg-transparent group-data-[variant=line]/tabs-list:data-[state=active]:bg-transparent',
                'data-[state=active]:border-transparent data-[state=active]:bg-brand-primary-200 data-[state=active]:text-brand-neutral-1000',
                'after:absolute after:bg-foreground after:opacity-0 after:transition-opacity group-data-[orientation=horizontal]/tabs:after:inset-x-0 group-data-[orientation=horizontal]/tabs:after:-bottom-1.25 group-data-[orientation=horizontal]/tabs:after:h-0.5 group-data-[orientation=vertical]/tabs:after:inset-y-0 group-data-[orientation=vertical]/tabs:after:-right-1 group-data-[orientation=vertical]/tabs:after:w-0.5 group-data-[variant=line]/tabs-list:data-[state=active]:after:opacity-100',
                'group-data-[variant=text]/tabs-list:h-auto group-data-[variant=text]/tabs-list:min-w-auto group-data-[variant=text]/tabs-list:rounded-lg group-data-[variant=text]/tabs-list:border-transparent group-data-[variant=text]/tabs-list:px-0 group-data-[variant=text]/tabs-list:py-0 group-data-[variant=text]/tabs-list:data-[state=active]:bg-transparent group-data-[variant=text]/tabs-list:data-[state=active]:text-brand-tertiary-300',
                className,
            )}
            data-slot="tabs-trigger"
            {...props}
        />
    );
}

function TabsContent({ className, ...props }: React.ComponentProps<typeof TabsPrimitive.Content>) {
    return (
        <TabsPrimitive.Content
            className={cn('flex-1 outline-none', className)}
            data-slot="tabs-content"
            {...props}
        />
    );
}

export { Tabs, TabsList, TabsTrigger, TabsContent, tabsListVariants };
