import React from 'react';
import {useState} from 'react';
import {getIconComponent} from '../../../../../generic components/iconsmap.js';
import {useNotifications} from '../../../../../generic components/Notifications/notificationsContext.js';

export const useNotificationFrequencyControl = ({notificationLevel, setNotificationLevel}) => {
    const {addNotification} = useNotifications();
    const [isNotificationLevelsVisible, setIsNotificationLevelsVisible] = useState(false);

    const FrequentIcon = getIconComponent('frequent', notificationLevel === 'frequent');
    const LowIcon = getIconComponent('low', notificationLevel === 'low');
    const OffIcon = getIconComponent('off', notificationLevel === 'off');

    const NotificationLevelIcon = notificationLevel ? getIconComponent(notificationLevel, true) :
        getIconComponent('low', true);


    const menuItems = [
        {
            content: {
                text: 'Frequent', icon: <FrequentIcon/>,
            },
            onClick: () => {
                try {
                    setNotificationLevel('frequent');
                    setIsNotificationLevelsVisible(false);
                    // todo add request to set notification level
                    addNotification({type: 'success', message: 'Notification level set to frequent'});
                } catch (error) {
                    addNotification({type: 'error', message: error.response.data.message});
                }
            },
        },
        {
            content: {
                text: 'Low', icon: <LowIcon/>,
            },
            onClick: () => {
                try {
                    setNotificationLevel('low');
                    setIsNotificationLevelsVisible(false);
                    // todo add request to set notification level
                    addNotification({type: 'success', message: 'Notification level set to low'});
                } catch (error) {
                    addNotification({type: 'error', message: error.response.data.message});
                }
            },
        },
        {
            content: {
                text: 'Off', icon: <OffIcon/>,
            },
            onClick: () => {
                try {
                    setNotificationLevel('off');
                    setIsNotificationLevelsVisible(false);
                    // todo add request to set notification level
                    addNotification({type: 'success', message: 'Notification level set to off'});
                } catch (error) {
                    addNotification({type: 'error', message: error.response.data.message});
                }
            },
        },
    ];

    const handleNotificationClick = () => {
        setIsNotificationLevelsVisible(!isNotificationLevelsVisible);
    };

    return {
        isNotificationLevelsVisible,
        NotificationLevelIcon,
        menuItems,
        handleNotificationClick,
    };
};
