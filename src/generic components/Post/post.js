import React from 'react';
import PropTypes from 'prop-types';
import {PostInfo} from './PostInfo/postinfo.js';
import {PostContent} from './PostContent/postcontent.js';
import {PostBoost} from './PostBoost/postboost.js';
import {PostTitle} from './PostTitle/posttitle.js';
import {postClasses} from './post.styles.js';
import {usePost} from './post.hooks.js';
import {ContentTag} from './ContentTag/contenttag.js';
/**
 * Post component
 * @param {string} postId
 * @param {string} user
 * @param {string} title
 * @param {string} text
 * @param {boolean} approved
 * @param {string} approvedBy
 * @param {boolean} disapproved
 * @param {string} disapprovedBy
 * @param {string} url
 * @param {string} type
 * @param {boolean} isNSFW
 * @param {boolean} isSpoiler
 * @param {boolean} isLocked
 * @param {boolean} isOc
 * @param {number} upvotes
 * @param {number} downvotes
 * @param {number} views
 * @param {number} commentCount
 * @param {string} createdAt
 * @param {string} subredditName
 * @param {boolean} isUpvoted
 * @param {boolean} isDownvoted
 * @param {string[]} imageUrls
 * @param {object} poll
 * @param {string} viewContext
 * @return {React.Component}
 */
export function Post({
    _id: postId,
    user,
    title,
    text,
    approved,
    approvedBy,
    disapproved,
    disapprovedBy,
    url,
    type,
    isNSFW,
    isSpoiler,
    isLocked,
    isOc,
    upvotes,
    downvotes,
    views,
    commentCount,
    createdAt,
    subredditName,
    isUpvoted,
    isDownvoted,
    imageUrls,
    poll,
    viewContext,
}) {
    const {
        isCommentsPage,
        classNames,
        tag,
    } = usePost({isNSFW, isSpoiler, viewContext});
    return (
        <div className={classNames}>
            {!isCommentsPage &&
            <a href={url} className={postClasses.a} target="_self" data-testid={`link-${postId}`}/>}
            <PostInfo
                postId={postId}
                userId={user}
                subredditName={subredditName}
                createdAt={createdAt}
                viewContext={viewContext}
            />
            <div className={postClasses.body} data-testid={`body-${postId}`}>
                <ContentTag tag={tag} postId={postId} />
                <PostTitle postId={postId} title={title} isCommentsPage={isCommentsPage} />
                <PostContent
                    postId={postId}
                    tag={tag}
                    type={type}
                    text={text}
                    imageUrls={imageUrls}
                    viewContext={viewContext}
                />
            </div>
            <PostBoost
                postId={postId}
                upvotes={upvotes}
                downvotes={downvotes}
                isUpvoted={isUpvoted}
                isDownvoted={isDownvoted}
                commentCount={commentCount}
                url={url}
                viewContext={viewContext}
            />
        </div>
    );
}

Post.propTypes = {
    _id: PropTypes.string.isRequired,
    user: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string,
    approved: PropTypes.bool,
    approvedBy: PropTypes.string,
    disapproved: PropTypes.bool,
    disapprovedBy: PropTypes.string,
    url: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    isNSFW: PropTypes.bool.isRequired,
    isSpoiler: PropTypes.bool.isRequired,
    isLocked: PropTypes.bool.isRequired,
    isOc: PropTypes.bool.isRequired,
    upvotes: PropTypes.number.isRequired,
    downvotes: PropTypes.number.isRequired,
    views: PropTypes.number,
    commentCount: PropTypes.number.isRequired,
    createdAt: PropTypes.string.isRequired,
    subredditName: PropTypes.string.isRequired,
    isUpvoted: PropTypes.bool.isRequired,
    isDownvoted: PropTypes.bool.isRequired,
    imageUrls: PropTypes.array,
    poll: PropTypes.object,
    viewContext: PropTypes.string.isRequired,
};
