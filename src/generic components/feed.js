import React from 'react';
import {Post} from './Post/post.js';
import {PropTypes} from 'prop-types';
import {FeedFilter} from './FeedFilter/feedfilter.js';
import {DATA} from './Post/data.js';
/**
 * Renders the Feed component.
 * @param {string} viewContext The view context.
 * @param {string[]} postList The list of post ids.
 * @param {string} type The type of feed.
 * @return {JSX.Element} The rendered component.
 */
export function Feed({
    viewContext,
    postList,
    type,
}) {
    if (type === 'ids') {
        postList = postList.map((postId) => DATA[postId]);
    }
    return (
        <>
            <FeedFilter />
            {postList.map((post) => (
                <Post key={post._id} viewContext={viewContext} {...post} />
            ))}
        </>
    );
}

Feed.propTypes = {
    viewContext: PropTypes.string.isRequired,
    postList: PropTypes.arrayOf(PropTypes.string).isRequired,
    type: PropTypes.string.isRequired,
};

