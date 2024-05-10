/* eslint-disable max-len */
import React from 'react';
import {PostPreview} from './PostPreview/postpreview.js';
import {recentPostsClasses as styles} from './rightsidebar.styles.js';
import {useRecentPosts} from './rightsidebar.hooks.js';
import {VIEW_CONTEXTS} from '../../../generic components/Post/data.js';
import uuid from 'react-uuid';

/**
 * Renders the recent posts preview component in right side bar.
 * @return {JSX.Element} The rendered component.
 */
function RecentPosts() {
    const {data, handleClear} = useRecentPosts();
    return (
        data.length === 0 ? null :(
            <aside className={styles.container}>
                <div className={styles.headerContainer}>
                    <h3 className={styles.header}>
                        Recent Posts
                    </h3>
                    <button className={styles.clearButton}
                        onClick={handleClear}>
                            Clear
                    </button>
                </div>

                <div className={styles.contentContainer}>
                    <div className={styles.content}>
                        {Object.entries(data).map(([key, post], index, arr) => (
                            <React.Fragment key={uuid()}>
                                <PostPreview
                                    postId={post.postId}
                                    subredditName={post.subredditName}
                                    viewContext={VIEW_CONTEXTS.AGGREGATE_FEED}
                                    postUrl={`/r/${post.subredditName}/comments/${post.postId}`}
                                    postTitle={post.postTitle}
                                />
                                {index !== arr.length - 1 && <hr className={styles.divider}/>}
                            </React.Fragment>
                        ))}
                    </div>
                </div>
            </aside>
        )
    );
}

export {RecentPosts};
