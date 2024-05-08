import React from 'react';
import {useCreatePost} from './buttons.hooks.js';
import {createPostButtonClasses as styles} from './buttons.styles.js';

/**
 * Create post component
 * @component
 * @example
 * // Render the create post component
 * <CreatePost />
 * @return {JSX.Element} The create post component
 */
function CreatePost() {
    const {CreatePostIcon, href} = useCreatePost();
    return (
        <a href={href} className={styles.root} data-testid="appbar-create-post">
            <span className={styles.content} data-testid="create-post-content">
                <span className={styles.iconContainer} data-testid="create-post-icon-container">
                    <CreatePostIcon />
                </span>
                <span className={styles.label} data-testid="create-post-label">
                    Create
                </span>
            </span>
        </a>
    );
}

export {CreatePost};
