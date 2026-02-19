import type { JSX } from 'react';
import ProductImages from '@/components/web/pages/product/product-images';
import ProductsSlider from '@/components/web/products-slider';
import WebLayout from '@/layouts/web-layout';

export default function Product(): JSX.Element {
    return (
        <WebLayout>
            <section>
                <div className="mt-4">
                    <ProductImages />
                </div>
            </section>

            <section>
                <div className="mt-24">
                    <ProductsSlider />
                </div>
            </section>
            <div className="h-10"></div>
        </WebLayout>
    );
}
