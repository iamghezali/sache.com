import type { JSX } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import PlaceholderImage from '@/components/ui/placeholderImage';
import WebLayout from '@/layouts/web-layout';
import { Link } from '@inertiajs/react';

export default function NewPassword(): JSX.Element {
    return (
        <WebLayout>
            <section className="mt-6 flex gap-5 px-3">
                <div className="w-full grow px-10">
                    <div>
                        <h1 className="font-rubik text-[2rem]/tight font-semibold text-brand-neutral-1000">Create New Password</h1>
                        <span className="mt-2 block text-lg text-pretty text-brand-neutral-1000">
                            Create a new password for your account <br /> s***@email.com.
                        </span>

                        <div className="mt-6">
                            <form
                                className="flex flex-col gap-6"
                                action=""
                            >
                                <Input placeholder="New Password" />
                                <Input placeholder="Confirm Password" />

                                <Button
                                    className="w-full justify-between px-4 uppercase"
                                    type="button"
                                    variant="neutral"
                                    asChild
                                >
                                    <Link href="/reset-password/success">Update Password</Link>
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
