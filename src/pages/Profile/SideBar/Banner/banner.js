import React from 'react';
import {AddBannerButton} from './AddBannerButton/addbannerbutton.js';
import {bannerClasses} from './banner.styles.js';
import {bannerStyles} from './banner.styles.js';
import {useBanner} from './banner.hook.js';
/**
 * Banner component
 * @return {React.Component}
 */
export function Banner() {
    const {imgSrc} = useBanner();
    return (
        <div data-testid={`profile-banner`}>
            {(imgSrc===`not found` &&<div className={bannerClasses.root} style={bannerStyles.root}>
                <AddBannerButton/>
            </div>)||(<div className={bannerClasses.root} style={{backgroundImage: `url(${imgSrc})`}}>

                <AddBannerButton/></div>)}
        </div>
    );
}
