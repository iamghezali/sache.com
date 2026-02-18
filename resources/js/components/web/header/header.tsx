import { Link } from '@inertiajs/react';
import type { JSX } from 'react';
import logo from '@/assets/sache-logo.png';
import PrimaryNavigation from '@/components/web/header/primary-navigation';
import SecondaryNavigation from '@/components/web/header/secondary-navigation';

export default function Header(): JSX.Element {
    return (
        <header>
            <div className="flex h-28 items-center rounded-3xl bg-brand-shade-white px-8 py-8.5">
                <div className="flex h-full grow basis-full items-center">
                    <PrimaryNavigation />
                </div>

                <div className="shrink-0">
                    <Link href={'/'}>
                        <img
                            className="h-9.5"
                            src={logo}
                            alt="Sach Logo"
                        />
                    </Link>
                </div>

                <div className="flex h-full grow basis-full items-center justify-end">
                    <SecondaryNavigation />
                </div>
            </div>
        </header>
    );
}
