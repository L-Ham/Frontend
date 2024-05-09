import React from 'react';
import '../../../btn.css';
import {getIconComponent} from '../../../../../../generic components/iconsmap';

/** Share Button
 * @return {React.Component}
 */
export function ShareComment() {
    const ShareIconOutline = getIconComponent('share', false);
    return (
        <button className='button button-plain !inline-flex !h-[var(--size-button-sm-h)]
        items-center border !px-2 text-sm
        font-semibold text-[var(--color-secondary)] hover:bg-[var(--color-secondary-background-hover)]'
        style={{font: 'var(--font-12-16-semibold)'}}
        >
            <span className="flex items-center">
                <span className="mr-[var(--rem6)] flex text-sm">
                    <ShareIconOutline />
                </span>
                <span>
                    Share
                </span>
            </span>
        </button>
    );
}
