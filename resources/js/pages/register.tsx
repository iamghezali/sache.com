import type { JSX } from 'react';
import PlaceholderImage from '@/components/ui/placeholderImage';
import RegisterForm from '@/components/web/pages/auth/register-form';
import WebLayout from '@/layouts/web-layout';

export default function Register(): JSX.Element {
    return (
        <WebLayout>
            <section className="mt-6 flex gap-5 px-3">
                <div className="w-full grow px-10">
                    <RegisterForm />
                </div>

                <div className="shrink-0">
                    <div className="sticky top-7">
                        <div className="relative h-213 w-170 overflow-hidden rounded-2xl bg-red-100">
                            <PlaceholderImage />
                        </div>
                    </div>
                </div>
            </section>
        </WebLayout>
    );
}
