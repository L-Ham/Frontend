import React from 'react';
import {useSocialLink} from './sociallinks.hook.js';
import {socialLinkClasses} from './sociallink.styles.js';
import {socialLinkStyles} from './sociallink.styles.js';
import PropTypes from 'prop-types';
/**
 * ShareButton component
 * @return {React.Component}
 */
export function SocialLinks({title, links, addlinks}) {
    const {AddIcon, LinkIcon} = useSocialLink();
    return (
        <div className={socialLinkClasses.root} data-testid={`profile-links-${links}`}>
            <div className={socialLinkClasses.rootC}>
                <button className={socialLinkClasses.button}
                    style={socialLinkStyles.root}>
                    <span className={socialLinkClasses.span}>
                        <span className={socialLinkClasses.spanC}>
                            {(addlinks==='1'&&<AddIcon/>)||<LinkIcon/>}
                        </span>

                        <a className={socialLinkClasses.spanCC} href={links} target='_blank' rel="noreferrer">
                            {title}
                        </a>
                    </span>
                </button>
            </div>
        </div>
    );
}
SocialLinks.propTypes = {
    title: PropTypes.string,
    links: PropTypes.string,
    addlinks: PropTypes.string,
};
