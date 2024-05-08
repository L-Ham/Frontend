import React from 'react';
import {Subreddit} from '../pages/subreddit/subreddit.js';
import {CreatePostPage} from '../pages/CreatePostPage/createpostpage.js';
import {useParams, useLocation} from 'react-router-dom';
import {Profile} from '../pages/Profile/profile.js';
import {CommentsPage} from '../pages/CommentsPage/commentspage.js';
import {Messages} from '../pages/Message/messages.js';
import {RulesPage} from '../pages/RulesPage/rulespage.js';
import {RemovalPage} from '../pages/RulesPage/removalpage.js';
import {ScheduledPosts} from '../pages/ScheduledPosts/scheduledposts.js';

/**
 * Renders a route for displaying a post based on the provided ID.
 * @return {JSX.Element} The rendered Post component.
 */
export function CommentsRoute() {
    const {name, postId} = useParams();
    return <CommentsPage postId={postId} subredditName={name} />;
}

/**
 * Renders a route for a specific subreddit.
 * @return {JSX.Element} The rendered SubredditRoute component.
 */
export function SubredditRoute() {
    const {name} = useParams();
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const style = queryParams.get('style');
    return (
        <Subreddit name={name} style={style}/>
    );
}

/**
 * Renders a route for a specific subreddit.
 * @return {JSX.Element} The rendered SubredditRoute component.
 */
export function CreatePostRoute() {
    const {name} = useParams();
    return (
        <CreatePostPage name={name}/>
    );
}

/**
 *@return {JSX.Element} The rendered Profile component.
 */
export function ProfilePageRoute() {
    const {name, section} = useParams();
    return <div className='h-screen'><Profile name={name} section={section}/></div>;
}
/**
 * Renders a route for displaying messages.
 * @return {JSX.Element} The rendered Messages component.
 */
export function MessagesRoute() {
    const {name, section} = useParams();
    return <Messages name={name} section={section}/>;
}


/**
 *@return {JSX.Element} The rendered Profile component.
 */
export function RulesPageRoute() {
    const {name} = useParams();
    return <RulesPage name={name}/>;
}


/**
 * Renders a route for the rules and removal reasons page.
 * @return {JSX.Element} The rendered RulesPage component.
 */
export function RemovalPageRoute() {
    const {name} = useParams();
    return <RemovalPage name={name}/>;
}


/**
 * Renders a route for the scheduled posts page.
 * @return {JSX.Element} The rendered ScheduledPosts component.
 */
export function ScheduledPostsRoute() {
    const {name} = useParams();
    return <ScheduledPosts name={name}/>;
}

