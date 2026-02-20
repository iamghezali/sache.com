import type { JSX } from 'react';
import whiteLogoPlus from '@/assets/sach-logo-white-plus.png';
import whiteLogo from '@/assets/sach-logo-white.png';
import { Button } from '@/components/ui/button';

export default function Footer(): JSX.Element {
    return (
        <>
            <footer>
                <div className="mt-20 rounded-[3rem] bg-brand-secondary-300">
                    <div className="flex items-center px-18 pt-16 pb-10">
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

                        <div className="relative -right-32 ml-auto h-26 w-98">
                            <img
                                src={whiteLogoPlus}
                                alt=""
                            />
                        </div>
                    </div>

                    <div className="rounded-[3rem] bg-brand-neutral-1000 p-10 pb-5">
                        <div className="flex">
                            <div className="basis-45/100">
                                <h6 className="font-rubik text-4xl font-semibold text-brand-primary-200">About us</h6>

                                <p className="mt-1 max-w-md text-xl text-brand-neutral-100">
                                    We are the biggest hyperstore in the universe.
                                    <br />
                                    We got you all cover with our exclusive collections and latest drops.
                                </p>
                            </div>

                            <div className="flex basis-55/100 justify-start">
                                <div className="basis-full">
                                    <h6 className="font-rubik text-2xl font-semibold text-brand-primary-200">Categories</h6>

                                    <ul className="mt-4 space-y-2 text-xl text-brand-neutral-100">
                                        <li>
                                            <a href="#">Runners</a>
                                        </li>
                                        <li>
                                            <a href="#">Sneakers</a>
                                        </li>
                                        <li>
                                            <a href="#">Basketball</a>
                                        </li>
                                        <li>
                                            <a href="#">Outdoor</a>
                                        </li>
                                        <li>
                                            <a href="#">Golf</a>
                                        </li>
                                        <li>
                                            <a href="#">Hiking</a>
                                        </li>
                                    </ul>
                                </div>

                                <div className="basis-full">
                                    <h6 className="font-rubik text-2xl font-semibold text-brand-primary-200">Company</h6>

                                    <ul className="mt-4 space-y-2 text-xl text-brand-neutral-100">
                                        <li>
                                            <a href="#">About</a>
                                        </li>
                                        <li>
                                            <a href="#">Contact</a>
                                        </li>
                                        <li>
                                            <a href="#">Blog</a>
                                        </li>
                                    </ul>
                                </div>

                                <div className="basis-full">
                                    <h6 className="font-rubik text-2xl font-semibold text-brand-primary-200">Follow us</h6>

                                    <ul className="mt-4 flex gap-6 text-brand-neutral-100">
                                        <li>{/* <a href="#"><x-icons.logo-facebook /></a> */}</li>

                                        <li>{/* <a href="#"><x-icons.logo-instagram /></a> */}</li>

                                        <li>{/* <a href="#"><x-icons.logo-twitter /></a> */}</li>

                                        <li>{/* <a href="#"><x-icons.logo-tiktok /></a> */}</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <img
                            className="mx-auto -mt-20 h-90"
                            src={whiteLogo}
                            alt=""
                        />
                    </div>
                </div>

                <div>
                    <p className="pt-8 pb-4 text-center text-brand-neutral-1000">© All rights reserved | Made with ❤️ by Craft Waves</p>
                </div>
            </footer>
        </>
    );
}
