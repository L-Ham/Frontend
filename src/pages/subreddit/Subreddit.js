import React from 'react';
import {SubredditBanner} from './SubredditBanner';
import {SubredditSidebar} from './SubredditSidebar';
import {Feed} from '../../generic components/Feed';
import styles from './Subreddit.module.css';


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


