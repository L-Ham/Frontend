import React from 'react';
import {ProfileBody} from './Main/profilebody.js';
import {Sidebar} from './SideBar/sidebar.js';
import PropTypes from 'prop-types';
import {profileClasses} from './profile.styles.js';
import {profileStyle} from './profile.styles.js';

/**
 * Profile component
 * @param {string} name
 * @param {string} section
 * @return {React.Component}
 */
export function Profile({name, section}) {
    return (
        <div className={profileClasses.root} style={{unicodeBidi: 'isolate'}}>
            <div className={profileClasses.rootC} style={profileStyle.root}>
                <ProfileBody name={name} section={section} data-testid="profile-body" />
                <Sidebar username={name} data-testid="sidebar" />
            </div>
        </div>
    );
}

Profile.propTypes = {
    name: PropTypes.string,
    section: PropTypes.string,
};
