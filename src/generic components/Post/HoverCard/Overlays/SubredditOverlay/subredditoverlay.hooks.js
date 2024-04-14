import {DATA, VIEW_CONTEXTS} from '../../../data.js';
import {overlayClasses} from './subredditoverlay.styles.js';

export const useSubredditOverlay = ({subredditName, viewContext}) => {
    // request
    const {bannerImage, isMember, description, membersCount, avatarImage,
        membersNickname, currentlyViewingCount, currentlyViewingNickname} = DATA[subredditName];
    const rootClasses = `${overlayClasses.root} ${viewContext === VIEW_CONTEXTS.COMMENTS_PAGE ?
        overlayClasses.commentsContext : overlayClasses.defaultContext}`;
    return {
        subredditPrefixedName: 'r/' + subredditName,
        bannerImage,
        isMember,
        description,
        avatarImage,
        membersCount,
        membersNickname,
        currentlyViewingCount,
        currentlyViewingNickname,
        rootClasses,
    };
};
