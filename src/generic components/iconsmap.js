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
import {ReactComponent as DefaultSubredditIcon} from '../assets/icons/default-subreddit.svg';
import {ReactComponent as CommentsIconOutline} from '../assets/icons/comments-outline.svg';
import {ReactComponent as ShareIconOutline} from '../assets/icons/share-outline.svg';
import {ReactComponent as UpvoteIconOutline} from '../assets/icons/upvote-outline.svg';
import {ReactComponent as DownvoteIconOutline} from '../assets/icons/downvote-outline.svg';
import {ReactComponent as CakeIconOutline} from '../assets/icons/cake-outline.svg';
import {ReactComponent as ChatIconOutline} from '../assets/icons/chat-outline.svg';
import {ReactComponent as UnfolowIconOutline} from '../assets/icons/unfollow-outline.svg';
import {ReactComponent as FollowIconOutline} from '../assets/icons/follow-outline.svg';
import {ReactComponent as BackIcon} from '../assets/icons/back.svg';
import {ReactComponent as ThreeDotsIconFill} from '../assets/icons/threedots-fill.svg';
import {ReactComponent as UploadIconOutline} from '../assets/icons/upload-outline.svg';

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
    'comments-outline': CommentsIconOutline,
    'share-outline': ShareIconOutline,
    'upvote-outline': UpvoteIconOutline,
    'downvote-outline': DownvoteIconOutline,
    'cake-outline': CakeIconOutline,
    'chat-outline': ChatIconOutline,
    'unfollow-outline': UnfolowIconOutline,
    'follow-outline': FollowIconOutline,
    'threedots-fill': ThreeDotsIconFill,
    'upload-outline': UploadIconOutline,
    'back': BackIcon,
    'default-subreddit': DefaultSubredditIcon,
};

/**
 * Returns the icon component for the dropdown menu item.
 * @param {string} iconName - The name of the icon.
 * @param {boolean} isFill - whether the icon is filled or outlined.
 * @return {JSX.Element} The icon component.
 */
export const getIconComponent = (iconName, isFill) => {
    if (!iconName) return null;
    const iconSuffix = isFill === undefined ? '' : (isFill ? '-fill' : '-outline');
    const IconComponent = ICONS_MAP[`${iconName}${iconSuffix}`];
    return IconComponent ? (props) => <IconComponent {...props} /> : null;
};
