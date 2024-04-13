import React from 'react';
import {useSocialLink} from './sociallinks.hook.js';
import {socialLinkClasses} from './sociallink.styles.js';
import {socialLinkStyles} from './sociallink.styles.js';
/**
 * ShareButton component
 * @return {React.Component}
 */
export function SocialLinks() {
    const {AddIcon} = useSocialLink();
    return (
        <div className={socialLinkClasses.root}>
            <div className={socialLinkClasses.rootC}>
                <button className={socialLinkClasses.button}
                    style={socialLinkStyles.root}>
                    <span className={socialLinkClasses.span}>
                        <span className={socialLinkClasses.spanC}>
                            <AddIcon/>
                        </span>
                        <a className={socialLinkClasses.spanCC} href='/settings'>
                        Add social Links
                        </a>
                    </span>
                </button>
            </div>
        </div>
    );
}
