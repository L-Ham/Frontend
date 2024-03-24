import React from 'react';
import PropTypes from 'prop-types';

/**
 * Renders the posts list.
 * @param {object} props - The props object.
 * @param {boolean} props.isUserView - The flag to check if the user is viewing the feed.
 * @param {Array} props.posts - The list of posts.
 * @param {string} props.subredditName - The name of the subreddit.
 * @return {JSX.Element} The rendered component.
 */
export function Feed({isUserView, posts, subredditName}) {
    return (
        <div className="m-0 mr-3 flex h-full flex-auto
                flex-col items-center justify-center rounded-lg bg-yellow-300 p-0 pt-2.5 opacity-50">
            {posts.length === 0 ? (!isUserView ? getEmptyFeed() : null) : (
                posts.map((post) => (
                    <Post key={post.id} post={post} isUserView={isUserView} subredditName={subredditName}/>
                    /* LSA: hl user view h7tagha f3ln*/
                ))
            )}
        </div>
    );
}

Feed.defaultProps = {
    isUserView: false,
    posts: [],
    subredditName: '',
};

Feed.propTypes = {
    isUserView: PropTypes.bool,
    posts: PropTypes.array,
    subredditName: PropTypes.string,
};

/**
 * Returns the empty feed component.
 * @return {JSX.Element} The rendered component.
 */
function getEmptyFeed() {
    return (
        <div>
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

