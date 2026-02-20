import EmptyList from '@/components/web/pages/shop/empty-list';
import ShopBanner from '@/components/web/pages/shop/shop-banner';
import ShopPagination from '@/components/web/pages/shop/shop-pagination';
import ShopSidebar from '@/components/web/pages/shop/shop-sidebar';
import ProductCard from '@/components/web/product-card';
import WebLayout from '@/layouts/web-layout';

export default function Shop() {
    const productsList = Array.from({ length: 0 });

    return (
        <WebLayout>
            <section>
                <div className="mt-16">
                    <ShopBanner />
                </div>
            </section>

            <section>
                <div className="mt-8">
                    <div>
                        <h1 className="text-4xl font-semibold text-brand-neutral-1000">Sach Collections</h1>
                        <span className="text-brand-neutral-1000/80">122 Items</span>
                    </div>

                    <div className="mt-8 flex gap-5">
                        <div className="w-full shrink-0 basis-79">
                            <ShopSidebar />
                        </div>

                        <div className="min-w-0 grow">
                            {productsList.length === 0 ? (
                                <EmptyList />
                            ) : (
                                <>
                                    <div className="grid grid-cols-3 gap-x-4 gap-y-9.5">
                                        {productsList.map((_, i) => (
                                            <ProductCard key={`product-card-${i}`} />
                                        ))}
                                    </div>

                                    <ShopPagination className="mt-8" />
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </WebLayout>
    );
}
