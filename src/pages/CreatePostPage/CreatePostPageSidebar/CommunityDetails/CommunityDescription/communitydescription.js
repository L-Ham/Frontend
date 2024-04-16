import React from 'react';
import {useCreatePostPage} from '../../../createpostpage.context';
import {classes} from './communitydescription.styles.js';


/**
 * Renders the community description.
 * @return {JSX.Element} The rendered component.
 */
export function CommunityDescription() {
    const {about} = useCreatePostPage();
    const {communityDetails: {description}} = about;

    return (
        <div className={classes.communityDescriptionDiv} data-testid="community-description-div">
            <div className={classes.communityDescriptionInnerDiv} data-testid="community-description-inner-div">
                {description}
            </div>
        </div>
    );
}
