import React from 'react';
import {useSubredditSidebar} from './subredditsidebar.hooks.js';
import {subredditSidebarClasses as classes} from './subredditsidebar.styles';

/**
 * Renders the subreddit sidebar.
 * @return {JSX.Element} The rendered component.
 */
export function SubredditSidebar() {
    const {renderWidgets} = useSubredditSidebar();
    if (!renderWidgets) return null;

    return (
        <div id='right-sidebar-container' data-scroll-restore
            className={classes.sidebarContainer}>
            <aside className={classes.sidebarAside}>
                <div className={classes.sidebarDiv}>
                    {renderWidgets()}
                </div>
            </aside>
        </div>
    );
}

