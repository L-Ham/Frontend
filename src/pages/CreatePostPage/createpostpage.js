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
        <CreatePostPageProvider name={name}>
            <div className={classes.div}>
                <CreatePostPageMain />
                <CreatePostPageSidebar />
            </div>
        </CreatePostPageProvider>
    );
}

CreatePostPage.propTypes = {
    name: PropTypes.string.isRequired,
};


