import React from 'react';
import {WidgetsRenderer} from './Widgets/WidgetsRenderer/widgetsrenderer.js';
import {subredditSidebarClasses as classes} from './subredditsidebar.styles.js';

/**
 * Renders the subreddit sidebar.
 * @return {JSX.Element} The rendered component.
 */
export function SubredditSidebar() {
    return (
        <div id='right-sidebar-container' data-scroll-restore
            className={classes.sidebarContainer} data-testid="sidebar-container">
            <aside className={classes.sidebarAside} data-testid="sidebar-aside">
                <div className={classes.sidebarDiv} data-testid="sidebar-div">
                    <WidgetsRenderer data-testid="widgets-renderer"/>
                </div>
            </aside>
        </div>
    );
}

