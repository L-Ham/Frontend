import React from 'react';
import {getIconComponent} from '../../../../../generic components/iconsmap';

/**
 * Renders the creation details.
 * @return {JSX.Element} The rendered component.
 */
export function CreationDetails() {
    const CreationDate = 'Jan 14, 2010';
    const CakeIcon = getIconComponent('cake', false);

    return (
        <div className="mt-[12px]">
            <div
                className="font flex-flow flex !flex-row text-[14px]/[18px] font-[400]"
            >
                <CakeIcon className="icon m-[-2px_8px_0_0]"/>
                <span className="text-[var(--newCommunityTheme-metaText)]">
                                Created {/* */}{CreationDate}
                </span>
            </div>
        </div>
    );
}
