import React, {useEffect, useState} from 'react';
import {HoverCard} from '../../../../generic components/Post/HoverCard/hovercard.js';
import {PostTitleLink} from './posttitlelink.js';
import {postContentClasses as styles} from './postpreview.styles.js';
import PropTypes from 'prop-types';
import {API_ROUTES} from '../../../../requests/routes.js';
import {axiosInstance as axios} from '../../../../requests/axios.js';

/**
 * The post content component. Renders the subreddit's name, post title.
 * @param {string} postId - The post id.
 * @param {string} subredditName - The subreddit name.
 * @param {string} subredditId - The subreddit id.
 * @param {string} viewContext - The view context.
 * @param {string} postUrl - The post URL.
 * @param {string} postTitle - The post title.
 * @return {JSX.Element} The post content component.
 */
function PostContent({postId, subredditName, viewContext, postUrl, postTitle}) {
    const [subredditData, setSubredditData] = useState({
        name: subredditName,
        subredditId: 'loading',
        avatarImage: 'https://placehold.co/400',
        bannerImage: 'https://placehold.co/400',
        description: 'loading',
        membersNickname: 'Members',
        membersCount: 0,
        currentlyViewingNickname: 'Online',
        currentlyViewingCount: 0,
        isMember: false,
        isFavorite: false,
        isMuted: false,
        createdAt: 0,
    });
    useEffect(() => {
        const fetchSubreddit = async () => {
            try {
                const subredditResponse = await axios.get(API_ROUTES.communityDetails(subredditName));
                setSubredditData(subredditResponse.data.communityDetails);
            } catch (error) {
                // console.error(error);
            }
        };
        fetchSubreddit();
    }, []);
    return (
        <div className={styles.container}>
            <div className={styles.hoverCard}>
                <HoverCard
                    postId={postId}
                    entityData={subredditData}
                    viewContext={viewContext}
                    isUser={false}
                />
            </div>
            <div className={styles.postTitleLink}>
                <PostTitleLink
                    postUrl={postUrl}
                    postTitle={postTitle}
                />
            </div>
        </div>
    );
}

PostContent.propTypes = {
    postId: PropTypes.string.isRequired,
    subredditName: PropTypes.string.isRequired,
    viewContext: PropTypes.string.isRequired,
    postUrl: PropTypes.string.isRequired,
    postTitle: PropTypes.string.isRequired,
};

export {PostContent};
