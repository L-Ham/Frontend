import React from 'react';
import {Banner} from './Banner/banner.js';
import {SideBody} from './SideBody/sidebody.js';
import {sidebarClasses} from './sidebar.styles.js';
import {sidebarStyles} from './sidebar.styles.js';

/**
 * Sidebar component
 * @return {React.Component}
 */
export function Sidebar() {
    return (
        <div style={sidebarStyles.root}
            className={sidebarClasses.root}>
            <div className={sidebarClasses.rootC}>
                <Banner />
                <SideBody/>

            </div>
        </div>
    );
}
