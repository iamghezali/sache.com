import type { JSX } from 'react';
import { ScrollArea, ScrollAreaViewport } from '@/components/ui/scroll-area';

export default function ConversationContainer({ children }: React.ComponentProps<'div'>): JSX.Element {
    return (
        <ScrollArea className="min-h-0 flex-1 pr-3">
            <ScrollAreaViewport>
                <div className="flex flex-col gap-4">{children}</div>
            </ScrollAreaViewport>
        </ScrollArea>
    );
}
