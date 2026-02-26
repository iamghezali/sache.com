import { ArrowRightIcon } from 'lucide-react';
import type { JSX } from 'react';
import { Button } from '@/components/ui/button';

export default function CallToAction(): JSX.Element {
    return (
        <div className="flex h-72.5 items-center justify-center rounded-2xl bg-brand-primary-500">
            <div className="flex flex-col items-center justify-center">
                <h3 className="text-4xl leading-14.25 font-semibold text-white">Ready to Create Your Custom Piece?</h3>

                <Button
                    className="mt-5.5 bg-white text-black hover:text-white"
                    size="sm"
                >
                    Start Custom Order <ArrowRightIcon strokeWidth={3} />
                </Button>
            </div>
        </div>
    );
}
