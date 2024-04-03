import React from 'react';
import {getIconComponent} from '../../iconsmap.js';
import {DATA, VIEW_CONTEXTS} from '../data.js';
import {creditBarClasses} from './creditbar.styles.js';
import {useNavigate} from 'react-router-dom';
export const useCreditBar = ({postId, viewContext}) => {
    const navigate = useNavigate();
    const {created, subreddit_id: subredditId, author_fullname: authorId} = DATA[postId];
    const {display_name_prefixed: subredditPrefixedName, icon} = DATA[subredditId];
    const rootClassNames = viewContext === VIEW_CONTEXTS.COMMENTS_PAGE ?
        creditBarClasses.rootC :
        creditBarClasses.root;

    const DefaultSubredditIcon = getIconComponent('default-subreddit');
    const SubredditIcon = <img src={icon} alt='Subreddit Icon' className='rounded-full' />;
    /**
     * Handles the redirect to a subreddit.
     * @param {Event} event - The event object.
     */
    function handleSubredditRedirect(event) {
        event.stopPropagation();
        // act as anchor with href subredditPrefixedName
        navigate(subredditPrefixedName);
    }

    return {
        rootClassNames,
        handleSubredditRedirect,
        DefaultSubredditIcon,
        SubredditIcon,
        subredditId,
        authorId,
        created,
    };
};
