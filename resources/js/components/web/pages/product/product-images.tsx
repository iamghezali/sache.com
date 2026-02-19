import 'yet-another-react-lightbox/styles.css';
import 'yet-another-react-lightbox/plugins/counter.css';

import { useState, type JSX } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import Counter from 'yet-another-react-lightbox/plugins/counter';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';

import placeholderImageSrc from '@/assets/placeholder.svg';
import PlaceholderImage from '@/components/ui/placeholderImage';

export default function ProductImages(): JSX.Element {
    const [open, setOpen] = useState(false);
    const [slideIndex, setSlideIndex] = useState(0);

    function OpenInLightbox(index: number) {
        setSlideIndex(index - 1);
        setOpen(true);
    }

    return (
        <>
            <div className="flex gap-8">
                <div className="flex shrink-0 basis-[21%] flex-col gap-3">
                    <div
                        className="relative cursor-zoom-in overflow-hidden rounded-lg bg-neutral-300 pt-[120%]"
                        onClick={() => OpenInLightbox(2)}
                    >
                        <PlaceholderImage />
                    </div>
                    <div
                        className="relative cursor-zoom-in overflow-hidden rounded-lg bg-neutral-300 pt-[120%]"
                        onClick={() => OpenInLightbox(3)}
                    >
                        <PlaceholderImage />
                    </div>
                    <div
                        className="relative cursor-zoom-in overflow-hidden rounded-lg bg-neutral-300 pt-[120%]"
                        onClick={() => OpenInLightbox(4)}
                    >
                        <PlaceholderImage />
                    </div>
                    <div
                        className="relative cursor-zoom-in overflow-hidden rounded-lg bg-neutral-300 pt-[120%]"
                        onClick={() => OpenInLightbox(5)}
                    >
                        <PlaceholderImage />
                    </div>
                </div>

                <div
                    className="relative min-w-0 grow cursor-zoom-in overflow-hidden rounded-[1.75rem] bg-neutral-300"
                    onClick={() => OpenInLightbox(1)}
                >
                    <PlaceholderImage />
                </div>
            </div>

            <Lightbox
                open={open}
                index={slideIndex}
                close={() => setOpen(false)}
                carousel={{ finite: true }}
                controller={{ closeOnPullUp: true, closeOnBackdropClick: true }}
                plugins={[Counter, Zoom]}
                slides={[
                    { src: placeholderImageSrc },
                    { src: placeholderImageSrc },
                    { src: placeholderImageSrc },
                    { src: placeholderImageSrc },
                    { src: placeholderImageSrc },
                ]}
            />
        </>
    );
}
