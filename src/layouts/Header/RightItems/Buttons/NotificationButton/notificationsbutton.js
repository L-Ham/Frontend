import React from 'react';
import {getIconComponent} from '../../../../../generic components/iconsmap.js';
import {NotificationsContainer} from './Notifications/notificationscontainer.js';
import {actionButtonClasses as styles} from '../buttons.styles.js';
import '../../../appbar.css';

/**
 * @component
 * @return {JSX.Element} The button component
 */
function NotificationButton() {
    const Icon = getIconComponent('low', false);
    const [isVisible, setIsVisible] = React.useState(false);

    const handleClick = () => {
        setIsVisible(!isVisible);
    };

    return (
        <div className='relative m-0 p-0' datatestid="notif-button-outer-continer-#TDSF&YOISNADJA(D*">
            <button className={styles.root} onClick={handleClick} data-testid={`action-button-low-##33443@@-geso`}>
                <span className={styles.iconContainer} data-testid={`action-button-icon-container-low-#534#@_90-gesoo`}>
                    <Icon />
                </span>
            </button>
            { isVisible && <NotificationsContainer/>}
        </div>
    );
}

export {NotificationButton};
