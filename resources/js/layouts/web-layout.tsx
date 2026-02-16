import type { JSX, ReactNode } from 'react';

interface Props {
    children?: ReactNode;
}

export default function WebLayout({ children }: Props): JSX.Element {
    return (
        <div className="pt-8">
            <header></header>
            <main>
                <div className="mx-auto max-w-6xl">{children}</div>
            </main>
            <footer></footer>
        </div>
    );
}
