import React from 'react';
import {getIconComponent} from '../../../../../generic components/iconsmap';
import {useCreatePostPage} from '../../../createpostpage.context.js';

/**
 * Renders the creation details.
 * @return {JSX.Element} The rendered component.
 */
export function CreationDetails() {
    const {about: {communityDetails: {createdAt}}} = useCreatePostPage();
    // created at is seconds since the creation date
    // convert seconds to the year, month, and day
    const creationDate = new Date(createdAt * 1000);
    const options = {year: 'numeric', month: 'long', day: 'numeric'};
    const formattedDate = creationDate.toLocaleDateString(undefined, options);
    const CakeIcon = getIconComponent('cake', false);

    return (
        <div className="mt-[12px]">
            <div
                className="font flex-flow flex !flex-row text-[14px]/[18px] font-[400]"
            >
                <CakeIcon className="icon m-[-2px_8px_0_0]"/>
                <span className="text-[var(--newCommunityTheme-metaText)]">
                                Created {/* */}{formattedDate} {/* */}
                </span>
            </div>
        </div>
    );
}
