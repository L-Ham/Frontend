import React from 'react';
import {ActionButtons} from './ActionButtons/actionbuttons.js';
import {PostTags} from './PostTags/posttags.js';

/**
 * Renders the post creation form footer.
 * @return {JSX.Element} The rendered component.
 */
export function PostCreationFormFooter() {
    return (
        <div className="p-[0_16px_16px]">
            <PostTags/>
            <hr className="my-[0.5em] w-full border-b-0
            border-t-DEFAULT border-solid border-[color:var(--newCommunityTheme-line)]"/>
            <ActionButtons/>
        </div>
    );
}

