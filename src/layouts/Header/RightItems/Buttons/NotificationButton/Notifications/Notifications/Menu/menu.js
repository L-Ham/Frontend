import React from 'react';
import './menu.css';
import {getIconComponent} from '../../../../../../../../generic components/iconsmap';
import {axiosInstance as axios} from '../../../../../../../../requests/axios';
import {API_ROUTES} from '../../../../../../../../requests/routes';
import {useNotifications} from '../../../../../../../../generic components/Notifications/notificationsContext';

/**
 * Menu
 * @return {JSX.Element} Menu
 * @constructor
 * */
export function Menu() {
    const {addNotification} = useNotifications();
    const SettingsIcon = getIconComponent('settings', false);

    const markAllAsRead = async () => {
        try {
            await axios.patch(API_ROUTES.markAllNotificationsAsRead);
            addNotification({type: 'success', message: 'All notifications marked as read'});
        } catch (error) {
            addNotification({type: 'error', message: error.message});
        }
    };

    return (
        <div className='nav-bar-noti-menu grid grid-cols-[1fr_2rem] px-4' data-testid="main-div-^YFGHSsklad">
            <div className='flex items-center justify-between' data-testid="header-div-%$RFVBkasd">
                <span className="font-semibold uppercase text-[var(--color-neutral-content-weak)]"
                    data-testid="date-span-SPPPPPA*&UJM&H^%TG">Today</span>
                <div data-testid="button-container-s&BJH)JO!@_ASD">
                    <button className="nav-bar-noti-menu-button-medium
            nav-bar-noti-menu-button-plain
            nav-bar-noti-menu-button inline-flex
            items-center
            justify-center
            !rounded-none bg-transparent
            !p-0 px-[var(--rem14)]" data-testid="mark-read-button_~@WSDCVX">
                        <span className='flex items-center justify-center' data-testid="button-span-@#EFGVQHBJS">
                            <span className='flex items-center gap-2' data-testid="button-text-span-#DRCFGVH!!!">
                                <span className='text-[14px]'
                                    data-testid="button-text-!DLAJDGHNw2d2d"
                                    onClick={markAllAsRead}
                                >Mark all as read</span>
                                <div className='h-4 border-[0.0625rem] border-solid
                    border-[var(--color-neutral-border-weak)]' data-testid="button-divider-P:{asd}AD__s"></div>
                            </span>
                        </span>
                    </button>
                </div>
            </div>
            <div className='relative top-[9px] ml-3 flex' data-testid="settings-link-div-#$%^&*^YH*SFVB">
                <div data-testid="settings-icon-container-^TGB-$RF">
                    <div data-testid="settings-link-wrapper-QAZX%RFC_hj">
                        <a className='a
                border-0 text-[var(--color-neutral-content)]
                no-underline
                hover:text-[var(--color-secondary)] hover:no-underline'
                        href="/settings/notifications"
                        target="_blank" data-testid="settings-link-&HNIOS_SAD">
                            <div data-testid="settings-icon-div_dkasd@$RFAS">
                                <SettingsIcon className="text-[var(--color-neutral-content)]"
                                    data-testid="settings-icon-*U%TGB465b"/>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
