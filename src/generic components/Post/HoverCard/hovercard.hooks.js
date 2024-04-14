import {useState, useEffect} from 'react';
import {getIconComponent} from '../../iconsmap';
import {VIEW_CONTEXTS} from '../data.js';
export const useHoverCard = ({entityName, viewContext, isUser}) => {
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
    const isUserOnCommentPage = viewContext === VIEW_CONTEXTS.COMMENTS_PAGE && isUser;
    if (!isUserOnCommentPage) {
        entityName = isUser ? 'u/' + entityName : 'r/' + entityName;
    }
    const DefaultSubredditIcon = getIconComponent('default-subreddit');
    return {
        handlePopoverOpen,
        handlePopoverClose,
        DefaultSubredditIcon,
        overlayOpen,
        prefixedName: entityName,
    };
};
