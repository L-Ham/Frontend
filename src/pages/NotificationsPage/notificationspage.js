import React from 'react';
// eslint-disable-next-line max-len
import {NotificationsContainer} from '../../layouts/Header/RightItems/Buttons/NotificationButton/Notifications/notificationscontainer';
import {NotificationsButtonProvider} from
    '../../layouts/Header/RightItems/Buttons/NotificationButton/notificationsbuttoncontext';


/**
 * Notifications Page
 * @return {JSX.Element} Notifications Page
 * @constructor
 */
export function NotificationsPage() {
    return (
        <div className='flex min-h-screen flex-col px-[16px]' data-testid='notifications-container'>
            <h1 className="m-[1em_0_0.5em]
             mb-0 h-[40px]  pb-4 text-[1.5rem]/[1.75rem] font-bold text-[var(--color-neutral-content-strong)]">
            Notifications
            </h1>
            <NotificationsButtonProvider >
                <NotificationsContainer view='FULL'/>
            </NotificationsButtonProvider>
        </div>
    );
}
