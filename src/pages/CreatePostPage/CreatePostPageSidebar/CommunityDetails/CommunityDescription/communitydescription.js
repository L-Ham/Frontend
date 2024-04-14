import React from 'react';
import {useCreatePostPage} from '../../../createpostpage.context';


/**
 * Renders the community description.
 * @return {JSX.Element} The rendered component.
 */
export function CommunityDescription() {
    const {about} = useCreatePostPage();
    if (!about) return null;
    const {communityDetails: {description}} = about;

    return (
        <div className="relative mb-[8px] break-words fill-[var(--newRedditTheme-bodyText)]
         text-[var(--newRedditTheme-bodyText)]">
            <div className="font break-words text-[14px]/[21px] font-[400]">
                {description}
            </div>
        </div>
    );
}
