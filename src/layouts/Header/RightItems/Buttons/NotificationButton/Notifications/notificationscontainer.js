import React from 'react';
import {Menu} from './Menu/menu.js';
import {Notifications} from './Notifications/notifications.js';
import {SeeAllButton} from './SeeAllButton/seeallbutton.js';
import PropTypes from 'prop-types';

/**
 * Notifications Container
 * @param {string} view - view
 * @return {JSX.Element} Notifications Container
 * @constructor
 * */
export function NotificationsContainer({view = 'COMPACT'}) {
    const className = (view === 'COMPACT') ? `absolute right-0 top-[56px] -m-2
    w-[346px] min-w-[346px] max-w-[346px] overflow-hidden rounded-[15px]
    bg-[var(--color-tooltip-bg-neutral)] text-[var(--color-tooltip-text-neutral)]
    shadow-[0px_5px_13px_-1px_rgba(0,0,0,0.4)]` : 'flex flex-col overflow-hidden';

    return (
        <div className={className} data-testid="container-#235@SCC">
            <div className='flex flex-col overflow-hidden' data-testid="flex-container-#142DS@@#">
                <Menu view={view} data-testid="menu-@$DFS%^^&"/>
                <Notifications view={view} data-testid="notifications-#JJHSnxcksjSXX@"/>
                {view == 'COMPACT' && <SeeAllButton data-testid="see-all-button-%%^^&)(()>?asd"/>}
            </div>
        </div>
    );
}

// proptypes
NotificationsContainer.propTypes = {
    view: PropTypes.string,
};
