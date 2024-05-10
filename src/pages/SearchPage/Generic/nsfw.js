import React from 'react';
import {getIconComponent} from '../../../generic components/iconsmap';

/**
 * NSFW component.
 * @return {JSX.Element} The NSFW component.
 */
function NSFW() {
    const NSFWIcon = getIconComponent('nsfw');
    return (
        <span className='mb-2 inline-block'>
            <span className='inline-block text-[var(--color-category-nsfw)]'>
                <span className="flex items-center gap-1 text-[var(--color-category-nsfw)]">
                    <span className="inline-block" aria-hidden="true">
                        <NSFWIcon />
                    </span>
                    <span className="text-xs font-semibold uppercase">NSFW</span>
                </span>
            </span>
        </span>
    );
}

export {NSFW};
