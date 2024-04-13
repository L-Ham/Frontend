import React from 'react';
import PropTypes from 'prop-types';
import {classes} from './createpostbutton.styles.js';

/**
 * Renders the create post button.
 * @param {object} props The component props.
 * @param {Function} props.handleCreatePost The create post handler.
 * @param {JSX.Element} props.PlusIcon The Plus icon.
 * @return {JSX.Element} The rendered component.
 */
export function CreatePostButton({handleCreatePost, PlusIcon}) {
    return (
        <span className={classes.container}>
            <a
                className={`${classes.createPostButton}`}
                onClick={handleCreatePost}
            >
                <span className={classes.flexContainer}>
                    <span className={classes.iconWrapper}>
                        <PlusIcon/>
                    </span>
                    <span className={classes.textWrapper}>Create a post</span>
                </span>
            </a>
        </span>
    );
}

CreatePostButton.propTypes = {
    handleCreatePost: PropTypes.func.isRequired,
    PlusIcon: PropTypes.elementType.isRequired,
};
