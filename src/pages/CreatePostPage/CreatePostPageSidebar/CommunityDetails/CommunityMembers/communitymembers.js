import React from 'react';
import './communitymembers.css';
import {useCreatePostPage} from '../../../createpostpage.context';
import {formatNumber} from '../../../../../generic components/utils.js';


/**
 * Renders the community members.
 * @return {JSX.Element} The rendered component.
 */
export function CommunityMembers() {
    const {about} = useCreatePostPage();
    if (!about) return null;

    const {communityDetails: {membersNickname, membersCount,
        currentlyViewingNickname, currentlyViewingCount}} = about;

    return (
        <div className="community-members
        flex justify-between break-words text-[var(--newRedditTheme-bodyText)]">
            <div className='flex flex-col items-start'>
                <div className="break-words
                text-[16px]/[20px] font-[500]">{formatNumber(membersCount, false)}</div>
                <p
                    className="inline-block break-words
                    text-[12px]/[16px] font-[400] text-[var(--newCommunityTheme-metaText)] "
                >
                    {membersNickname}
                </p>
            </div>
            <div className='flex flex-col items-start'>
                <div className="online-div text-[16px]/[20px] font-[500]">
                    {formatNumber(currentlyViewingCount, true)}</div>
                <p
                    className="inline-block break-words
                    text-[12px]/[16px] font-[400] text-[var(--newCommunityTheme-metaText)]"
                >
                    {currentlyViewingNickname}
                </p>
            </div>
            <div />
            <div />
        </div>

    );
}
