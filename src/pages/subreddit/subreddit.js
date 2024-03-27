import React from 'react';
// components
import {SubredditBanner} from './subredditbanner';
import {SubredditSidebar} from './subredditsidebar';
import {Feed} from '../../generic components/feed';
// styles
import styles from './subreddit.module.css';


/**
 * Renders the subreddit.
 * @return {JSX.Element} The rendered component.
 */
export function Subreddit() {
    return (
        <div className={styles.subreddit}>
            <SubredditBanner
            />
            <div className="flex w-full flex-auto">
                <Feed/>
                <SubredditSidebar/>
            </div>
        </div>
    );
}


