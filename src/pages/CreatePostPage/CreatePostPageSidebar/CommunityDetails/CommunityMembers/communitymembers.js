import React from 'react';
import './communitymembers.css';
import {useCreatePostPage} from '../../../createpostpage.context';
import {formatNumber} from '../../../../../generic components/utils.js';
import {classes} from './communitymembers.styles.js';


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
        <div className={classes.communityMembersDiv} data-testid="community-members-div">
            <div className={classes.communityMembersFlexColDiv} data-testid="community-members-flexcol-div-1">
                <div className={classes.communityMembersTextDiv} data-testid="community-members-text-div">
                    {formatNumber(membersCount, false)}
                </div>
                <p className={classes.communityMembersP} data-testid="community-members-p-1">
                    {membersNickname}
                </p>
            </div>
            <div className={classes.communityMembersFlexColDiv} data-testid="community-members-flexcol-div-2">
                <div className={classes.communityMembersOnlineDiv} data-testid="community-members-online-div">
                    {formatNumber(currentlyViewingCount, true)}
                </div>
                <p className={classes.communityMembersP} data-testid="community-members-p-2">
                    {currentlyViewingNickname}
                </p>
            </div>
            <div data-testid="community-members-div-1" />
            <div data-testid="community-members-div-2" />
        </div>
    );
}
