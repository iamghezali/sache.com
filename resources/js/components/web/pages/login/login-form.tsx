import { Link } from '@inertiajs/react';
import { ArrowRightIcon } from 'lucide-react';
import type { JSX } from 'react';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import GoogleButton from '@/components/web/pages/login/google-button';

export default function LoginForm(): JSX.Element {
    return (
        <div>
            <h1 className="font-rubik text-[2rem]/tight font-semibold text-brand-neutral-1000">Login</h1>

            <div className="mt-2 flex flex-col gap-6">
                <span className="block text-xl font-medium text-brand-neutral-1000">Sign in with</span>
                <GoogleButton>Sign in with Google</GoogleButton>

                <span className="block text-xl/tight font-medium text-brand-neutral-1000 uppercase">Or</span>
            </div>

            <div className="mt-6">
                <form
                    className="flex flex-col gap-6"
                    action=""
                >
                    <Input placeholder="Email" />

                    <div>
                        <Input
                            type="password"
                            placeholder="Password"
                        />

                        <Link
                            className="mt-3 block text-brand-neutral-1000 underline"
                            href="#"
                        >
                            Forget your password?
                        </Link>
                    </div>

                    <Label>
                        <Checkbox defaultChecked />

                        <span className="text-pretty">
                            Keep me logged in - applies to all log in options below.{' '}
                            <Link
                                className="underline"
                                href="#"
                            >
                                More info
                            </Link>
                        </span>
                    </Label>

                    <Button
                        className="w-full justify-between px-4 uppercase"
                        variant="neutral"
                    >
                        Login
                        <ArrowRightIcon />
                    </Button>

                    <span className="text-pretty">
                        By clicking 'Log In' you agree to our website Sache Terms & Conditions, Sache{' '}
                        <Link
                            className="underline"
                            href="#"
                        >
                            Privacy Notice
                        </Link>{' '}
                        and{' '}
                        <Link
                            className="underline"
                            href="#"
                        >
                            Terms & Conditions.
                        </Link>
                    </span>
                </form>
            </div>
        </div>
    );
}
