import React from 'react';
import {useSocialLink} from './sociallinks.hook.js';
import {socialLinkClasses} from './sociallink.styles.js';
/**
 * ShareButton component
 * @return {React.Component}
 */
export function SocialLinks() {
    const {AddIcon} = useSocialLink();
    return (
        <div className={socialLinkClasses.root}
            style={{unicodeBidi: 'isolate'}}>
            <div className={socialLinkClasses.rootC}
                style={{unicodeBidi: 'isolate'}}>
                <button className={socialLinkClasses.button}
                    style={{
                        border: `var(0.0625rem, 0) solid var(transparent, transparent)`,
                        font: 'var(--font-12-16-semibold)'}}>
                    <span className={socialLinkClasses.span}>
                        <span className={socialLinkClasses.spanC}>
                            <AddIcon/>
                        </span>
                        <span className={socialLinkClasses.spanCC}>
                        Add social Links
                        </span>
                    </span>
                </button>
            </div>
        </div>
    );
}
