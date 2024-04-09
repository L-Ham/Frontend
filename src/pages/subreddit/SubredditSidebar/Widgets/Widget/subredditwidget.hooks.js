import {classes} from './subredditwidget.styles.js';
import {VIEW_CONTEXTS} from './viewcontexts.js'; // import the constants

export const useSubredditWidget = ({view}) => {
    let viewClasses;

    switch (view) {
    case VIEW_CONTEXTS.NORMAL:
        viewClasses = classes.normal;
        break;
    case VIEW_CONTEXTS.BOOKMARKS:
        viewClasses = classes.bookmarks;
        break;
    case VIEW_CONTEXTS.COMMUNITY_DETAILS:
        viewClasses = classes.communityDetails;
        break;
    default:
        viewClasses = classes.normal;
    }

    return {
        viewClasses,
    };
};
