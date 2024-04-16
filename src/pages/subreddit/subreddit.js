import React from 'react';
import PropTypes from 'prop-types';
import {SubredditBanner} from './SubredditBanner/subredditbanner.js';
import {SubredditSidebar} from './SubredditSidebar/subredditsidebar.js';
import {SubredditProvider} from './subredditcontext.js';
import {classes} from './subreddit.styles.js';
import './subreddit.css';
import {Feed} from '../../generic components/feed.js';
import {VIEW_CONTEXTS} from '../../generic components/Post/data.js';

/**
 * Renders the subreddit.
 * @param {Object} props - The component props.
 * @param {string} props.name - The subreddit name.
 * @return {JSX.Element} The rendered component.
 */
export function Subreddit({name}) {
    return (
        <SubredditProvider name={name}>
            <div className={classes.innerContainer}>
                <SubredditBanner/>
                <div className={classes.contentContainer}>
                    <main className={classes.mainContent}>
                        <Feed viewContext={VIEW_CONTEXTS.SUBREDDIT_FEED} postList={['t3_1bmnuhw',
                            't3_1bvwbgd', 't3_1c2k4vg']} type='ids'/>
                    </main>
                    <SubredditSidebar/>
                </div>
            </div>
        </SubredditProvider>
    );
}

Subreddit.propTypes = {
    name: PropTypes.string.isRequired,
};


