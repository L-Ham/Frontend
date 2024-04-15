import React from 'react';
import PropTypes from 'prop-types';
import {CreatePostPageMain} from './CreatePostPageMain/createpostpagemain.js';
import {CreatePostPageSidebar} from './CreatePostPageSidebar/createpostpagesidebar.js';
import {CreatePostPageProvider} from './createpostpage.context.js';
import './createpostpage.css';

/**
 * Renders the subreddit.
 * @param {Object} props - The component props.
 * @param {string} props.name - The subreddit name.
 * @return {JSX.Element} The rendered component.
 */
export function CreatePostPage({name}) {
    return (
        <CreatePostPageProvider name={name}>
            <div className='create-post-page mx-auto my-0 box-border
            flex max-w-[1248px] justify-center border-0 bg-[var(--canvas)] min-[640px]:px-[24px] min-[640px]:py-[20px]'>
                <CreatePostPageMain />
                <CreatePostPageSidebar />
            </div>
        </CreatePostPageProvider>
    );
}

CreatePostPage.propTypes = {
    name: PropTypes.string.isRequired,
};


