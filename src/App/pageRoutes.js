import React from 'react';
import {Subreddit} from '../pages/subreddit/subreddit.js';
import {Post} from '../generic components/Post/post.js';
import {useParams} from 'react-router-dom';
import {Profile} from '../pages/Profile/profile.js';

/**
 * Renders a route for displaying a post based on the provided ID.
 * @return {JSX.Element} The rendered Post component.
 */
export function PostRoute() {
    const {id} = useParams();
    return <Post postId={id} viewContext='AggregateFeed' />;
}

/**
 * Renders a route for a specific subreddit.
 * @return {JSX.Element} The rendered SubredditRoute component.
 */
export function SubredditRoute() {
    const {name} = useParams();
    return (
        <Subreddit name={name}/>
    );
}

/**
 *@return {JSX.Element} The rendered Profile component.
 */
export function ProfilePageRoute() {
    const {name, section} = useParams();
    return <Profile name={name} section={section}/>;
}
