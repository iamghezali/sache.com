import useEmblaCarousel, { type UseEmblaCarouselType } from 'embla-carousel-react';
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';
import * as React from 'react';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

type CarouselApi = UseEmblaCarouselType[1];
type UseCarouselParameters = Parameters<typeof useEmblaCarousel>;
type CarouselOptions = UseCarouselParameters[0];
type CarouselPlugin = UseCarouselParameters[1];

type CarouselProps = {
    opts?: CarouselOptions;
    plugins?: CarouselPlugin;
    orientation?: 'horizontal' | 'vertical';
    setApi?: (api: CarouselApi) => void;
};

type CarouselContextProps = {
    carouselRef: ReturnType<typeof useEmblaCarousel>[0];
    api: ReturnType<typeof useEmblaCarousel>[1];
    scrollPrev: () => void;
    scrollNext: () => void;
    canScrollPrev: boolean;
    canScrollNext: boolean;
    goTo: (index: number) => void;
    scrollSnaps: number[] | undefined;
    selectedSnap: number | undefined;
} & CarouselProps;

const CarouselContext = React.createContext<CarouselContextProps | null>(null);

function useCarousel() {
    const context = React.useContext(CarouselContext);

    if (!context) {
        throw new Error('useCarousel must be used within a <Carousel />');
    }

    return context;
}

function Carousel({ orientation = 'horizontal', opts, setApi, plugins, className, children, ...props }: React.ComponentProps<'div'> & CarouselProps) {
    const [carouselRef, api] = useEmblaCarousel(
        {
            ...opts,
            axis: orientation === 'horizontal' ? 'x' : 'y',
        },
        plugins,
    );
    const [canScrollPrev, setCanScrollPrev] = React.useState(false);
    const [canScrollNext, setCanScrollNext] = React.useState(false);

    const [scrollSnaps, setScrollSnaps] = React.useState<number[] | undefined>([]);
    const [selectedSnap, setSelectedSnap] = React.useState<number | undefined>(0);

    const onSelect = React.useCallback((api: CarouselApi) => {
        if (!api) return;
        setCanScrollPrev(api.canScrollPrev());
        setCanScrollNext(api.canScrollNext());
    }, []);

    const scrollPrev = React.useCallback(() => {
        api?.scrollPrev();
    }, [api]);

    const scrollNext = React.useCallback(() => {
        api?.scrollNext();
    }, [api]);

    const goTo = React.useCallback(
        (index: number) => {
            api?.scrollTo(index);
        },
        [api],
    );

    const setupSnaps = React.useCallback((api: CarouselApi) => {
        setScrollSnaps(api?.scrollSnapList());
    }, []);

    const setActiveSnap = React.useCallback((api: CarouselApi) => {
        setSelectedSnap(api?.selectedScrollSnap());
    }, []);

    const handleKeyDown = React.useCallback(
        (event: React.KeyboardEvent<HTMLDivElement>) => {
            if (event.key === 'ArrowLeft') {
                event.preventDefault();
                scrollPrev();
            } else if (event.key === 'ArrowRight') {
                event.preventDefault();
                scrollNext();
            }
        },
        [scrollPrev, scrollNext],
    );

    React.useEffect(() => {
        if (!api || !setApi) return;
        setApi(api);
    }, [api, setApi]);

    React.useEffect(() => {
        if (!api) return;
        onSelect(api);

        setupSnaps(api);
        setActiveSnap(api);

        api.on('reInit', onSelect);
        api.on('select', onSelect);

        api.on('reInit', setupSnaps);
        api.on('reInit', setActiveSnap);
        api.on('select', setActiveSnap);

        return () => {
            api?.off('select', onSelect);
        };
    }, [api, onSelect, setupSnaps, setActiveSnap]);

    return (
        <CarouselContext.Provider
            value={{
                carouselRef,
                api: api,
                opts,
                orientation: orientation || (opts?.axis === 'y' ? 'vertical' : 'horizontal'),
                scrollPrev,
                scrollNext,
                canScrollPrev,
                canScrollNext,
                scrollSnaps,
                selectedSnap,
                goTo,
            }}
        >
            <div
                className={cn('relative', className)}
                onKeyDownCapture={handleKeyDown}
                role="region"
                aria-roledescription="carousel"
                data-slot="carousel"
                {...props}
            >
                {children}
            </div>
        </CarouselContext.Provider>
    );
}

function CarouselViewport({ ...props }: React.ComponentProps<'div'>) {
    return (
        <div
            className="flex w-full touch-pan-y"
            {...props}
        />
    );
}

function CarouselContent({ className, ...props }: React.ComponentProps<'div'>) {
    const { carouselRef, orientation } = useCarousel();

    return (
        <div
            className="w-full overflow-hidden"
            ref={carouselRef}
            data-slot="carousel-content"
        >
            <div
                className={cn('flex', orientation === 'horizontal' ? '-ml-4' : '-mt-4 flex-col', className)}
                {...props}
            />
        </div>
    );
}

function CarouselItem({ className, ...props }: React.ComponentProps<'div'>) {
    const { orientation } = useCarousel();

    return (
        <div
            className={cn('min-w-0 shrink-0 grow-0 basis-full', orientation === 'horizontal' ? 'pl-4' : 'pt-4', className)}
            role="group"
            aria-roledescription="slide"
            data-slot="carousel-item"
            {...props}
        />
    );
}

function CarouselDots({ className }: React.ComponentProps<'div'>) {
    const { scrollSnaps, selectedSnap, goTo } = useCarousel();

    return (
        <div className="mt-8 flex justify-center gap-1">
            {scrollSnaps?.map((_, index) => (
                <button
                    className={cn(
                        'h-1.5 w-10 cursor-pointer rounded-md',
                        selectedSnap === index ? 'bg-brand-secondary-300' : 'bg-brand-neutral-400',
                        className,
                    )}
                    key={index}
                    onClick={() => goTo(index)}
                />
            ))}
        </div>
    );
}

function CarouselPrevious({ className, variant = 'neutral', size = 'icon-md', ...props }: React.ComponentProps<typeof Button>) {
    const { orientation, scrollPrev, canScrollPrev } = useCarousel();

    return (
        <Button
            className={cn('', orientation === 'horizontal' ? '' : '', className)}
            data-slot="carousel-previous"
            variant={variant}
            size={size}
            disabled={!canScrollPrev}
            onClick={scrollPrev}
            {...props}
        >
            <ChevronLeftIcon strokeWidth={2.5} />
            <span className="sr-only">Previous slide</span>
        </Button>
    );
}

function CarouselNext({ className, variant = 'neutral', size = 'icon-md', ...props }: React.ComponentProps<typeof Button>) {
    const { orientation, scrollNext, canScrollNext } = useCarousel();

    return (
        <Button
            className={cn('', orientation === 'horizontal' ? '' : '', className)}
            data-slot="carousel-next"
            variant={variant}
            size={size}
            disabled={!canScrollNext}
            onClick={scrollNext}
            {...props}
        >
            <ChevronRightIcon strokeWidth={2.5} />
            <span className="sr-only">Next slide</span>
        </Button>
    );
}

export { type CarouselApi, Carousel, CarouselContent, CarouselViewport, CarouselDots, CarouselItem, CarouselPrevious, CarouselNext };
