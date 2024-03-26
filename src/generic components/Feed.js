import React from 'react';
import {useSubreddit} from '../pages/subreddit/subredditContext';

/**
 * Renders the Feed component.
 * @return {JSX.Element} The rendered component.
 */
export function Feed() {
    const {userIsModerator, name: subredditName} = useSubreddit();
    const posts = []; // LSA: hl user view h7tagha f3ln
    return (
        <div className="m-0 mr-3 flex h-full flex-auto
                flex-col items-center justify-center rounded-lg p-0 pt-2.5">
            {posts.length === 0 ? (!userIsModerator ? getEmptyFeed() : null) : (
                posts.map((post) => (
                    <Post key={post.id} post={post} subredditName={subredditName}/>
                ))
            )}
        </div>
    );
}


/**
 * Returns the empty feed component.
 * @return {JSX.Element} The rendered component.
 */
function getEmptyFeed() {
    return (
        <div className='z-10'>
            <h1 className='mb-2 text-4xl'>This Community doesn&apos;t have any posts yet</h1>
            <p className='mb-2 text-[#444444]'>Make one and get this feed started</p>
            <button className={`mx-2 rounded-3xl px-5 py-2 bg-[#0045ac]
             text-[white] hover:bg-[#003584]`}>
                Create a post
            </button>
        </div>
    );
}

/**
 * Returns the empty feed component.
 * @return {JSX.Element} The rendered component.
 */
function Post() {
    return (
        <div>
            <h1>Post</h1>
        </div>
    );
}

