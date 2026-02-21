import { CheckIcon } from 'lucide-react';
import { Checkbox as CheckboxPrimitive } from 'radix-ui';
import * as React from 'react';

import { cn } from '@/lib/utils';

function Checkbox({ className, ...props }: React.ComponentProps<typeof CheckboxPrimitive.Root>) {
    return (
        <CheckboxPrimitive.Root
            className={cn(
                'peer size-4.5 shrink-0 rounded-xs border-2 border-brand-neutral-1000 transition-shadow outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 data-[state=checked]:border-primary data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground',
                className,
            )}
            data-slot="checkbox"
            {...props}
        >
            <CheckboxPrimitive.Indicator
                className="grid place-content-center text-current transition-none"
                data-slot="checkbox-indicator"
            >
                <CheckIcon
                    className="size-3.25"
                    strokeWidth={3}
                />
            </CheckboxPrimitive.Indicator>
        </CheckboxPrimitive.Root>
    );
}

export { Checkbox };
