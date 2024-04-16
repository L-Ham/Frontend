import React from 'react';
import {useCreatePostPage} from '../../../createpostpage.context';

/**
 * Renders the community cover.
 * @return {JSX.Element} The rendered component.
 */
export function CommunityCover() {
    const {about, isCommunityTheme} = useCreatePostPage();
    const {communityDetails: {bannerImage}} = about;

    // Create a new image object
    const img = new Image();
    img.src = bannerImage;

    // Get the original dimensions
    const originalWidth = img.naturalWidth;
    const originalHeight = img.naturalHeight;

    // Set the maximum width or height
    const maxWidth = 320; // Change this to your desired value

    // Calculate the new dimensions
    const ratio = maxWidth / originalWidth;
    const newWidth = maxWidth;
    const newHeight = originalHeight * ratio;

    // Set the new dimensions in the style
    const divStyle = {
        backgroundPositionY: 'center',
        backgroundPositionX: 'center',
        backgroundImage: isCommunityTheme && bannerImage ? `url(${bannerImage})` : '',
        backgroundSize: `${newWidth}px ${newHeight}px`, // Use the new dimensions
        backgroundRepeat: 'no-repeat',
    };

    return (
        <div className={`m-[-12px_-13.6px_10px_-13.4px] h-[34px]
        rounded-[3px_3px_0_0] bg-[color:var(--newCommunityTheme-active)]`}
        style={divStyle}/>
    );
}
