import {DATA, VIEW_CONTEXTS} from '../../../data.js';
import {overlayClasses} from './useroverlay.styles';
export const useUserOverlay = ({userId, viewContext}) => {
    // request
    const {avatar, username, created, description, postKarma, commentKarma, isFriend} = DATA[userId];
    const classNames = `${overlayClasses.root} ${viewContext === VIEW_CONTEXTS.COMMENTS_PAGE ?
        overlayClasses.commentsContext : overlayClasses.defaultContext}`;
    return {
        classNames,
        avatar,
        created,
        username,
        description,
        postKarma,
        commentKarma,
        isFriend,
    };
};
