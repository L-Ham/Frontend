import React from 'react';
import {PersonalInfo} from './PersonalInfo/personalinfo.js';
import {ShareButton} from './PersonalInfo/ShareButton/sharebutton.js';
import {PostInfo} from './PostInfo/postinfo.js';
import {Settings} from './Edit/setting.js';
import {SocialLinks} from './SocialLinks/socialinks.js';
import {sideBodyClasses} from './sidebody.styles.js';
import {sideBodyStyles} from './sidebody.styles.js';
import PropTypes from 'prop-types';
import {useSidebody} from './sidebody.hook.js';
/**
 * SideBody component
 * @return {React.Component}
 */
export function SideBody({username}) {
    const {links}=useSidebody();
    return (
        <div className={sideBodyClasses.root}>
            <PersonalInfo username={username}
                data-testid={`profile-side-body`}
            />
            <ShareButton/>
            <PostInfo/>
            <hr className={sideBodyClasses.hr}
                style={sideBodyStyles.hr}
            />
            <span className={sideBodyClasses.span}
                style={sideBodyStyles.spanA}>
                Settings
            </span>
            <Settings/>
            <hr className={sideBodyClasses.hr}
                style={sideBodyStyles.hr}
            />
            <span className={sideBodyClasses.span}
                style={sideBodyStyles.spanA}>
                Links
            </span>
            { links.map((link, index) => (
                <SocialLinks key={index} title={link.appName}
                    links={link.linkOrUsername} addlinks={'0'} id={link._id}
                />
            ))}
            <SocialLinks title={`Add Social Links`} links={`/settings/profile`} addlinks={`1`}/>
        </div>
    );
}
SideBody.propTypes = {
    username: PropTypes.string,
};
