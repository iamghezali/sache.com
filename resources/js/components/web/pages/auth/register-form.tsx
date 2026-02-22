import { Link } from '@inertiajs/react';
import { ArrowRightIcon } from 'lucide-react';
import type { JSX } from 'react';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import GoogleButton from '@/components/web/pages/auth/google-button';

export default function RegisterForm(): JSX.Element {
    return (
        <div>
            <h1 className="font-rubik text-4xl/tight font-semibold text-brand-neutral-1000">Register</h1>

            <div className="mt-2 flex flex-col gap-6">
                <span className="block text-xl font-medium text-brand-neutral-1000">Sign up with</span>
                <GoogleButton>Sign up with Google</GoogleButton>

                <span className="block text-xl/tight font-medium text-brand-neutral-1000 uppercase">Or</span>
            </div>

            <div className="mt-6">
                <form
                    className="flex flex-col gap-6"
                    action=""
                >
                    <div className="flex flex-col gap-5">
                        <h2 className="text-2xl font-semibold text-brand-neutral-1000">Your info</h2>

                        <Input placeholder="First Name" />
                        <Input placeholder="Last Name" />
                        <Input placeholder="Phone Number" />
                    </div>

                    <div className="flex flex-col gap-5">
                        <h2 className="text-2xl font-semibold text-brand-neutral-1000">Gender</h2>

                        <RadioGroup className="flex gap-8">
                            <div className="flex items-center gap-2">
                                <RadioGroupItem
                                    id="gender_male"
                                    value="male"
                                />
                                <Label htmlFor="gender_male">Male</Label>
                            </div>

                            <div className="flex items-center gap-2">
                                <RadioGroupItem
                                    id="gender_female"
                                    value="female"
                                />
                                <Label htmlFor="gender_female">Female</Label>
                            </div>
                        </RadioGroup>
                    </div>

                    <div className="flex flex-col gap-5">
                        <h2 className="text-2xl font-semibold text-brand-neutral-1000">Login Details</h2>

                        <Input placeholder="Email" />

                        <div>
                            <Input
                                type="password"
                                placeholder="Password"
                            />
                            <span className="mt-1 block text-xs leading-4 text-pretty text-brand-neutral-1000/80">
                                Minimum 8 characters with at least one uppercase, one lowercase, one special character and a number
                            </span>
                        </div>
                    </div>

                    <Label className="items-start">
                        <Checkbox defaultChecked />

                        <span className="leading-5.5 text-pretty">
                            By clicking 'Register' you agree to our website Sache Terms & Conditions, Sache{' '}
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
                    </Label>

                    <Button
                        className="w-full justify-between px-4 uppercase"
                        variant="neutral"
                    >
                        Register
                        <ArrowRightIcon />
                    </Button>
                </form>
            </div>
        </div>
    );
}
