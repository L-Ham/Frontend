import {useState, useEffect} from 'react';
import {getIconComponent} from '../../iconsmap';
import {VIEW_CONTEXTS} from '../data.js';
import React from 'react';

export const useHoverCard = ({entityData, viewContext, isUser}) => {
    const [overlayOpen, setOverlayOpen] = useState(false);
    const [hoverTimer, setHoverTimer] = useState(null);
    const DefaultSubredditIcon = getIconComponent('default-subreddit');
    const avatar = isUser ? entityData.avatar || require('../../../assets/images/avatar_default_0.png'):
        entityData.avatarImage;
    let DisplayIcon = null;
    if (avatar) {
        DisplayIcon = <img src={avatar} alt='Icon' className='size-6 rounded-full'/>;
    } else {
        DisplayIcon = <DefaultSubredditIcon viewBox="0 0 20 20"
            width="25"
            height="25"
            fill="currentColor"
        />;
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
    let entityName = isUser ? entityData.username : entityData.name;
    if (!isUserOnCommentPage) {
        entityName = isUser ? 'u/' + entityName : 'r/' + entityName;
    }
    const entityId = isUser ? entityData.userId : entityData.subredditId;
    const url = isUser ? '/user/' + entityData.username : '/r/' + entityData.name;
    return {
        handlePopoverOpen,
        handlePopoverClose,
        url,
        DisplayIcon,
        overlayOpen,
        prefixedName: entityName,
        entityId,
    };
};
