import React from 'react';
import {getIconComponent} from '../../iconsmap.js';
import {VIEW_CONTEXTS} from '../data.js';
import {creditBarClasses} from './creditbar.styles.js';
import {useNavigate} from 'react-router-dom';
export const useCreditBar = ({subredditData, userData, viewContext}) => {
    const navigate = useNavigate();
    const rootClassNames = viewContext === VIEW_CONTEXTS.COMMENTS_PAGE ?
        creditBarClasses.rootC :
        creditBarClasses.root;
    const DefaultSubredditIcon = getIconComponent('default-subreddit');
    // avatarImage is user avatar if viewContext is subreddit feed or subreddit name is not present
    // avatarImage is subreddit avatar otherwise
    const avatarImage = viewContext === VIEW_CONTEXTS.SUBREDDIT_FEED || subredditData.name == null ?
        userData.avatar || require('../../../assets/images/avatar_default_0.png') : subredditData.avatarImage;
    const Icon = avatarImage ? <img src={avatarImage} alt='Icon' className='size-8 rounded-full' />:
        <DefaultSubredditIcon width="32" height="32"/>;
    /**
     * Handles the redirect to a subreddit.
     * @param {Event} event - The event object.
     */
    function handleRedirect(event) {
        event.stopPropagation();
        // act as anchor with href subredditName
        const url = subredditData.name ? '/r/' + subredditData.name : '/user/' + userData.username;
        navigate(url);
    }

    return {
        handleRedirect,
        rootClassNames,
        Icon,
    };
};
