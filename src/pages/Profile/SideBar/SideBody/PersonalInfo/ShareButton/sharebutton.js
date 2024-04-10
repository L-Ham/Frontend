import React from 'react';
import {useShare} from './sharebutton.hook.js';
import {shareButtonClasses} from './sharebutton.styles.js';
/**
 * ShareButton component
 * @return {React.Component}
 */
export function ShareButton() {
    const {ShareIcon} = useShare();
    return (
        <div className={shareButtonClasses.root}
            style={{unicodeBidi: 'isolate'}}>
            <div className={shareButtonClasses.rootC}
                style={{unicodeBidi: 'isolate'}}>
                <button className={shareButtonClasses.button}
                    style={{
                        border: `var(0.0625rem, 0) solid var(transparent, transparent)`,
                        font: 'var(--font-12-16-semibold)'}}>
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
