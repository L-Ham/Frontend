import React from 'react';
import {Subreddit} from '../pages/subreddit/subreddit.js';
import {CreatePostPage} from '../pages/CreatePostPage/createpostpage.js';
import {useParams, useLocation} from 'react-router-dom';
import {Profile} from '../pages/Profile/profile.js';
import {CommentsPage} from '../pages/CommentsPage/commentspage.js';
import {Usermanagement} from '../pages/UserManagement/usermanagement.js';
import {Modqueue} from '../pages/ModQueue/modqueue.js';
import {Messages} from '../pages/Message/messages.js';
import {RulesPage} from '../pages/RulesPage/rulespage.js';
import {RemovalPage} from '../pages/RulesPage/removalpage.js';

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
 *
 * @return {JSX.Element} The rendered Usermanagement component.

 */
export function Usermanagementroute() {
    const {name} = useParams();
    return (
        <Usermanagement name={name}/>
    );
}
/**
 *
 * @return  {JSX.Element} The rendered Modqueue component.
 */
export function ModqueueRoute() {
    const {name, tab} = useParams();
    return (
        <Modqueue name={name} tab={tab}/>
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


