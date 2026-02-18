import type { JSX } from 'react';
import FilterCategories from '@/components/web/pages/shop/filter-categories';
import FilterColors from '@/components/web/pages/shop/filter-colors';
import FilterFabric from '@/components/web/pages/shop/filter-fabric';
import FilterPricing from '@/components/web/pages/shop/filter-pricing';
import FilterSizes from '@/components/web/pages/shop/filter-sizes';
import FilterStyle from '@/components/web/pages/shop/filter-style';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/web/pages/shop/filters-accordion';

export default function ShopSidebar(): JSX.Element {
    return (
        <div className="flex flex-col gap-4">
            <span className="text-2xl/tight font-semibold text-brand-neutral-1000">Filters</span>

            <Accordion
                type="multiple"
                defaultValue={['category', 'size', 'color', 'style', 'fabric', 'price']}
            >
                <AccordionItem value="category">
                    <AccordionTrigger>Category</AccordionTrigger>
                    <AccordionContent>
                        <FilterCategories />
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="size">
                    <AccordionTrigger>Size</AccordionTrigger>
                    <AccordionContent>
                        <FilterSizes />
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="color">
                    <AccordionTrigger>Color</AccordionTrigger>
                    <AccordionContent>
                        <FilterColors />
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="style">
                    <AccordionTrigger>Style</AccordionTrigger>
                    <AccordionContent>
                        <FilterStyle />
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="fabric">
                    <AccordionTrigger>Fabric</AccordionTrigger>
                    <AccordionContent>
                        <FilterFabric />
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="price">
                    <AccordionTrigger>Price</AccordionTrigger>
                    <AccordionContent className="pt-6 pb-4">
                        <FilterPricing />
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    );
}
