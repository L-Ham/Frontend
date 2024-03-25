import React from 'react';
import {SubredditBanner} from './SubredditBanner';
// import {SubredditSidebar} from './SubredditSidebar';
import {Feed} from '../../generic components/Feed';
import {useSubreddit} from './subredditContext';


/**
 * Renders the subreddit.
 * @return {JSX.Element} The rendered component.
 */
export function Subreddit() {
    const {
        loading,
    } = useSubreddit();


    if (loading) return <div>Loading...</div>;

    return (
        <div className="m-auto flex h-full w-4/5 flex-col items-center p-3">
            <SubredditBanner
            />
            <div className="flex w-full flex-auto">
                <Feed/>
                {/* <SubredditSidebar/> */}
            </div>
        </div>
    );
}


