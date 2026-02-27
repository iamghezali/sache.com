import { ScrollArea as ScrollAreaPrimitive } from 'radix-ui';
import * as React from 'react';

import { cn } from '@/lib/utils';

function ScrollArea({ className, children, ...props }: React.ComponentProps<typeof ScrollAreaPrimitive.Root>) {
    return (
        <ScrollAreaPrimitive.Root
            className={cn('relative', className)}
            data-slot="scroll-area"
            {...props}
        >
            {children}
            <ScrollBar />
            <ScrollAreaPrimitive.Corner />
        </ScrollAreaPrimitive.Root>
    );
}

function ScrollAreaViewport({ className, children }: React.ComponentProps<typeof ScrollAreaPrimitive.Viewport>) {
    return (
        <ScrollAreaPrimitive.Viewport
            className={cn(
                'flex size-full rounded-[inherit] transition-[color,box-shadow] outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:outline-1',
                className,
            )}
            data-slot="scroll-area-viewport"
        >
            {children}
        </ScrollAreaPrimitive.Viewport>
    );
}

function ScrollBar({ className, orientation = 'vertical', ...props }: React.ComponentProps<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>) {
    return (
        <ScrollAreaPrimitive.ScrollAreaScrollbar
            className={cn(
                'flex touch-none p-px transition-colors select-none',
                orientation === 'vertical' && 'h-full w-2.5 border-l border-l-transparent',
                orientation === 'horizontal' && 'h-2.5 flex-col border-t border-t-transparent',
                className,
            )}
            data-slot="scroll-area-scrollbar"
            orientation={orientation}
            {...props}
        >
            <ScrollAreaPrimitive.ScrollAreaThumb
                className="relative flex-1 rounded-full bg-brand-neutral-alt-400"
                data-slot="scroll-area-thumb"
            />
        </ScrollAreaPrimitive.ScrollAreaScrollbar>
    );
}

export { ScrollArea, ScrollAreaViewport, ScrollBar };
