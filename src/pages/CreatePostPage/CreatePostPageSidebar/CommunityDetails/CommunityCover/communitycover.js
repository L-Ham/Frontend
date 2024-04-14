import React from 'react';
import {useCreatePostPage} from '../../../createpostpage.context';

/**
 * Renders the community cover.
 * @return {JSX.Element} The rendered component.
 */
export function CommunityCover() {
    const {about, isCommunityTheme} = useCreatePostPage();
    if (!about) return null;
    const {communityDetails: {bannerImage}} = about;

    const divStyle = {
        backgroundPositionY: 'center',
        backgroundPositionX: 'center',
        background: isCommunityTheme && bannerImage ? `url(${bannerImage})` : '',
        backgroundSize: 'cover', // Add this line
    };

    return (
        <div className={`m-[-12px_-13.4px_10px] h-[34px]
        rounded-[3px_3px_0_0] bg-[color:var(--newCommunityTheme-active)]
        bg-no-repeat`}
        style={divStyle}/>
    );
}
