import { Link } from '@inertiajs/react';
import type { JSX } from 'react';
import { Button } from '@/components/ui/button';
import CartItem from '@/components/web/pages/cart/cart-item';
import EmptyCart from '@/components/web/pages/cart/empty-cart';
import ProductCarousel from '@/components/web/products-carousel';
import WebLayout from '@/layouts/web-layout';

export default function Cart(): JSX.Element {
    const params = new URLSearchParams(window.location.search);
    const itemExist = params.get('itemExist');

    return (
        <WebLayout>
            <section>
                <div className="mt-7">
                    <div>
                        <h1 className="text-[2rem]/tight font-semibold text-brand-neutral-1000">Cart</h1>
                    </div>

                    {itemExist !== null ? (
                        <div className="mt-8 flex items-start gap-24">
                            <div className="min-w-0 grow rounded-2xl bg-brand-shade-white p-6">
                                <h2 className="text-[2rem]/tight leading-9.5 font-semibold text-brand-neutral-1000">Your Bag</h2>
                                <span className="mt-2 inline-block leading-5.5 text-brand-neutral-1000/80">
                                    Items in your bag not reserved check out now to make them yours.
                                </span>

                                <div className="mt-11">
                                    <div className="flex flex-col gap-10">
                                        <CartItem />
                                    </div>
                                </div>
                            </div>

                            <div className="sticky top-7 w-full shrink-0 basis-104.5">
                                <div className="py-1">
                                    <h2 className="text-[2rem]/tight font-semibold text-brand-neutral-1000">Order Summary</h2>

                                    <ul className="mt-6 flex flex-col gap-4 text-brand-neutral-1000">
                                        <li className="flex items-center justify-between text-xl">
                                            <span>
                                                <span className="text-brand-neutral-800">x1</span> Cozy Knit Set
                                            </span>
                                            <span className="text-brand-neutral-1000/80">12,000 DZD</span>
                                        </li>
                                        <li className="flex items-center justify-between text-xl">
                                            <span>Delivery</span>
                                            <span className="text-brand-neutral-1000/80">400 DZD</span>
                                        </li>
                                        <li className="flex items-center justify-between text-xl">
                                            <span>Sales Tax</span>
                                            <span className="text-brand-neutral-1000/80">-</span>
                                        </li>
                                        <li className="flex items-center justify-between text-2xl font-semibold">
                                            <span>Total</span>
                                            <span className="text-brand-neutral-1000/80">12,400 DZD</span>
                                        </li>
                                    </ul>

                                    <Button
                                        className="mt-6 w-full uppercase"
                                        variant="neutral"
                                        asChild
                                    >
                                        <Link href="/shop/checkout">Checkout</Link>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <EmptyCart />
                    )}
                </div>
            </section>

            <section>
                <div className="mt-24">
                    <ProductCarousel />
                </div>
            </section>
        </WebLayout>
    );
}
