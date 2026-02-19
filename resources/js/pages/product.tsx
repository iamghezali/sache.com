import { HeartIcon } from 'lucide-react';
import type { JSX } from 'react';
import { Button } from '@/components/ui/button';
import PlaceholderImage from '@/components/ui/placeholderImage';
import { Toggle } from '@/components/ui/toggle';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import ProductImages from '@/components/web/pages/product/product-images';
import ProductCarousel from '@/components/web/products-carousel';
import WebLayout from '@/layouts/web-layout';

export default function Product(): JSX.Element {
    return (
        <WebLayout>
            <section>
                <div className="mt-4">
                    <div className="flex gap-15">
                        <div className="min-w-0 grow">
                            <ProductImages />
                        </div>

                        <div className="flex basis-107.5 flex-col gap-3 text-brand-neutral-1000">
                            <div>
                                <span className="inline-flex h-9.5 items-center rounded-xl bg-brand-secondary-300 px-4 text-xs font-medium text-white">
                                    New Release
                                </span>

                                <h1 className="mt-4 text-[2rem]/tight font-semibold">Casual Maxi Dress</h1>
                                <span className="mt-4 block text-2xl/tight leading-6 font-semibold text-brand-secondary-300">12,000 DZD</span>
                                <span className="mt-2 block text-xs leading-4.5">Shipping calculated at checkout.</span>
                            </div>

                            <div>
                                <h3 className="font-semibold uppercase">Color</h3>

                                <ToggleGroup
                                    className="mt-2 flex flex-wrap gap-x-5 gap-y-4"
                                    type="single"
                                    variant={'colors-filter'}
                                    defaultValue="#EBE7E9"
                                >
                                    <ToggleGroupItem value="#EBE7E9">
                                        <div className="relative w-22.5 overflow-hidden rounded-lg pt-[120%]">
                                            <PlaceholderImage />
                                        </div>
                                    </ToggleGroupItem>

                                    <ToggleGroupItem value="#794B33">
                                        <div className="relative w-22.5 overflow-hidden rounded-lg pt-[120%]">
                                            <PlaceholderImage />
                                        </div>
                                    </ToggleGroupItem>

                                    <ToggleGroupItem value="#747682">
                                        <div className="relative w-22.5 overflow-hidden rounded-lg pt-[120%]">
                                            <PlaceholderImage />
                                        </div>
                                    </ToggleGroupItem>

                                    <ToggleGroupItem value="#B6A496">
                                        <div className="relative w-22.5 overflow-hidden rounded-lg pt-[120%]">
                                            <PlaceholderImage />
                                        </div>
                                    </ToggleGroupItem>

                                    <ToggleGroupItem value="#353336">
                                        <div className="relative w-22.5 overflow-hidden rounded-lg pt-[120%]">
                                            <PlaceholderImage />
                                        </div>
                                    </ToggleGroupItem>

                                    <ToggleGroupItem value="#C9CCC6">
                                        <div className="relative w-22.5 overflow-hidden rounded-lg pt-[120%]">
                                            <PlaceholderImage />
                                        </div>
                                    </ToggleGroupItem>
                                </ToggleGroup>
                            </div>

                            <div>
                                <div className="flex justify-between">
                                    <h3 className="font-semibold uppercase">Size</h3>

                                    <Button
                                        className="uppercase"
                                        variant="link"
                                        size="inline"
                                    >
                                        Size Chart
                                    </Button>
                                </div>

                                <ToggleGroup
                                    className="mt-2 flex gap-1"
                                    type="single"
                                    variant={'sizes-filter-lg'}
                                    defaultValue="s"
                                >
                                    <ToggleGroupItem value="s">S</ToggleGroupItem>
                                    <ToggleGroupItem value="m">M</ToggleGroupItem>
                                    <ToggleGroupItem value="l">L</ToggleGroupItem>
                                    <ToggleGroupItem value="xl">XL</ToggleGroupItem>
                                    <ToggleGroupItem value="xxl">XXL</ToggleGroupItem>
                                </ToggleGroup>
                            </div>

                            <div className="flex flex-col gap-2">
                                <div className="flex items-center gap-2">
                                    <Button
                                        className="grow uppercase"
                                        variant="neutral"
                                    >
                                        Add To Cart
                                    </Button>

                                    <Toggle size="icon">
                                        <HeartIcon />
                                    </Toggle>
                                </div>

                                <Button
                                    className="uppercase"
                                    variant="secondary"
                                >
                                    Buy it Now
                                </Button>
                            </div>

                            <div>
                                <h6 className="font-semibold uppercase">About The Product</h6>

                                <p className="mt-2 flex flex-col gap-4 text-brand-neutral-1000/80">
                                    <span>Material : Ribbed Triko</span>
                                    <span>This product is excluded from all promotional discounts and offers.</span>
                                    <ul className="list-disc pl-6">
                                        <li>Pay over time in interest-free installments with Affirm, Klarna or Afterpay.</li>
                                        <li>Join adiClub to get unlimited free standard shipping, returns, & exchanges.</li>
                                    </ul>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="mt-24">
                    <ProductCarousel />
                </div>
            </section>
            <div className="h-10"></div>
        </WebLayout>
    );
}
