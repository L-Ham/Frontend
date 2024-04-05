import {DATA, VIEW_CONTEXTS} from '../../../data.js';
import {overlayClasses} from './useroverlay.styles';
export const useUserOverlay = ({userId, viewContext}) => {
    const {display_name_prefixed: namePrefixed, name, created, snoovatar_img: avatar,
        comment_karma: commentKarma, link_karma: linkKarma, is_friend: isFriend,
        public_description: publicDescription} = DATA[userId];
    const classNames = `${overlayClasses.root} ${viewContext === VIEW_CONTEXTS.COMMENTS_PAGE ?
        overlayClasses.commentsContext : overlayClasses.defaultContext}`;
    return {
        namePrefixed,
        name,
        created,
        avatar,
        commentKarma,
        linkKarma,
        isFriend,
        publicDescription,
        classNames,
    };
};
