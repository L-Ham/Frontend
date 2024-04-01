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
import {ReactComponent as ExternalIconOutline} from '../assets/icons/external-outline.svg';
import {ReactComponent as HomeIconOutline} from '../assets/icons/home-outline.svg';
import {ReactComponent as HomeIconFill} from '../assets/icons/home-fill.svg';
import {ReactComponent as PopularIconOutline} from '../assets/icons/popular-outline.svg';
import {ReactComponent as PopularIconFill} from '../assets/icons/popular-fill.svg';
import {ReactComponent as AllIconOutline} from '../assets/icons/all-outline.svg';
import {ReactComponent as AllIconFill} from '../assets/icons/all-fill.svg';
import {ReactComponent as SearchIconOutline} from '../assets/icons/search-outline.svg';
import {ReactComponent as RemoveIconOutline} from '../assets/icons/remove-outline.svg';
import {ReactComponent as HistoryIconOutline} from '../assets/icons/history-outline.svg';
import {ReactComponent as ChatIconOutline} from '../assets/icons/chat-outline.svg';
import {ReactComponent as AddvertiseIconOutline} from '../assets/icons/advertise-outline.svg';
import {ReactComponent as InboxIconOutline} from '../assets/icons/inbox-outline.svg';
import {ReactComponent as MenuIconOutline} from '../assets/icons/menu-outline.svg';
import {ReactComponent as DarkModeIconOutline} from '../assets/icons/dark-mode-outline.svg';
import {ReactComponent as TrendingIconOutline} from '../assets/icons/trending-outline.svg';
import {ReactComponent as RedditLogo} from '../assets/icons/reddit-logo-outline.svg';
import {ReactComponent as RedditName} from '../assets/icons/reddit-name-outline.svg';
import {ReactComponent as CreatePostIcon} from '../assets/icons/create-outline.svg';
import ArrowUpRoundedIcon from '@mui/icons-material/KeyboardArrowUpRounded';


// icons map
const ICONS_MAP = {
    'low-fill': NotificationIconFill,
    'frequent-fill': NotificationFrequentIconFill,
    'off-fill': NotificationOffIconFill,
    'low-outline': NotificationIconOutline,
    'frequent-outline': NotificationFrequentIconOutline,
    'off-outline': NotificationOffIconOutline,
    'plus-fill': PlusIconFill,
    'online-fill': OnlineIcon,
    'overflow-horizontal-outline': OverflowHorizontalIconOutline,
    'caret-down-outline': CaretDownIconOutline,
    'message-outline': MessageIconOutline,
    'edit-outline': EditIconOutline,
    'external-outline': ExternalIconOutline,
    'home-outline': HomeIconOutline,
    'home-fill': HomeIconFill,
    'popular-outline': PopularIconOutline,
    'popular-fill': PopularIconFill,
    'all-outline': AllIconOutline,
    'all-fill': AllIconFill,
    'search-outline': SearchIconOutline,
    'remove-outline': RemoveIconOutline,
    'history-outline': HistoryIconOutline,
    'chat-outline': ChatIconOutline,
    'advertise-outline': AddvertiseIconOutline,
    'create-post-outline': CreatePostIcon,
    'inbox-outline': InboxIconOutline,
    'menu-outline': MenuIconOutline,
    'night-outline': DarkModeIconOutline,
    'trending-outline': TrendingIconOutline,
    'arrow-up-outline': ArrowUpRoundedIcon,
    'reddit-logo-outline': RedditLogo,
    'reddit-name-outline': RedditName,
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
    IconComponent ? console.log(IconComponent) : console.log('icon not found');
    return IconComponent ? (props) => <IconComponent {...props} /> : null;
};
