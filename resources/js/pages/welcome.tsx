import { Link } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import WebLayout from '@/layouts/web-layout';

export default function Welcome() {
    return (
        <WebLayout>
            <Button asChild>
                <Link href="/about">Custom Order</Link>
            </Button>
        </WebLayout>
    );
}
