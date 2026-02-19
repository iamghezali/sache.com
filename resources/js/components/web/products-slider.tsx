import type { JSX } from 'react';
import { Carousel, CarouselContent, CarouselDots, CarouselItem, CarouselNext, CarouselPrevious, CarouselViewport } from '@/components/ui/carousel';
import ProductCard from '@/components/web/product-card';

export default function ProductsSlider(): JSX.Element {
    return (
        <Carousel
            opts={{
                align: 'start',
            }}
        >
            <div className="flex items-center justify-between">
                <h2 className="text-5xl font-semibold text-brand-neutral-1000">You may also like</h2>

                <div className="flex gap-4">
                    <CarouselPrevious />
                    <CarouselNext />
                </div>
            </div>

            <div className="mt-8">
                <CarouselViewport>
                    <CarouselContent>
                        {Array.from({ length: 7 }).map((_, i) => (
                            <CarouselItem
                                className="basis-1/4"
                                key={`products-slider-card-${i}`}
                            >
                                <ProductCard />
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </CarouselViewport>
            </div>
            <CarouselDots />
        </Carousel>
    );
}
