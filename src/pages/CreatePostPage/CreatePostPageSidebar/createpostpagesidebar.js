import React from 'react';
import {CommunityDetails} from './CommunityDetails/communitydetails.js';
import {CommunityRules} from './CommunityRules/communityrules.js';
import {RedditRules} from './RedditRules/redditrules.js';
import {classes} from './createpostpagesidebar.styles.js';

/**
 * Renders the sidebar for the create post page.
 * @return {JSX.Element} The rendered sidebar.
 */
export function CreatePostPageSidebar() {
    return (
        <div className={classes.sidebarDiv}>
            <div className={classes.sidebarInnerDiv} style={{width: 'inherit'}}>
                <CommunityDetails/>
                <CommunityRules/>
                <RedditRules/>
                <div className={classes.sidebarSpacingDiv} />
                <div className={classes.sidebarTextDiv}>
            Please be mindful of reddit&apos;s{' '}
                    <a href="https://www.reddit.com/help/contentpolicy"
                        className={classes.sidebarLink}>content policy</a> and
            practice good{' '}
                    <a href="https://www.reddit.com/wiki/reddiquette" className={classes.sidebarLink}>reddiquette</a>.
                </div>
            </div>
        </div>
    );
}
