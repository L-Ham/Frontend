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
        <div className={classes.communityMembersDiv}>
            <div className={classes.communityMembersFlexColDiv}>
                <div className={classes.communityMembersTextDiv}>
                    {formatNumber(membersCount, false)}
                </div>
                <p className={classes.communityMembersP}>
                    {membersNickname}
                </p>
            </div>
            <div className={classes.communityMembersFlexColDiv}>
                <div className={classes.communityMembersOnlineDiv}>
                    {formatNumber(currentlyViewingCount, true)}
                </div>
                <p className={classes.communityMembersP}>
                    {currentlyViewingNickname}
                </p>
            </div>
            <div />
            <div />
        </div>
    );
}
