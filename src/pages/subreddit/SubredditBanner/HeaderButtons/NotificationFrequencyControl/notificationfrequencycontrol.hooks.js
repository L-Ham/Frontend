import React from 'react';
import {useState} from 'react';
import {getIconComponent} from '../../../../../generic components/iconsmap.js';

export const useNotificationFrequencyControl = ({notificationLevel, setNotificationLevel}) => {
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
            onClick: () => setNotificationLevel('frequent'),
        },
        {
            content: {
                text: 'Low', icon: <LowIcon/>,
            },
            onClick: () => setNotificationLevel('low'),
        },
        {
            content: {
                text: 'Off', icon: <OffIcon/>,
            },
            onClick: () => setNotificationLevel('off'),
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
