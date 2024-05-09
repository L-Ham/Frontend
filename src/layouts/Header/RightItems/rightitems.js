import React from 'react';
import {AdvertiseButton} from './Buttons/advertisebutton.js';
import {ActionButton} from './Buttons/actionbutton.js';
import {CreatePost} from './Buttons/createpost.js';
import {ProfileMenu} from './ProfileMenu/profilemenu.js';
import {rightItemsClasses as styles} from './rightitems.styles.js';
import {NotificationButton} from './Buttons/NotificationButton/notificationsbutton.js';
import {NotificationsButtonProvider} from './Buttons/NotificationButton/notificationsbuttoncontext.js';

/**
 * The right items of the header
 * @component
 * @example
 * // Render the right items of the header
 * <RightItems />
 * @return {JSX.Element} The right items of the header
 */
function RightItems() {
    return (
        <div className={styles.root} data-testid='right-items'>
            <div className={styles.buttonsContainer}>
                <AdvertiseButton />
                <ActionButton icon='chat' onClick={() => alert('Chat button clicked')}/>
                <CreatePost />
                <NotificationsButtonProvider >
                    <NotificationButton />
                </NotificationsButtonProvider>
            </div>
            <ProfileMenu />
        </div>
    );
}

export {RightItems};
