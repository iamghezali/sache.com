import type { JSX, ReactNode } from 'react';
import Header from '@/components/web/header/header';

interface Props {
    children?: ReactNode;
}

export default function WebLayout({ children }: Props): JSX.Element {
    return (
        <div className="px-3">
            <div className="mx-auto max-w-330 pt-8">
                <Header />
                <main>{children}</main>
                <footer></footer>
            </div>
        </div>
    );
}
