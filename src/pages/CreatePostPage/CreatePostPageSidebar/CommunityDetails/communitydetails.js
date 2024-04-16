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
        <div className={classes.communityDetailsDiv}>
            <div className={classes.communityDetailsInnerDiv}>
                <div className={classes.communityDetailsContentDiv}>
                    <CommunityCover/>
                    <CommunityHeader/>
                    <CommunityDescription/>
                    <CreationDetails/>
                    <div className={classes.communityDetailsSpacingDiv} />
                    <hr className={classes.communityDetailsHr}/>
                    <CommunityMembers/>
                    <UserSection/>
                    <CommunityOptions/>
                </div>
            </div>
        </div>
    );
}
