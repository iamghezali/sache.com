import { Link } from '@inertiajs/react';
import imagePlaceHolder from '@/assets/placeholder.svg';
import { Button } from '@/components/ui/button';
import Banners from '@/components/web/pages/welcome/banners';
import { CategoriesTabs, CategoriesTabsContent, CategoriesTabsList, CategoriesTabsTrigger } from '@/components/web/pages/welcome/categories-tabs';
import CategoryCard from '@/components/web/pages/welcome/category-card';
import RevealTextOnScroll from '@/components/web/pages/welcome/reveal-text-on-scroll';
import ReviewCard from '@/components/web/pages/welcome/review-card';
import ProductCard from '@/components/web/product-card';
import useAOS from '@/hooks/useAOS';
import WebLayout from '@/layouts/web-layout';

export default function Welcome() {
    useAOS();

    return (
        <WebLayout>
            <section>
                <div className="hero-gradient mt-14 rounded-[4rem] py-53">
                    <div className="flex flex-col items-center">
                        <h1 className="max-w-4xl text-center text-7xl/tight font-semibold">Tailoring Your Style, Perfecting Your Space</h1>

                        <p className="mt-3 max-w-5xl text-center text-2xl text-brand-neutral-alt-700">
                            From custom clothing to living room salons, SASH brings your ideas to life with a fully managed, hassle-free experience —
                            from request to delivery.
                        </p>
                    </div>

                    <div className="mt-6 flex justify-center gap-6">
                        <Button
                            className="w-62 uppercase"
                            asChild
                        >
                            <Link>Create A Custom Order</Link>
                        </Button>
                        <Button
                            className="w-62 uppercase"
                            variant={'outline'}
                            asChild
                        >
                            <Link>Shop Ready-to-Wear</Link>
                        </Button>
                    </div>
                </div>
            </section>

            <section>
                <div className="mt-20 flex gap-8">
                    <div className="sticky top-20 size-72.5 shrink-0 overflow-hidden rounded-xl bg-neutral-300">
                        <img
                            className="absolute inset-0"
                            src={imagePlaceHolder}
                            alt="Founder Image"
                        />
                    </div>

                    <RevealTextOnScroll>
                        SASH offers a smarter way to create custom clothing and living room salons without the hassle. Upload your ideas, choose your
                        preferences, and let our team take care of the rest — from pricing and production to quality checks and delivery. Designed for
                        individuals, families, and institutions, SASH combines craftsmanship with convenience to deliver results you can trust.
                    </RevealTextOnScroll>
                </div>
            </section>

            <section>
                <div className="mt-20">
                    <div className="flex items-end justify-between">
                        <h2 className="text-7xl font-semibold text-brand-neutral-1000">New Drops</h2>

                        <Button
                            className="uppercase"
                            variant={'secondary'}
                            asChild
                        >
                            <Link>Shop New Drops</Link>
                        </Button>
                    </div>

                    <div className="mt-8 flex gap-4">
                        <ProductCard badge="New" />
                        <ProductCard badge="New" />
                        <ProductCard badge="New" />
                        <ProductCard badge="New" />
                    </div>
                </div>
            </section>

            <section>
                <div className="mt-20">
                    <Banners />
                </div>
            </section>

            <section>
                <div
                    className="mt-20"
                    id=""
                >
                    <h2 className="text-7xl font-semibold text-brand-neutral-1000 uppercase">Categories</h2>

                    <div className="mt-8">
                        <CategoriesTabs defaultValue="clothes">
                            <CategoriesTabsList>
                                <CategoriesTabsTrigger value="clothes">Clothes</CategoriesTabsTrigger>
                                <CategoriesTabsTrigger value="living-rooms">Living Rooms</CategoriesTabsTrigger>
                            </CategoriesTabsList>

                            <CategoriesTabsContent value="clothes">
                                <div className="grid grid-cols-2 gap-8">
                                    <CategoryCard />
                                    <CategoryCard />
                                    <CategoryCard />
                                    <CategoryCard />
                                </div>
                            </CategoriesTabsContent>

                            <CategoriesTabsContent value="living-rooms">
                                <div className="grid grid-cols-2 gap-8">
                                    <CategoryCard />
                                </div>
                            </CategoriesTabsContent>
                        </CategoriesTabs>
                    </div>
                </div>
            </section>

            <section>
                <div className="mt-20">
                    <div className="flex items-end justify-between">
                        <h2 className="text-7xl font-semibold text-brand-neutral-1000 uppercase">Best Sellers</h2>

                        <Button
                            className="uppercase"
                            variant={'secondary'}
                            asChild
                        >
                            <Link>Shop Best Sellers</Link>
                        </Button>
                    </div>

                    <div className="mt-8 flex gap-4">
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                    </div>
                </div>
            </section>

            <section>
                <div className="mt-20">
                    <div className="flex items-end justify-between">
                        <h2 className="text-7xl font-semibold text-brand-neutral-1000 uppercase">Reviews</h2>

                        <Button
                            className="uppercase"
                            variant={'secondary'}
                            asChild
                        >
                            <Link>See All</Link>
                        </Button>
                    </div>

                    <div className="mt-12 grid grid-cols-3 gap-4">
                        <ReviewCard />
                        <ReviewCard />
                        <ReviewCard />
                        <ReviewCard />
                        <ReviewCard />
                        <ReviewCard />
                    </div>
                </div>
            </section>
        </WebLayout>
    );
}
