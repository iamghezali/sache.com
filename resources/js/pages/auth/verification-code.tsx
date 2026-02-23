import { ArrowRightIcon } from 'lucide-react';
import { type JSX } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import PlaceholderImage from '@/components/ui/placeholderImage';
import useCountdown from '@/hooks/useCountdown';
import WebLayout from '@/layouts/web-layout';

export default function ResetPassword(): JSX.Element {
    const { secondsLeft, countDown } = useCountdown();

    function handleClick() {
        countDown(30);
    }

    return (
        <WebLayout>
            <section className="mt-6 flex gap-5 px-3">
                <div className="w-full grow px-10">
                    <div>
                        <h1 className="font-rubik text-[2rem]/tight font-semibold text-brand-neutral-1000">Enter Verification Code</h1>
                        <span className="mt-2 block text-lg text-pretty text-brand-neutral-1000">
                            We sent a 6-digit code to <br /> s***@gmail.com.
                        </span>

                        <div className="mt-6">
                            <form
                                className="flex flex-col gap-6"
                                action=""
                            >
                                <Input placeholder="Enter your 6-digit code" />

                                <div className="flex flex-col gap-3">
                                    <Button
                                        className="w-full justify-between px-4 uppercase"
                                        type="button"
                                        variant="neutral"
                                    >
                                        Verify Code
                                        <ArrowRightIcon />
                                    </Button>

                                    <Button
                                        className="w-full justify-between bg-brand-neutral-alt-400 px-4 text-brand-neutral-alt-600 uppercase hover:bg-brand-neutral-alt-400/80"
                                        type="button"
                                        variant="secondary"
                                        onClick={handleClick}
                                        disabled={secondsLeft > 0 ? true : false}
                                    >
                                        Resend Code
                                        {secondsLeft !== 0 && <span>{secondsLeft}</span>}
                                    </Button>

                                    <Button
                                        className="w-full justify-between px-4 uppercase"
                                        type="button"
                                        variant="outline"
                                    >
                                        Change Email
                                    </Button>
                                </div>
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
