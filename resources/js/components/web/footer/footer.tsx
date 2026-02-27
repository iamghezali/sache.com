import { Link } from '@inertiajs/react';
import type { JSX } from 'react';
import logoPrimary from '@/assets/logo-primary.svg';
import logoWhiteBig from '@/assets/logo-white-big.svg';
import { Button } from '@/components/ui/button';

export default function Footer(): JSX.Element {
    return (
        <footer>
            <div className="mt-20 rounded-[3rem] bg-brand-secondary-300">
                <div className="flex items-center px-15 pt-16 pb-10">
                    <div>
                        <h4 className="font-rubik max-w-[17ch] text-5xl/tight font-semibold text-white uppercase">
                            Join our community & get 15% off
                        </h4>

                        <p className="mt-4 text-xl text-brand-neutral-100">Sign up for free! Join the community.</p>

                        <form
                            className="mt-8"
                            action=""
                        >
                            <div className="flex gap-1">
                                <input
                                    className="w-85 rounded-lg border px-4 py-2 font-medium text-white focus:outline-transparent"
                                    type="text"
                                    placeholder="Enter your email address..."
                                />
                                <Button
                                    className="uppercase"
                                    variant="neutral"
                                >
                                    Submit
                                </Button>
                            </div>
                        </form>
                    </div>

                    <div className="relative ml-auto">
                        <img
                            src={logoPrimary}
                            alt=""
                        />
                    </div>
                </div>

                <div className="rounded-[3rem] bg-brand-neutral-1000 p-10 pb-1">
                    <div className="flex">
                        <div className="basis-45/100">
                            <h6 className="font-rubik text-4xl font-semibold text-brand-primary-200">About us</h6>

                            <p className="mt-1 max-w-md text-xl text-brand-neutral-100">
                                SACH offers a smarter way to create custom clothing and living room salons without the hassle.
                            </p>
                        </div>

                        <div className="flex basis-55/100 justify-start">
                            <div className="basis-full">
                                <h6 className="font-rubik text-2xl font-semibold text-brand-primary-200">Categories</h6>

                                <ul className="mt-4 space-y-2 text-xl text-brand-neutral-100">
                                    <li>
                                        <a href="#">Hijab</a>
                                    </li>
                                    <li>
                                        <a href="#">Isdal</a>
                                    </li>
                                    <li>
                                        <a href="#">Shirts</a>
                                    </li>
                                    <li>
                                        <a href="#">Abbayas</a>
                                    </li>
                                    <li>
                                        <a href="#">Living Rooms</a>
                                    </li>
                                </ul>
                            </div>

                            <div className="basis-full">
                                <h6 className="font-rubik text-2xl font-semibold text-brand-primary-200">Company</h6>

                                <ul className="mt-4 space-y-2 text-xl text-brand-neutral-100">
                                    <li>
                                        <Link href="/about">About</Link>
                                    </li>
                                    <li>
                                        <Link href="/contact">Contact</Link>
                                    </li>
                                    <li>
                                        <a href="#">Privacy Policy</a>
                                    </li>
                                    <li>
                                        <a href="#">Terms & Conditions</a>
                                    </li>
                                </ul>
                            </div>

                            <div className="basis-full">
                                <h6 className="font-rubik text-2xl font-semibold text-brand-primary-200">Follow us</h6>

                                <ul className="mt-4 flex gap-6 text-brand-neutral-100"></ul>
                            </div>
                        </div>
                    </div>

                    <img
                        className="mx-auto -mt-22"
                        src={logoWhiteBig}
                        alt=""
                    />
                </div>
            </div>

            <div>
                <p className="pt-8 pb-4 text-center text-brand-neutral-1000">© All rights reserved | Made with ❤️ by Craft Waves</p>
            </div>
        </footer>
    );
}
