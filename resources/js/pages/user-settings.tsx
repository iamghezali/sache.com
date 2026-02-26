import type { JSX } from 'react';
import { Separator } from '@/components/ui/separator';
import AddressManagement from '@/components/web/pages/user-settings/address-management';
import BasicInfo from '@/components/web/pages/user-settings/basic-info';
import ChangePassword from '@/components/web/pages/user-settings/change-password';
import SavedMeasurments from '@/components/web/pages/user-settings/saved-measurments';
import WebLayout from '@/layouts/web-layout';

export default function UserSettings(): JSX.Element {
    return (
        <WebLayout>
            <div className="mt-11.5">
                <h1 className="text-4xl/tight font-bold">Account Settings</h1>

                <BasicInfo />

                <Separator
                    className="my-8 bg-brand-neutral-alt-500"
                    orientation="horizontal"
                />

                <ChangePassword />

                <Separator
                    className="my-8 bg-brand-neutral-alt-500"
                    orientation="horizontal"
                />

                <AddressManagement />

                <Separator
                    className="my-8 bg-brand-neutral-alt-500"
                    orientation="horizontal"
                />

                <SavedMeasurments />
            </div>
        </WebLayout>
    );
}
