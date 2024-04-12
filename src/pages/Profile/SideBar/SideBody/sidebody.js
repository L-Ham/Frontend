import React from 'react';
import {PersonalInfo} from './PersonalInfo/personalinfo.js';
import {ShareButton} from './PersonalInfo/ShareButton/sharebutton.js';
import {PostInfo} from './PostInfo/postinfo.js';
import {Settings} from './Edit/setting.js';
import {SocialLinks} from './SocialLinks/socialinks.js';
import {sideBodyClasses} from './sidebody.styles.js';
import {sideBodyStyles} from './sidebody.styles.js';
import PropTypes from 'prop-types';
/**
 * SideBody component
 * @return {React.Component}
 */
export function SideBody({username}) {
    return (
        <div className={sideBodyClasses.root}>
            <PersonalInfo username={username}/>
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
            <SocialLinks/>
        </div>
    );
}
SideBody.propTypes = {
    username: PropTypes.string,
};
