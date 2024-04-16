import React from 'react';
import PropTypes from 'prop-types';
import {usePostTag} from './posttag.hooks.js';
import {btnClasses, iconClasses} from './posttag.styles.js';

/**
 * Renders the post tag.
 * @param {Object} props - The component props.
 * @param {string} props.tag - The tag.
 * @param {function} props.setPostTags - The function to set the post tags.
 * @param {boolean} props.isActive - Whether the tag is active.
 * @return {JSX.Element} The rendered component.
 */
export function PostTag({tag, setPostTags, isActive}) {
    const {handleTagClick, Icon} = usePostTag(tag, setPostTags, isActive);

    return (
        <button className={btnClasses(isActive, tag)} onClick={() => handleTagClick()} data-testid="post-tag-button">
            <Icon className={iconClasses(isActive)} data-testid="post-tag-icon" />
            <span data-testid="post-tag-span">{tag}</span>
        </button>
    );
}

PostTag.propTypes = {
    tag: PropTypes.string.isRequired,
    setPostTags: PropTypes.func.isRequired,
    isActive: PropTypes.bool.isRequired,
};
