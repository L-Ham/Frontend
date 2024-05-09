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
    if (!PlusIcon) return null;
    return (
        <span className={classes.container} data-testid="container">
            <a
                className={`${classes.createPostButton}`}
                onClick={handleCreatePost}
                data-testid="create-post-button"
            >
                <span className={classes.flexContainer} data-testid="flex-container">
                    <span className={classes.iconWrapper} data-testid="icon-wrapper">
                        <PlusIcon/>
                    </span>
                    <span className={classes.textWrapper} data-testid="text-wrapper">Create a post</span>
                </span>
            </a>
        </span>
    );
}

CreatePostButton.propTypes = {
    handleCreatePost: PropTypes.func.isRequired,
    PlusIcon: PropTypes.elementType.isRequired,
};
