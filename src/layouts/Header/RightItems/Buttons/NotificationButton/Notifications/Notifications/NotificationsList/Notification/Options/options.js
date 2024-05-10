import React from 'react';
import propTypes from 'prop-types';
import {getIconComponent} from '../../../../../../../../../../generic components/iconsmap';
import {DropdownMenu} from
    '../../../../../../../../../../pages/subreddit/General/Components/DropdownMenu/dropdownmenu.js';
import './options.css';
import {axiosInstance} from '../../../../../../../../../../requests/axios.js';
import {API_ROUTES} from '../../../../../../../../../../requests/routes.js';
import {useNotifications} from '../../../../../../../../../../generic components/Notifications/notificationsContext.js';

/**
 * Options
 * @param {object} props - props
 * @param {string} props.type - type
 * @param {string} props.id - id
 * @return {JSX.Element} Options
 * @constructor
 * */
export function Options({type, id}) {
    const [showOptions, setShowOptions] = React.useState(false);
    const OverflowHorizontalIcon = getIconComponent('overflow-horizontal', false);
    const {addNotification} = useNotifications();

    const hideNotification = async () => {
        try {
            const response = await axiosInstance.delete(API_ROUTES.hideNotification, {
                data: {
                    notificationId: id,
                },
            });
            const data = await response.data;
            addNotification({type: 'success', message: data.message});
        } catch (error) {
            // console.log(error);
            addNotification({type: 'error', message: error.message});
        }
    };

    const menuItems = [
        {
            content: {
                text: 'Don\'t get updates on this',
            },
            onClick: (e) => {
                e.stopPropagation();
                addNotification({type: 'success', message: 'Not supported yet :)'});
            },
        },
        {
            content: {
                text: 'Hide notification',
            },
            onClick: (e) => {
                e.stopPropagation(); hideNotification();
            },
        },
    ];

    return (
        <div className="z-10 flex flex-col items-center justify-start" data-testid="main-div-&(^KMSAJHVBUbkjl">
            <div data-testid="inner-div-^&*@XZMKLDSAsssss">
                <div className='relative' data-testid="button-container-#%^$#jnz<anSNJSA">
                    <button
                        className="
                nav-bar-noti-menu__list-button-small nav-bar-noti-menu__list-button-plain
                icon
                nav-bar-noti-menu__list-button
                inline-flex items-center
                justify-center px-[var(--rem6)]"
                        onClick={(e) => {
                            setShowOptions(!showOptions);
                            e.stopPropagation();
                        }}
                        data-testid="options-button-~!@#@#~!@sdJ"
                    >
                        <span className="flex items-center justify-center" data-testid="button-span">
                            <span className="flex" data-testid="icon-span">
                                <OverflowHorizontalIcon
                                    className="box-content size-[16] overflow-hidden fill-current"
                                    data-testid="overflow-icon-=LSADZxxss"
                                />
                            </span>
                        </span>
                    </button>
                    <DropdownMenu
                        position="top-[48px] right-0"
                        items={menuItems}
                        isHidden={!showOptions}
                        data-testid="dropdown-menu-0(^&*./'s"
                    />
                </div>
            </div>
        </div>
    );
}

Options.propTypes = {
    type: propTypes.string.isRequired,
    id: propTypes.string.isRequired,
};
