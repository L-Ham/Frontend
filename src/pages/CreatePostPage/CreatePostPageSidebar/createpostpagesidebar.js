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
        <div className={classes.sidebarDiv} data-testid="sidebar-div">
            <div className={classes.sidebarInnerDiv} style={{width: 'inherit'}} data-testid="sidebar-inner-div">
                <CommunityDetails data-testid="community-details"/>
                <CommunityRules data-testid="community-rules"/>
                <RedditRules data-testid="reddit-rules"/>
                <div className={classes.sidebarSpacingDiv} data-testid="sidebar-spacing-div" />
                <div className={classes.sidebarTextDiv} data-testid="sidebar-text-div">
            Please be mindful of reddit&apos;s{' '}
                    <a href="https://www.reddit.com/help/contentpolicy"
                        className={classes.sidebarLink} data-testid="content-policy-link">content policy</a> and
            practice good{' '}
                    <a href="https://www.reddit.com/wiki/reddiquette"
                        className={classes.sidebarLink} data-testid="reddiquette-link">reddiquette</a>.
                </div>
            </div>
        </div>
    );
}
