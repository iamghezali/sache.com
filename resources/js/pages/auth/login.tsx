import type { JSX } from 'react';
import PlaceholderImage from '@/components/ui/placeholderImage';
import LoginForm from '@/components/web/pages/auth/login-form';
import WebLayout from '@/layouts/web-layout';

export default function Login(): JSX.Element {
    return (
        <WebLayout>
            <section className="mt-6 flex gap-5 px-3">
                <div className="w-full grow px-10">
                    <LoginForm />
                </div>

                <div className="shrink-0">
                    <div className="relative h-138 w-170 overflow-hidden rounded-2xl bg-red-100">
                        <PlaceholderImage />
                    </div>
                </div>
            </section>
        </WebLayout>
    );
}
