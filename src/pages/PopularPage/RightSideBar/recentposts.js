/* eslint-disable max-len */
import React from 'react';
import {PostPreview} from './PostPreview/postpreview.js';
import {recentPostsClasses as styles} from './rightsidebar.styles.js';
import {useRecentPosts} from './rightsidebar.hooks.js';

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
                        {data.map((post, index) => (
                            <React.Fragment key={index}>
                                <PostPreview
                                    postId={post.postId}
                                    subredditName={post.subredditName}
                                    subredditId={post.subredditId}
                                    viewContext={post.viewContext}
                                    postUrl={post.postUrl}
                                    postTitle={post.postTitle}
                                />
                                {index !== data.length - 1 && <hr className={styles.divider}/>}
                            </React.Fragment>
                        ))}
                    </div>
                </div>
            </aside>
        )
    );
}

export {RecentPosts};
