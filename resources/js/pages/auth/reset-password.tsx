import { Link } from '@inertiajs/react';
import { ArrowLeftIcon, ArrowRightIcon } from 'lucide-react';
import type { JSX } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import PlaceholderImage from '@/components/ui/placeholderImage';
import WebLayout from '@/layouts/web-layout';

export default function ResetPassword(): JSX.Element {
    return (
        <WebLayout>
            <section className="mt-6 flex gap-5 px-3">
                <div className="w-full grow px-10">
                    <Button
                        className="text-base font-normal"
                        variant="link"
                        size="inline"
                        asChild
                    >
                        <Link href="/login">
                            <ArrowLeftIcon
                                className="size-6"
                                strokeWidth={1.5}
                            />
                            Back to Sign in
                        </Link>
                    </Button>

                    <div className="mt-6">
                        <h1 className="font-rubik text-[2rem]/tight font-semibold text-brand-neutral-1000">Forget your Password?</h1>
                        <span className="mt-2 block text-lg text-pretty text-brand-neutral-1000">
                            Enter your email address and we’ll send you a verification code.
                        </span>

                        <div className="mt-6">
                            <form
                                className="flex flex-col gap-6"
                                action=""
                            >
                                <Input placeholder="Enter your email" />

                                <Button
                                    className="w-full justify-between px-4 uppercase"
                                    type="button"
                                    variant="neutral"
                                    asChild
                                >
                                    <Link href="/verification-code">
                                        Send Code
                                        <ArrowRightIcon />
                                    </Link>
                                </Button>
                            </form>
                        </div>
                    </div>
                </div>

                <div className="shrink-0">
                    <div className="relative h-138 w-170 overflow-hidden rounded-2xl bg-red-100">
                        <PlaceholderImage />
                    </div>
                </div>
            </section>
        </WebLayout>
    );
}
