import { cva, type VariantProps } from 'class-variance-authority';
import type { JSX } from 'react';

import { cn } from '@/lib/utils';

const chatBubbleVariants = cva('max-w-120 rounded-xl px-3 py-1 leading-5', {
    variants: {
        direction: {
            received: 'bg-brand-neutral-alt-300',
            sent: 'ml-auto bg-brand-primary-200',
        },
    },
});

interface ChatBubbleInterface {
    type: 'text' | 'media';
    content: string;
}

export default function ChatBubble({ type, content, direction }: VariantProps<typeof chatBubbleVariants> & ChatBubbleInterface): JSX.Element {
    return (
        <div className="flex">
            <div className={cn(chatBubbleVariants({ direction }))}>
                <div>
                    {type === 'text' && (
                        <>
                            <span>{content}</span>
                        </>
                    )}

                    {type === 'media' && (
                        <div className="overflow-hidden rounded-md">
                            <img
                                className="max-w-66"
                                src={content}
                                alt=""
                            />
                        </div>
                    )}
                </div>

                <div className="mt-1 flex justify-end">
                    <span className="block text-xs">18:12</span>
                </div>
            </div>
        </div>
    );
}
