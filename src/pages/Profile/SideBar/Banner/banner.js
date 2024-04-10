import React from 'react';
import {AddBannerButton} from './AddBannerButton/addbannerbutton.js';
import {bannerClasses} from './banner.styles.js';
import {bannerStyles} from './banner.styles.js';
/**
 * Banner component
 * @return {React.Component}
 */
export function Banner() {
    return (
        <div className={bannerClasses.root}
            style={bannerStyles.root}>
            <AddBannerButton/>

        </div>
    );
}
