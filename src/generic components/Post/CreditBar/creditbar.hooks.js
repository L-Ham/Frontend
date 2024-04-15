import React from 'react';
import {getIconComponent} from '../../iconsmap.js';
import {VIEW_CONTEXTS} from '../data.js';
import {creditBarClasses} from './creditbar.styles.js';
import {useNavigate} from 'react-router-dom';
export const useCreditBar = ({subredditName, avatarImage, viewContext}) => {
    const navigate = useNavigate();
    const rootClassNames = viewContext === VIEW_CONTEXTS.COMMENTS_PAGE ?
        creditBarClasses.rootC :
        creditBarClasses.root;

    const DefaultSubredditIcon = getIconComponent('default-subreddit');
    const Icon = avatarImage ? <img src={avatarImage} alt='Icon' className='rounded-full' />:
        <DefaultSubredditIcon width="32" height="32"/>;
    /**
     * Handles the redirect to a subreddit.
     * @param {Event} event - The event object.
     */
    function handleSubredditRedirect(event) {
        event.stopPropagation();
        // act as anchor with href subredditName
        navigate('/r/' + subredditName);
    }

    return {
        handleSubredditRedirect,
        rootClassNames,
        Icon,
    };
};
