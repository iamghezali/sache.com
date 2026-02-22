import { Link } from '@inertiajs/react';
import { ArrowRightIcon } from 'lucide-react';
import type { JSX } from 'react';
import { Button } from '@/components/ui/button';

export default function SecondaryNavigation(): JSX.Element {
    return (
        <nav>
            <ul className="flex items-center gap-4.5">
                <li>
                    <Button
                        size={'sm'}
                        asChild
                    >
                        <Link
                            className="inline-block px-3 py-1.5 font-semibold"
                            href="/custom-order/create/"
                        >
                            Custom Order
                            <ArrowRightIcon strokeWidth={3} />
                        </Link>
                    </Button>
                </li>
            </ul>
        </nav>
    );
}
