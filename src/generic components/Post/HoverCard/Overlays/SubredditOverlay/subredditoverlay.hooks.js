import {DATA, VIEW_CONTEXTS} from '../../../data.js';
import {overlayClasses} from './subredditoverlay.styles.js';

export const useSubredditOverlay = ({subredditId, viewContext}) => {
    const {display_name_prefixed: subredditPrefixedName, banner_background_image: bannerLink,
        user_is_subscriber: isSubscriber, public_description_html: publicDescription,
        membersCount, membersName, onlineCount, onlineName} = DATA[subredditId];
    const rootClasses = `${overlayClasses.root} ${viewContext === VIEW_CONTEXTS.COMMENTS_PAGE ?
        overlayClasses.commentsContext : overlayClasses.defaultContext}`;
    return {
        subredditPrefixedName,
        bannerLink,
        isSubscriber,
        publicDescription,
        membersCount,
        membersName,
        onlineCount,
        onlineName,
        rootClasses,
    };
};
