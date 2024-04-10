import React from 'react';
import {AddBannerButton} from './AddBannerButton/addbannerbutton.js';
import {bannerClasses} from './banner.styles.js';
/**
 * Banner component
 * @return {React.Component}
 */
export function Banner() {
    return (
        <div className={bannerClasses.root}
            style={{background: 'linear-gradient(0deg, #000 0%, rgba(0, 0, 0, 0) 111.72%), #0045ac'}}>
            <AddBannerButton/>

        </div>
    );
}
