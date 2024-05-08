import {VIEW_CONTEXTS} from '../../../data.js';
import {overlayClasses} from './subredditoverlay.styles.js';
export const useSubredditOverlay = ({subredditData, viewContext}) => {
    const {bannerImage, isMember, description, membersCount, avatarImage, subredditId,
        membersNickname, currentlyViewingCount, currentlyViewingNickname, name} = subredditData;
    const rootClasses = `${overlayClasses.root} ${viewContext === VIEW_CONTEXTS.COMMENTS_PAGE ?
        overlayClasses.commentsContext : overlayClasses.defaultContext}`;
    return {
        subredditPrefixedName: 'r/' + name,
        bannerImage,
        isMember,
        description,
        avatarImage,
        membersCount,
        membersNickname,
        currentlyViewingCount,
        currentlyViewingNickname,
        subredditId,
        rootClasses,
    };
};
