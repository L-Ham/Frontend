import React from 'react';
import PropTypes from 'prop-types';
import {SubredditBanner} from './SubredditBanner/subredditbanner.js';
import {SubredditSidebar} from './SubredditSidebar/subredditsidebar.js';
import {SubredditProvider} from './subredditcontext.js';
import {classes} from './subreddit.styles.js';
import './subreddit.css';
import {Feed, SubredditEmptyFeed} from '../../generic components/feed.js';
import {VIEW_CONTEXTS} from '../../generic components/Post/data.js';
import {API_ROUTES} from '../../requests/routes.js';
import {useSearchParams} from 'react-router-dom';

/**
 * Renders the subreddit.
 * @param {Object} props - The component props.
 * @param {string} props.name - The subreddit name.
 * @param {Object} props.style - The style object.
 * @return {JSX.Element} The rendered component.
 */
export function Subreddit({name, style}) {
    const [searchParams] = useSearchParams();
    return (
        <SubredditProvider name={name} data-testid="subreddit-provider" style={style}>
            <div className={classes.innerContainer} data-testid="inner-container">
                <SubredditBanner data-testid="subreddit-banner"/>
                <div className={classes.contentContainer} data-testid="content-container">
                    <main className={classes.mainContent} data-testid="main-content">
                        <Feed
                            key={name}
                            viewContext={VIEW_CONTEXTS.SUBREDDIT_FEED}
                            endpoint={API_ROUTES.communityFeed(name, searchParams.get('sort') || 'Hot')}
                            name="subredditPosts"
                            type='posts'
                            FallbackComponent={<SubredditEmptyFeed/>}
                        />
                    </main>
                    <SubredditSidebar data-testid="subreddit-sidebar"/>
                </div>
            </div>
        </SubredditProvider>
    );
}

Subreddit.propTypes = {
    name: PropTypes.string.isRequired,
    style: PropTypes.object,
};


