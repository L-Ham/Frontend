import React from 'react';
import {Banner} from './Banner/banner.js';
import {SideBody} from './SideBody/sidebody.js';
import {sidebarClasses} from './sidebar.styles.js';
import {sidebarStyles} from './sidebar.styles.js';
import PropTypes from 'prop-types';
/**
 * Sidebar component
 * @return {React.Component}
 * @param {string} username
 */
export function Sidebar({username}) {
    return (
        <div style={sidebarStyles.root}
            className={sidebarClasses.root} data-testid={`profile-sidebar`}>
            <div className={sidebarClasses.rootC}>
                <Banner />
                <SideBody username={username}/>

            </div>
        </div>
    );
}
Sidebar.propTypes = {
    username: PropTypes.string,
};
