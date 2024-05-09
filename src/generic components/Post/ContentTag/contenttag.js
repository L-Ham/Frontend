import React from 'react';
import PropTypes from 'prop-types';
import {getIconComponent} from '../../iconsmap.js';

/**
 * Content Tag component displays NSFW and Spoiler
 * tags above the post title
 * @param {object} props - The props object
 * @param {string} postId - The post id
 * @return {JSX.Element} - ContentTag component
 */
export function ContentTag({isNSFW, isSpoiler, postId}) {
    if (!isNSFW && !isSpoiler) return null;
    const NSFWIcon = getIconComponent('nsfw');
    const SpoilerIcon = getIconComponent('spoiler');
    return (
        <div
            className="inline-flex gap-2"
            data-testid={`content-tag-${postId}`}
        >
            {isNSFW && (
                <span className='inline-block h-6'>
                    <span className={`flex items-center gap-1 text-[var(--color-category-nsfw)]`}
                        data-testid={`tag-wrapper-${postId}`}>
                        <span className='inline-block ' data-testid={`tag-icon-${postId}`}>
                            <NSFWIcon />
                        </span>
                        <span className='text-xs font-semibold uppercase leading-4'
                            data-testid={`tag-text-${postId}`}>
                            NSFW
                        </span>
                    </span>
                </span>
            )}
            {isSpoiler && (
                <span className='inline-block h-6'>
                    <span className={`flex items-center gap-1 text-[var(--color-category-spoiler)]`}
                        data-testid={`tag-wrapper-${postId}`}>
                        <span className='inline-block ' data-testid={`tag-icon-${postId}`}>
                            <SpoilerIcon />
                        </span>
                        <span className='text-xs font-semibold uppercase leading-4'
                            data-testid={`tag-text-${postId}`}>
                            Spoiler
                        </span>
                    </span>
                </span>
            )}
        </div>
    );
}

ContentTag.propTypes = {
    isNSFW: PropTypes.bool.isRequired,
    isSpoiler: PropTypes.bool.isRequired,
    postId: PropTypes.string.isRequired,
};
