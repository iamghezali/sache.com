import { PaperclipIcon, SendHorizontalIcon } from 'lucide-react';
import { type JSX } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import ChatBubble from '@/components/web/pages/inbox/chat-bubble';
import ConversationButton from '@/components/web/pages/inbox/conversation-button';
import ConversationContainer from '@/components/web/pages/inbox/conversation-container';
import ConversationsSidebar from '@/components/web/pages/inbox/conversations-sidebar';
import WebLayout from '@/layouts/web-layout';

export default function Inbox(): JSX.Element {
    return (
        <WebLayout>
            <div className="mt-7">
                <h1 className="text-6xl/tight font-bold">Messages</h1>

                <div className="mt-5 flex h-[75vh] gap-2">
                    <div className="basis-66">
                        <ConversationsSidebar>
                            <ConversationButton
                                label="Abbaya Female 2026 Style"
                                isCurrent
                            />
                            <ConversationButton label="Tshirt New life" />
                            <ConversationButton label="Fur Jacket Order" />
                        </ConversationsSidebar>
                    </div>

                    <div className="flex-1">
                        <div className="flex h-full flex-col gap-2">
                            <ConversationContainer>
                                <ChatBubble
                                    type="text"
                                    content="Hi, we have received your order and it is on production and will be done in the next 2 days, and here is a glance. Inshallah"
                                    direction="received"
                                />

                                <ChatBubble
                                    type="media"
                                    content="https://picsum.photos/240/312/?random=1"
                                    direction="received"
                                />

                                <ChatBubble
                                    type="text"
                                    content="Alright Thank you for the update"
                                    direction="sent"
                                />
                            </ConversationContainer>

                            <div className="w-full">
                                <form action="">
                                    <div className="relative">
                                        <div className="absolute flex h-full items-end p-2">
                                            <Button
                                                size="icon-md"
                                                variant="ghost"
                                                type="button"
                                            >
                                                <PaperclipIcon />
                                            </Button>
                                        </div>

                                        <Textarea
                                            className="max-h-24 min-h-14 resize-none border-brand-neutral-alt-500 bg-brand-neutral-alt-300 px-14 py-4"
                                            placeholder="Message"
                                        />

                                        <div className="absolute top-0 right-0 flex h-full items-end p-2">
                                            <Button
                                                className="text-brand-primary-300"
                                                size="icon-md"
                                                variant="ghost"
                                                type="button"
                                            >
                                                <SendHorizontalIcon
                                                    className="size-6 fill-brand-primary-300"
                                                    strokeWidth={0}
                                                />
                                            </Button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </WebLayout>
    );
}
