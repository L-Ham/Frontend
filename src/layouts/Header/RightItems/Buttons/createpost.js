import React from 'react';
import {getIconComponent} from '../../../../generic components/iconsmap';
import {createPostButtonClasses as styles} from './buttons.styles';
import PropTypes from 'prop-types';

/**
 * Create post component
 * @component
 * @param {string} href - The href for the create post component
 * @example
 * // Render the create post component
 * <CreatePost />
 * @return {JSX.Element} The create post component
 */
function CreatePost({href='#'}) {
    const CreatePostIcon = getIconComponent('create-post', false);
    return (
        <a href={href} className={styles.root}>
            <span className={styles.content}>
                <span className={styles.iconContainer}>
                    <CreatePostIcon />
                </span>
                <span className={styles.label}>
                    Create
                </span>
            </span>
        </a>
    );
}

CreatePost.propTypes = {
    href: PropTypes.string,
};

export {CreatePost};
