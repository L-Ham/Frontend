import React from 'react';
import PropTypes from 'prop-types';
import './notification.css';
import {classes} from './notification.styles.js';
import {useNotification} from './notification.hooks.js';

/**
 * Renders the Notification component.
 * @param {Object} props The props.
 * @param {Object} props.notification The notification object.
 * @param {Function} props.onClose The function to call when the close button is clicked.
 * @return {JSX.Element} The rendered component.
 */
export function Notification({notification, onClose}) {
    if (!notification) return null;

    const {Icon, CloseIcon, handleClose} = useNotification({notification, onClose});
    const {type, message, id} = notification;

    return (
        <div data-testid="toaster-123@@#324sd"
            id = {`toaster-${id}`}
            className={`${classes.notificationContainer} ${type}`}
            style={{pointerEvents: 'auto'}} >
            <div data-testid="inner-container-124321asd12" className={classes.innerContainer}>
                <Icon data-testid="icon-container-#wqdqwd1212" className={classes.iconContainer}/>
                <span data-testid="message-container-#12eds" className={classes.messageContainer}>{message}</span>
            </div>
            <div data-testid="empty-div-1232#asd" className={classes.emptyDiv}></div>
            <CloseIcon data-testid="close-icon-ad##@$&@123sd" className={classes.closeIcon}
                onClick={handleClose}/>
        </div>
    );
}

Notification.propTypes = {
    notification: PropTypes.object.isRequired,
    onClose: PropTypes.func.isRequired,
};
