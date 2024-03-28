import React from 'react';
// import {useSubreddit} from '../pages/subreddit/subredditcontext';
import {Post} from './Post/post.js';
import {DATA} from './Post/data.js';
/**
 * Renders the Feed component.
 * @return {JSX.Element} The rendered component.
 */
export function Feed() {
    // const {userIsModerator} = useSubreddit();
    const postId = 't3_1bmnuhw';
    const posts = [DATA[postId]];
    return (
        <div className="m-0 mr-3 flex h-full flex-auto
                flex-col items-center justify-start rounded-lg p-0 pt-2.5">
            {posts.map((post) => (
                <Post key={post.name} viewContext='AggregateFeed' postId={postId}/>
            ))}
        </div>
    );
}
// Post({
//     postId,
//     viewContext,
// })
/**
 * Returns the empty feed component.
 * @return {JSX.Element} The rendered component.
 */
// function getEmptyFeed() {
//     return (
//         <div className='z-10 flex h-screen flex-col items-center justify-center'>
//             <h1 className='mb-2 text-center text-4xl'>This Community doesn&apos;t have any posts yet</h1>
//             <p className='mb-2 text-[#444444]'>Make one and get this feed started</p>
//             <button className={`mx-2 rounded-3xl px-5 py-2 bg-[#0045ac]
//              text-[white] hover:bg-[#003584]`}>
//                 Create a post
//             </button>
//         </div>
//     );
// }
