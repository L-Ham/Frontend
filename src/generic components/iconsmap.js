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
import {ReactComponent as HomeIconOutline} from '../assets/icons/home-outline.svg';
import {ReactComponent as HomeIconFill} from '../assets/icons/home-fill.svg';
import {ReactComponent as PopularIconOutline} from '../assets/icons/popular-outline.svg';
import {ReactComponent as PopularIconFill} from '../assets/icons/popular-fill.svg';
import {ReactComponent as AllIconOutline} from '../assets/icons/all-outline.svg';
import {ReactComponent as AllIconFill} from '../assets/icons/all-fill.svg';
import {ReactComponent as SearchIconOutline} from '../assets/icons/search-outline.svg';
import {ReactComponent as RemoveIconOutline} from '../assets/icons/remove-outline.svg';
import {ReactComponent as HistoryIconOutline} from '../assets/icons/history-outline.svg';
import {ReactComponent as AddvertiseIconOutline} from '../assets/icons/advertise-outline.svg';
import {ReactComponent as MenuIconOutline} from '../assets/icons/menu-outline.svg';
import {ReactComponent as DarkModeIconOutline} from '../assets/icons/dark-mode-outline.svg';
import {ReactComponent as TrendingIconOutline} from '../assets/icons/trending-outline.svg';
import {ReactComponent as RedditLogo} from '../assets/icons/reddit-logo-outline.svg';
import {ReactComponent as RedditName} from '../assets/icons/reddit-name-outline.svg';
import {ReactComponent as CreatePostIcon} from '../assets/icons/create-outline.svg';
import {ReactComponent as AvatarStyleIconOutline} from '../assets/icons/avatar-style-outline.svg';
import {ReactComponent as LogoutIconOutline} from '../assets/icons/logout-outline.svg';
import {ReactComponent as PremiumIconOutline} from '../assets/icons/premium-outline.svg';
import {ReactComponent as SettingsIconOutline} from '../assets/icons/settings-outline.svg';
import {ReactComponent as WalletIconOutline} from '../assets/icons/wallet-outline.svg';
import {ReactComponent as StarIconOutline} from '../assets/icons/star-outline.svg';
import {ReactComponent as StarIconFill} from '../assets/icons/star-fill.svg';
import {ReactComponent as AdminIconOutline} from '../assets/icons/admin-outline.svg';
import {ReactComponent as TopicActivismIconOutline} from '../assets/icons/topic-activism-outline.svg';
import {ReactComponent as HelpIconOutline} from '../assets/icons/help-outline.svg';
import {ReactComponent as TopicReadingIconOutline} from '../assets/icons/topic-reading-outline.svg';
import {ReactComponent as TopicCareersIconOutline} from '../assets/icons/topic-careers-outline.svg';
import {ReactComponent as AuthorIconOutline} from '../assets/icons/author-outline.svg';
import {ReactComponent as CommunityIconOutline} from '../assets/icons/community-outline.svg';
import {ReactComponent as TopicHistoryIconOutline} from '../assets/icons/topic-history-outline.svg';
import {ReactComponent as TopicIconOutline} from '../assets/icons/topic-outline.svg';
import {ReactComponent as TopicEthicsIconOutline} from '../assets/icons/topic-ethics-outline.svg';
import {ReactComponent as TopicLawIconOutline} from '../assets/icons/topic-law-outline.svg';
import {ReactComponent as RulesIconOutline} from '../assets/icons/rules-outline.svg';
import {ReactComponent as AddIconOutline} from '../assets/icons/add-outline.svg';
import ArrowUpRoundedIcon from '@mui/icons-material/KeyboardArrowUpRounded';
import {ReactComponent as DizzySnooIconOutline} from '../assets/icons/dizzy-snoo-outline.svg';
import {ReactComponent as BigXIcon} from '../assets/icons/big-x.svg';

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
    'dizzy-snoo-outline': DizzySnooIconOutline,
    'back': BackIcon,
    'default-subreddit': DefaultSubredditIcon,
    'home-outline': HomeIconOutline,
    'home-fill': HomeIconFill,
    'popular-outline': PopularIconOutline,
    'popular-fill': PopularIconFill,
    'all-outline': AllIconOutline,
    'all-fill': AllIconFill,
    'search-outline': SearchIconOutline,
    'remove-outline': RemoveIconOutline,
    'history-outline': HistoryIconOutline,
    'advertise-outline': AddvertiseIconOutline,
    'create-post-outline': CreatePostIcon,
    'menu-outline': MenuIconOutline,
    'night-outline': DarkModeIconOutline,
    'trending-outline': TrendingIconOutline,
    'arrow-up-outline': ArrowUpRoundedIcon,
    'reddit-logo-outline': RedditLogo,
    'reddit-name-outline': RedditName,
    'avatar-style-outline': AvatarStyleIconOutline,
    'logout-outline': LogoutIconOutline,
    'premium-outline': PremiumIconOutline,
    'settings-outline': SettingsIconOutline,
    'wallet-outline': WalletIconOutline,
    'star-outline': StarIconOutline,
    'star-fill': StarIconFill,
    'admin-outline': AdminIconOutline,
    'topic-activism-outline': TopicActivismIconOutline,
    'help-outline': HelpIconOutline,
    'topic-reading-outline': TopicReadingIconOutline,
    'topic-career-outline': TopicCareersIconOutline,
    'author-outline': AuthorIconOutline,
    'community-outline': CommunityIconOutline,
    'topic-history-outline': TopicHistoryIconOutline,
    'topic-outline': TopicIconOutline,
    'topic-ethics-outline': TopicEthicsIconOutline,
    'topic-law-outline': TopicLawIconOutline,
    'rules-outline': RulesIconOutline,
    'add-outline': AddIconOutline,
    'big-x': BigXIcon,
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
