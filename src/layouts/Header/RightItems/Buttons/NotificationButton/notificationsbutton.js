import React from 'react';
import {getIconComponent} from '../../../../../generic components/iconsmap.js';
import {NotificationsContainer} from './Notifications/notificationscontainer.js';
import {actionButtonClasses as styles} from '../buttons.styles.js';
import {useNotificationsButtons} from './notificationsbuttoncontext.js';
import '../../../appbar.css';
import './notificationsbutton.css';

/**
 * @component
 * @return {JSX.Element} The button component
 */
function NotificationButton() {
    const Icon = getIconComponent('low', false);
    const [isVisible, setIsVisible] = React.useState(false);
    const {unreadNotifications} = useNotificationsButtons();

    const handleClick = () => {
        setIsVisible(!isVisible);
    };

    return (
        <div className='relative m-0 p-0' datatestid="notif-button-outer-continer-#TDSF&YOISNADJA(D*">
            <button className={`${styles.root} relative top-1`}
                onClick={handleClick} data-testid={`action-button-low-##33443@@-geso`}>
                <span className={styles.iconContainer} data-testid={`action-button-icon-container-low-#534#@_90-gesoo`}>
                    {unreadNotifications != 0 &&
                   <span className="_1-nIsCaWhGBFN-L4ZHnbGp">
                       {unreadNotifications}
                   </span>}
                    <Icon />
                </span>
            </button>
            { isVisible && <NotificationsContainer/>}
        </div>
    );
}

export {NotificationButton};
