import React, {memo} from 'react';
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
 * @param {number} upvotes
 * @param {number} downvotes
 * @param {number} views
 * @param {number} commentCount
 * @param {string} createdAt
 * @param {string} subredditName
 * @param {string} subRedditName
 * @param {boolean} isUpvoted
 * @param {boolean} isDownvoted
 * @param {string[]} imageUrls
 * @param {object[]} images
 * @param {object} poll
 * @param {boolean} isSaved
 * @param {string} viewContext
 * @param {boolean} isHidden
 * @return {React.Component}
 */
function PostNonMemo({
    _id: postId,
    user: userId,
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
    upvotes,
    downvotes,
    views,
    commentCount,
    createdAt,
    subredditName,
    subRedditName,
    isUpvoted,
    isDownvoted,
    imageUrls,
    images,
    poll,
    isSaved = false,
    isHidden = false,
    viewContext,
}) {
    subredditName = subredditName || subRedditName;
    imageUrls = imageUrls || images?.map((image) => image.url);
    const {
        isCommentsPage,
        classNames,
        tag,
        userData,
        subredditData,
    } = usePost({isNSFW, isSpoiler, viewContext, userId, subredditName});
    const urlRedirect = `${subredditName ? '/r/' + subredditName:'/user/' + userData.username}` + '/comments/' + postId;
    return (
        <div className={classNames}>
            {!isCommentsPage &&
            <a
                href={urlRedirect}
                className={postClasses.a}
                target="_self" data-testid={`link-${postId}`}
            />}
            <PostInfo
                postId={postId}
                userData={userData}
                subredditData={subredditData}
                createdAt={createdAt}
                isSaved={isSaved}
                viewContext={viewContext}
                isHidden={isHidden}
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
                url={urlRedirect}
                viewContext={viewContext}
            />
        </div>
    );
}
export const Post = memo(PostNonMemo, (prevProps, nextProps) => {
    return prevProps._id === nextProps._id;
});
PostNonMemo.propTypes = {
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
    upvotes: PropTypes.number.isRequired,
    downvotes: PropTypes.number.isRequired,
    views: PropTypes.number,
    commentCount: PropTypes.number.isRequired,
    createdAt: PropTypes.string.isRequired,
    subredditName: PropTypes.string,
    subRedditName: PropTypes.string,
    isUpvoted: PropTypes.bool.isRequired,
    isDownvoted: PropTypes.bool.isRequired,
    imageUrls: PropTypes.array,
    images: PropTypes.array,
    poll: PropTypes.object,
    isSaved: PropTypes.bool,
    isHidden: PropTypes.bool,
    viewContext: PropTypes.string.isRequired,
};
