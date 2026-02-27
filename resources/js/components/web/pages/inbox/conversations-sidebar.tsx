import type { JSX } from 'react';
import { ScrollArea, ScrollAreaViewport } from '@/components/ui/scroll-area';

export default function ConversationsSidebar({ children }: React.ComponentProps<'div'>): JSX.Element {
    return (
        <ScrollArea className="h-full rounded-xl pr-3">
            <ScrollAreaViewport className="border border-brand-neutral-alt-300 bg-brand-neutral-alt-200">
                <div className="flex flex-col gap-3">{children}</div>
            </ScrollAreaViewport>
        </ScrollArea>
    );
}
