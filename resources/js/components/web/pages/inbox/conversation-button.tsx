import type { JSX } from 'react';
import PlaceholderImage from '@/components/ui/placeholderImage';
import { cn } from '@/lib/utils';

interface ConversationButtonInterface {
    isCurrent?: boolean;
    label: string;
}

export default function ConversationButton({ isCurrent, label }: ConversationButtonInterface): JSX.Element {
    return (
        <button className={cn('flex w-full items-center gap-2 p-3', { 'bg-brand-neutral-alt-300': isCurrent })}>
            <span className="shrink-0 basis-10">
                <span className="relative block overflow-hidden rounded-md bg-brand-neutral-alt-400 pt-[130%]">
                    <PlaceholderImage />
                </span>
            </span>
            <span className="text-left">{label}</span>
        </button>
    );
}
