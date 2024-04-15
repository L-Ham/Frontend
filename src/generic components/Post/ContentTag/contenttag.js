import React from 'react';
import PropTypes from 'prop-types';
import {getIconComponent} from '../../iconsmap.js';

/**
 * Content Tag component displays NSFW and Spoiler
 * tags above the post title
 * @param {string} tag - NSFW or Spoiler
 * @return {JSX.Element} - ContentTag component
 */
export function ContentTag({tag}) {
    if (tag !== 'nsfw' && tag !== 'spoiler') return null;
    const Icon = getIconComponent(tag);
    return (
        <div
            className="inline-flex gap-2"
            data-testid={`content-tag ${tag}`}
        >
            <span className='inline-block h-6'>
                <span className={`flex items-center gap-1 ${tag==='nsfw' ?
                    'text-[var(--color-category-nsfw)]':'text-[var(--color-category-spoiler)]'}`}>
                    <span className='inline-block'>
                        <Icon />
                    </span>
                    <span className='text-xs font-semibold uppercase leading-4'>
                        {tag}
                    </span>
                </span>
            </span>
        </div>
    );
}

ContentTag.propTypes = {
    tag: PropTypes.string.isRequired,
};
