import React from 'react';
import {Menu} from './Menu/menu.js';
import {Notifications} from './Notifications/notifications.js';
import {SeeAllButton} from './SeeAllButton/seeallbutton.js';
import PropTypes from 'prop-types';
import './SuggestButton/suggestbutton.css';
import {useState, useEffect} from 'react';
import {axiosInstance as axios} from '../../../../../../requests/axios.js';
import {API_ROUTES} from '../../../../../../requests/routes.js';
import {useNotifications} from '../../../../../../generic components/Notifications/notificationsContext.js';

import {useNotificationsButtons} from '../notificationsbuttoncontext.js';
/**
 * Notifications Container
 * @param {string} view - view
 * @return {JSX.Element} Notifications Container
 * @constructor
 * */
export function NotificationsContainer({view = 'COMPACT'}) {
    const className = (view === 'COMPACT') ? `absolute right-0 top-[56px] -m-2
    w-[346px] min-w-[346px] max-w-[346px] overflow-visible rounded-[15px]
    bg-[var(--color-tooltip-bg-neutral)] text-[var(--color-tooltip-text-neutral)]
    shadow-[0px_5px_13px_-1px_rgba(0,0,0,0.4)]` : 'flex flex-col overflow-hidden';

    const {notifications} = useNotificationsButtons();
    if (!notifications) return null;

    const isEmpty = notifications.length === 0;

    return (
        <div className={className} data-testid="container-#235@SCC">
            <div className='flex flex-col overflow-visible' data-testid="flex-container-#142DS@@#">
                <Menu view={view} data-testid="menu-@$DFS%^^&"/>
                {isEmpty && <EmptyNotifications/>}
                {!isEmpty &&
                <>
                    <Notifications view={view} data-testid="notifications-#JJHSnxcksjSXX@"/>
                    {view == 'COMPACT' && <SeeAllButton data-testid="see-all-button-%%^^&)(()>?asd"/>}
                    {view == 'FULL' && <div className='z-10 mt-[30px] h-[120px] w-full'/>}
                </>
                }
            </div>
        </div>
    );
}

// proptypes
NotificationsContainer.propTypes = {
    view: PropTypes.string,
};


/**
 * Empty Notifications
 * @return {JSX.Element} Empty Notifications
 * */
function EmptyNotifications() {
    const {addNotification} = useNotifications();
    const [community, setCommunity] = useState('');

    const suggestCommunity = async () => {
        const response = await axios.get(API_ROUTES.suggestCommunity);
        const data = response.data;
        return data;
    };

    useEffect(() => {
        const fetchCommunity = async () => {
            try {
                const response = await suggestCommunity();
                setCommunity(response.suggestedSubreddit.name);
            } catch (error) {
                addNotification({
                    type: 'error',
                    message: error.response?.data?.message || 'Failed to fetch subreddit data, please try again later.',
                });
            }
        };

        fetchCommunity();
    }, []);

    return (
        <div className="scrollbar-hide flex flex-col overflow-auto">
            <div action="view" >
                <div className="m-auto flex max-w-sm flex-col items-center py-4">
                    <img className="mb-8 max-h-[150px]" role="presentation"
                        src="https://www.redditstatic.com/shreddit/assets/snoovatar-full-hi.png"
                        alt="Image for an empty inbox"/>
                    <p className="m-0
                     mb-1 px-6 text-center text-[1.125rem]/[1.5rem]
                     font-semibold text-[var(--color-neutral-content-strong)]">
        You don&apos;t have any activity yet
                    </p>
                    <p className="m-0
                     mb-8 px-6 text-center text-[0.875rem]/[1.25rem]
                     font-normal text-[color:var(--color-secondary-weak)]">
         That&apos;s okay, maybe you just need the right inspiration.
      Check out r/CasualConversation, a popular community for discussion.
                    </p>
                    <div className="box-border
                    flex w-full
                     justify-center border-x-0 border-b-0 border-t-[0.0625rem] border-solid
                      border-[var(--color-neutral-border-weak)] px-6 pt-4">
                        <a className="!hover:no-underline
                         !focus:no-underline !active:no-underline seeall-button-medium
                         seeall-button-secondary
                         seeall-button
                        inline-flex w-full
                        items-center
                        justify-center px-[var(--rem14)]
                        font-semibold !no-underline "
                        href={`/r/${community}`}
                        disabled={!community}
                        >
                            <span className="flex items-center justify-center">
                                <span className="flex
                                items-center gap-2">
                                    {community? `Visit r/${community}` : 'loading...'}
                                </span>
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
