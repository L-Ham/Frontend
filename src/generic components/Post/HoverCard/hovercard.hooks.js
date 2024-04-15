import {useState, useEffect} from 'react';
import {getIconComponent} from '../../iconsmap';
import {DATA, VIEW_CONTEXTS} from '../data.js';
import React from 'react';
export const useHoverCard = ({entityName, entityId, viewContext, isUser}) => {
    const [overlayOpen, setOverlayOpen] = useState(false);
    const [hoverTimer, setHoverTimer] = useState(null);
    const DefaultSubredditIcon = getIconComponent('default-subreddit');
    let DisplayIcon =
    <DefaultSubredditIcon viewBox="0 0 20 20"
        width="25"
        height="25"
        fill="currentColor"
    />;
    if (isUser) {
        const {displayName, avatar} = DATA[entityId];
        entityName = displayName;
        DisplayIcon = <img src={avatar || require('../../../assets/images/avatar_default_0.png')}
            alt='avatar' className='size-6 rounded-full'/>;
    }
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
    return {
        handlePopoverOpen,
        handlePopoverClose,
        DisplayIcon,
        overlayOpen,
        prefixedName: entityName,
    };
};
