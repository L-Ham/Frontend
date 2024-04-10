import React from 'react';
import {useAddBanner} from './addbannerbutton.hook.js';
import {addBannerButtonClasses} from './addbannerbutton.styles.js';
import {addBannerButtonStyles} from './addbannerbutton.styles.js';
/**
 * AddBannerButton component
 * @return {React.Component}
 */
export function AddBannerButton() {
    const {AddBannerIcon} = useAddBanner();
    return (
        <div className={addBannerButtonClasses.root}>
            <a
                href="/settings"
                aria-label="Edit profile banner"
                style={addBannerButtonStyles.root}
                className={addBannerButtonClasses.a}>
                <span className={addBannerButtonClasses.span}>
                    <span className={addBannerButtonClasses.spanC}>
                        <AddBannerIcon />
                    </span>

                </span>

            </a>

        </div>
    );
}
