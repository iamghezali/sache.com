import type { JSX } from 'react';
import PlaceholderImage from '@/components/ui/placeholderImage';
import ReviewStars from '@/components/web/pages/welcome/review-stars';

export default function ReviewCard(): JSX.Element {
    return (
        <>
            <div className="rounded-[1.25rem] bg-brand-shade-white p-8">
                <div className="flex justify-between gap-2">
                    <div>
                        <span className="text-2xl/tight font-semibold text-brand-neutral-1000">Good Quality</span>
                        <p className="mt-2 font-light text-brand-neutral-1000">I highly recommend shopping from sach.</p>
                    </div>
                    <div className="relative size-16 overflow-hidden rounded-full bg-neutral-100">
                        <PlaceholderImage />
                    </div>
                </div>

                <div className="mt-1 flex items-center gap-1">
                    <ReviewStars />
                    <span className="leading-4 text-brand-neutral-1000">5.0</span>
                </div>
            </div>
        </>
    );
}
