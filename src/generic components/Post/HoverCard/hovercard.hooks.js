import {useState, useEffect} from 'react';
import {getIconComponent} from '../../iconsmap';
import {DATA, VIEW_CONTEXTS} from '../data.js';
export const useHoverCard = ({fullName, postId, viewContext}) => {
    const [overlayOpen, setOverlayOpen] = useState(false);
    const [hoverTimer, setHoverTimer] = useState(null);

    useEffect(() => {
    // Clean up the timer when the component unmounts
        return () => {
            if (hoverTimer) {
                clearTimeout(hoverTimer);
            }
        };
    }, [hoverTimer]);

    // time in ms
    const toOpen = 750;
    const toClose = 350;
    const handlePopoverOpen = () => {
        if (hoverTimer) {
            clearTimeout(hoverTimer);
        }
        if (overlayOpen) return;
        const timer = setTimeout(() => {
            setOverlayOpen(true);
        }, toOpen);
        setHoverTimer(timer);
    };

    const handlePopoverClose = () => {
        const timer = setTimeout(() => {
            setOverlayOpen(false);
        }, toClose);
        setHoverTimer(timer);
    };
    let {display_name_prefixed: prefixedName} = DATA[fullName];
    const {subreddit_id: subredditId, author_fullname: authorId} = DATA[postId];
    const isUser = fullName[1] === '2';
    const isUserOnCommentPage = viewContext === VIEW_CONTEXTS.COMMENTS_PAGE && isUser;
    if (isUserOnCommentPage) {
        prefixedName = prefixedName.replace('u/', '');
    }
    const DefaultSubredditIcon = getIconComponent('default-subreddit');
    return {
        handlePopoverOpen,
        handlePopoverClose,
        DefaultSubredditIcon,
        overlayOpen,
        prefixedName,
        subredditId,
        authorId,
        isUser,
    };
};
