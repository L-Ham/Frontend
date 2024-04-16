import React from 'react';
import {CreationDetails} from './CreationDetails/creationdetails.js';
import {CommunityCover} from './CommunityCover/communitycover.js';
import {CommunityHeader} from './CommunityHeader/communityheader.js';
import {CommunityDescription} from './CommunityDescription/communitydescription.js';
import {CommunityMembers} from './CommunityMembers/communitymembers.js';
import {UserSection} from './UserSection/usersection.js';
import {CommunityOptions} from './CommunityOptions/communityoptions.js';
import {useCreatePostPage} from '../../createpostpage.context.js';
import {classes} from './communitydetails.styles.js';

/**
 * Renders the community details.
 * @return {JSX.Element} The rendered component.
 */
export function CommunityDetails() {
    const {about} = useCreatePostPage();
    if (!about) return null;
    return (
        <div className={classes.communityDetailsDiv} data-testid="community-details-div">
            <div className={classes.communityDetailsInnerDiv} data-testid="community-details-inner-div">
                <div className={classes.communityDetailsContentDiv} data-testid="community-details-content-div">
                    <CommunityCover data-testid="community-cover"/>
                    <CommunityHeader data-testid="community-header"/>
                    <CommunityDescription data-testid="community-description"/>
                    <CreationDetails data-testid="creation-details"/>
                    <div className={classes.communityDetailsSpacingDiv} data-testid="community-details-spacing-div" />
                    <hr className={classes.communityDetailsHr} data-testid="community-details-hr"/>
                    <CommunityMembers data-testid="community-members"/>
                    <UserSection data-testid="user-section"/>
                    <CommunityOptions data-testid="community-options"/>
                </div>
            </div>
        </div>
    );
}
