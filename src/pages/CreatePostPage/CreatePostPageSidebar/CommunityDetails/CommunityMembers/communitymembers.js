import React from 'react';
import './communitymembers.css';

/**
 * Renders the community members.
 * @return {JSX.Element} The rendered component.
 */
export function CommunityMembers() {
    return (
        <div className="community-members
        flex justify-between break-words text-[var(--newRedditTheme-bodyText)]">
            <div className='flex flex-col items-start'>
                <div className="break-words
                text-[16px]/[20px] font-[500]">3.6m</div>
                <p
                    className="inline-block break-words
                    text-[12px]/[16px] font-[400] text-[var(--newCommunityTheme-metaText)] "
                >
                    Leaving Wano
                </p>
            </div>
            <div className='flex flex-col items-start'>
                <div className="online-div text-[16px]/[20px] font-[500]">1.5k</div>
                <p
                    className="inline-block break-words
                    text-[12px]/[16px] font-[400] text-[var(--newCommunityTheme-metaText)]"
                >
                    Visiting Egghead
                </p>
            </div>
            <div />
            <div />
        </div>

    );
}
