import React from 'react';
import {useShare} from './sharebutton.hook.js';
import {shareButtonClasses} from './sharebutton.styles.js';
import {shareButtonStyles} from './sharebutton.styles.js';
/**
 * ShareButton component
 * @return {React.Component}
 */
export function ShareButton() {
    const {ShareIcon} = useShare();
    return (
        <div className={shareButtonClasses.root}>
            <div className={shareButtonClasses.rootC}>
                <button className={shareButtonClasses.button}
                    style={shareButtonStyles.button}>
                    <span className={shareButtonClasses.span}>
                        <span className={shareButtonClasses.spanA}>
                            <ShareIcon/>
                        </span>
                        <span className={shareButtonClasses.spanB}>
                        Share
                        </span>
                    </span>
                </button>
            </div>
        </div>
    );
}
