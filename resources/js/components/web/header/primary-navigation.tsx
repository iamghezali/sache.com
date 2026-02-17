import { Link } from '@inertiajs/react';
import type { JSX } from 'react';

export default function PrimaryNavigation(): JSX.Element {
    return (
        <nav>
            <ul className="flex items-center gap-4.5">
                <li>
                    <Link
                        className="inline-block px-3 py-1.5 font-semibold"
                        href="#"
                    >
                        Shop
                    </Link>
                </li>

                <li>
                    <Link
                        className="inline-block px-3 py-1.5 font-semibold"
                        href="#"
                    >
                        Living Rooms
                    </Link>
                </li>

                <li>
                    <Link
                        className="inline-block px-3 py-1.5 font-semibold"
                        href="#"
                    >
                        Sach Collections
                    </Link>
                </li>
            </ul>
        </nav>
    );
}
