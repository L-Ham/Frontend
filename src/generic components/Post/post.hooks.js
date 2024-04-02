import {DATA, VIEW_CONTEXTS} from './data.js';
import {postClasses} from './post.styles.js';
export const usePost = ({postId, viewContext}) => {
    const {title, permalink} = DATA[postId];
    // viewContexts: AggregateFeed, CommentsPage, SubredditFeed
    // postTypes: gallery, text, image, link, video
    const isCommentsPage = viewContext === VIEW_CONTEXTS.COMMENTS_PAGE;
    const classNames = `${postClasses.root} ${isCommentsPage ? postClasses.rootC : ''}`;

    return {
        title,
        permalink,
        isCommentsPage,
        classNames,
    };
};
