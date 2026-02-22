import type { JSX } from 'react';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import LoginForm from '@/components/web/pages/auth/login-form';
import RegisterForm from '@/components/web/pages/auth/register-form';
import { useCheckout } from '@/pages/checkout/checkout';

export default function StepPersonnalInfo(): JSX.Element {
    const { goToStep, setStepValid, scrollToStep } = useCheckout();

    const HandleClick = () => {
        setStepValid('1');
        scrollToStep('1');
        goToStep('2');
    };

    return (
        <div className="mt-2 pb-2">
            <Tabs defaultValue="new">
                <TabsList
                    className="gap-5"
                    variant="text"
                >
                    <TabsTrigger
                        className="text-xl"
                        value="new"
                    >
                        Create a New Account
                    </TabsTrigger>

                    <Separator
                        className="data-[orientation=vertical]:w-0.5"
                        orientation="vertical"
                    />

                    <TabsTrigger
                        className="text-xl"
                        value="login"
                    >
                        Login
                    </TabsTrigger>
                </TabsList>

                <div className="mt-4">
                    <TabsContent value="new">
                        <RegisterForm
                            onClick={HandleClick}
                            label="Login & Continue"
                        />
                    </TabsContent>
                    <TabsContent value="login">
                        <LoginForm
                            onClick={HandleClick}
                            label="Login & Continue"
                        />
                    </TabsContent>
                </div>
            </Tabs>
        </div>
    );
}
