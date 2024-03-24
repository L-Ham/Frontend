import React from 'react';
import {SubredditBanner} from './SubredditBanner';
import {SubredditSidebar} from './SubredditSidebar';
import {Feed} from '../../generic components/Feed';
import {SubredditProvider} from './subredditContext';

/**
 * Renders the subreddit.
 * @return {JSX.Element} The rendered component.
 */
export function Subreddit() {
    return (
        <SubredditProvider>
            <div className="m-auto flex h-full w-4/5 flex-col items-center">
                <SubredditBanner
                />
                <div className="flex w-full flex-auto">
                    <Feed/>
                    <SubredditSidebar/>
                </div>
            </div>
        </SubredditProvider>
    );
}


