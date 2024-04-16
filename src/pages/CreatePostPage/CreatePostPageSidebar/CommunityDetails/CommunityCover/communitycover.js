import React from 'react';
import {useCreatePostPage} from '../../../createpostpage.context';
import {classes} from './communitycover.styles.js';
import {useCommunityCover} from './communitycover.hooks.js';

/**
 * Renders the community cover.
 * @return {JSX.Element} The rendered component.
 */
export function CommunityCover() {
    const {about, isCommunityTheme} = useCreatePostPage();
    const {communityDetails: {bannerImage}} = about;

    const {newWidth, newHeight} = useCommunityCover(bannerImage);

    const divStyle = {
        backgroundPositionY: 'center',
        backgroundPositionX: 'center',
        backgroundImage: isCommunityTheme && bannerImage ? `url(${bannerImage})` : '',
        backgroundSize: `${newWidth}px ${newHeight}px`,
        backgroundRepeat: 'no-repeat',
    };

    return (
        <div className={classes.communityCoverDiv}
            style={divStyle}
            data-testid="community-cover-div"
        />
    );
}
