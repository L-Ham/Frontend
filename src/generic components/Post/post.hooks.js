import {VIEW_CONTEXTS} from './data.js';
import {postClasses} from './post.styles.js';
export const usePost = ({isNSFW, isSpoiler, viewContext}) => {
    // viewContexts: AggregateFeed, CommentsPage, SubredditFeed
    // postTypes: gallery, text, image, link, video, multiMedia
    // viewType: cardView, compactView
    const isCommentsPage = viewContext === VIEW_CONTEXTS.COMMENTS_PAGE;
    const classNames = `${postClasses.root} ${isCommentsPage ? '' : postClasses.rootC}`;
    const tag = isNSFW ? 'nsfw' : isSpoiler ? 'spoiler' : '';
    return {
        isCommentsPage,
        classNames,
        tag,
    };
};
