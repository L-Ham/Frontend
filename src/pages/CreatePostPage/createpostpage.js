import React from 'react';
import PropTypes from 'prop-types';
import {CreatePostPageMain} from './CreatePostPageMain/createpostpagemain.js';
import {CreatePostPageSidebar} from './CreatePostPageSidebar/createpostpagesidebar.js';
import {CreatePostPageProvider} from './createpostpage.context.js';
import './createpostpage.css';
import {classes} from './createpostpage.styles.js';

/**
 * Renders the subreddit.
 * @param {Object} props - The component props.
 * @param {string} props.name - The subreddit name.
 * @return {JSX.Element} The rendered component.
 */
export function CreatePostPage({name}) {
    return (
        <CreatePostPageProvider name={name} data-testid="create-post-page-provider">
            <div className={classes.div} data-testid="main-div">
                <CreatePostPageMain data-testid="create-post-page-main" />
                <CreatePostPageSidebar data-testid="create-post-page-sidebar" />
            </div>
        </CreatePostPageProvider>
    );
}

CreatePostPage.propTypes = {
    name: PropTypes.string.isRequired,
};


