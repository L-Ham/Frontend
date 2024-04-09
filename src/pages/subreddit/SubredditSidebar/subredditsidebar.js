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
            className={classes.sidebarContainer}>
            <aside className={classes.sidebarAside}>
                <div className={classes.sidebarDiv}>
                    <WidgetsRenderer />
                </div>
            </aside>
        </div>
    );
}

