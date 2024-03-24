import React from 'react';

// icons pathes
import {ReactComponent as NotificationIconFill} from '../assets/icons/notification-fill.svg';
import {ReactComponent as NotificationFrequentIconFill} from '../assets/icons/notification-frequent-fill.svg';
import {ReactComponent as NotificationOffIconFill} from '../assets/icons/notification-off-fill.svg';
import {ReactComponent as NotificationIconOutline} from '../assets/icons/notification-outline.svg';
import {ReactComponent as NotificationFrequentIconOutline} from '../assets/icons/notification-frequent-outline.svg';
import {ReactComponent as NotificationOffIconOutline} from '../assets/icons/notification-off-outline.svg';
import {ReactComponent as PlusIconFill} from '../assets/icons/plus-fill.svg';
import {ReactComponent as OnlineIcon} from '../assets/icons/online.svg';
import {ReactComponent as OverflowHorizontalIconOutline} from '../assets/icons/overflow-horizontal-outline.svg';
import {ReactComponent as CaretDownIconOutline} from '../assets/icons/caret-down-outline.svg';
import {ReactComponent as MessageIconOutline} from '../assets/icons/message-outline.svg';
import {ReactComponent as EditIconOutline} from '../assets/icons/edit-outline.svg';

// icons map
const ICONS_MAP = {
    'Low-fill': NotificationIconFill,
    'Frequent-fill': NotificationFrequentIconFill,
    'Off-fill': NotificationOffIconFill,
    'Low-outline': NotificationIconOutline,
    'Frequent-outline': NotificationFrequentIconOutline,
    'Off-outline': NotificationOffIconOutline,
    'plus-fill': PlusIconFill,
    'online-fill': OnlineIcon,
    'overflow-horizontal-outline': OverflowHorizontalIconOutline,
    'caret-down-outline': CaretDownIconOutline,
    'message-outline': MessageIconOutline,
    'edit-outline': EditIconOutline,
};

/**
 * Returns the icon component for the dropdown menu item.
 * @param {string} iconName - The name of the icon.
 * @param {boolean} isFill - whether the icon is filled or outlined.
 * @return {JSX.Element} The icon component.
 */
export const getIconComponent = (iconName, isFill) => {
    if (!iconName) return null;
    const iconSuffix = isFill ? '-fill' : '-outline';
    const IconComponent = ICONS_MAP[`${iconName}${iconSuffix}`];
    return IconComponent ? (props) => <IconComponent {...props} /> : null;
};
