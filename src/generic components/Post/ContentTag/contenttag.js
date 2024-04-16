import React from 'react';
import PropTypes from 'prop-types';
import {getIconComponent} from '../../iconsmap.js';

/**
 * Content Tag component displays NSFW and Spoiler
 * tags above the post title
 * @param {string} tag - NSFW or Spoiler
 * @param {string} postId - The post id
 * @return {JSX.Element} - ContentTag component
 */
export function ContentTag({tag, postId}) {
    if (tag !== 'nsfw' && tag !== 'spoiler') return null;
    const Icon = getIconComponent(tag);
    return (
        <div
            className="inline-flex gap-2"
            data-testid={`content-tag-${postId}`}
        >
            <span className='inline-block h-6'>
                <span className={`flex items-center gap-1 ${tag==='nsfw' ?
                    'text-[var(--color-category-nsfw)]':'text-[var(--color-category-spoiler)]'}`}
                data-testid={`tag-wrapper-${postId}`}>
                    <span className='inline-block ' data-testid={`tag-icon-${postId}`}>
                        <Icon />
                    </span>
                    <span className='text-xs font-semibold uppercase leading-4'
                        data-testid={`tag-text-${postId}`}>
                        {tag}
                    </span>
                </span>
            </span>
        </div>
    );
}

ContentTag.propTypes = {
    tag: PropTypes.string.isRequired,
    postId: PropTypes.string.isRequired,
};
