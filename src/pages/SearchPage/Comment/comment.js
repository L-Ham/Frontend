import React from 'react';
import {VIEW_CONTEXTS} from '../../../generic components/Post/data';
import {PosthHeader} from '../Generic/postheader';
// import {getIconComponent} from '../../../generic components/iconsmap';
import PropTypes from 'prop-types';

/**
 * Renders the comment component.
 * @param {string} postId - The ID of the post.
 * @param {string} subredditId - The ID of the subreddit.
 * @param {string} subredditName - The name of the subreddit.
 * @param {string} viewContext - The view context.
 * @param {string} postUrl - The URL of the post.
 * @param {string} postTitle - The title of the post.
 * @param {number} postUpvotes - The number of upvotes of the post.
 * @param {number} commentUpvotes - The number of upvotes of the comment.
 * @param {number} postCommentsCount - The number of comments.
 * @param {string} postCreatedAt - The creation date of the post.
 * @param {string} commentCreatedAt - The creation date of the comment.
 * @return {JSX.Element} The rendered post component.
 */
function Comment({
    commentData: {
        _id,
        postId,
        userId,
        userName,
        userAbout,
        userNickName,
        userAvatar,
        userBanner,
        userKarma,
        userCreatedAt,
        postCreatedAt,
        postTitle,
        postText,
        postUpvotes,
        postDownvotes,
        postKarma,
        postCommentCount,
        score,
        subRedditId,
        subRedditName,
        subRedditAvatar,
        subRedditBanner,
        subRedditDescription,
        subRedditMembers,
        isFriend,
        isMember,
        subRedditNickName,
        subRedditCreatedAt,
        subredditcurrentlyViewingNickname,
        commentText,
        commentImage,
        commentUpvotes,
        commentDownvotes,
        commentKarma,
        commentCreatedAt,
    }}) {
    const viewContext = VIEW_CONTEXTS.AGGREGATE_FEED;
    const link = subRedditName? ` /r/${subRedditName}/comments/${postId}`: `/user/${userName}/comments/${postId}`;
    const entityData1 = subRedditName ? {
        name: subRedditName,
        subredditId: subRedditId,
        avatarImage: subRedditAvatar,
        bannerImage: subRedditBanner,
        description: subRedditDescription,
        membersNickname: subRedditNickName,
        membersCount: subRedditMembers,
        currentlyViewingNickname: subredditcurrentlyViewingNickname,
        currentlyViewingCount: 0,
        isMember: isMember,
        isFavorite: false,
        isMuted: false,
        createdAt: subRedditCreatedAt,
    } : {
        userId: userId,
        displayName: 'loading',
        username: 'loading',
        commentKarma: 0,
        created: 0,
        postKarma: 0,
        isFriend: false,
        isBlocked: false,
        avatar: 'https://placehold.co/400',
        banner: 'https://placehold.co/400',
        About: 'loading',
    };

    const entityData2 = {
        userId: userId,
        displayName: userNickName,
        username: userName,
        commentKarma: userKarma,
        created: userCreatedAt,
        postKarma: userKarma,
        isFriend: isFriend,
        isBlocked: false,
        avatar: userAvatar,
        banner: userBanner,
        About: userAbout,
    };


    return (
        <div className='relative my-1 flex items-center
        justify-between p-4 hover:bg-[var(--color-neutral-background-hover)] md:rounded-[16px]'>

            <a href={link}
                className="absolute inset-0">
            </a>

            {/* Post content */}
            <div className='flex w-full min-w-0 flex-col items-start pr-4'>
                <PosthHeader
                    postId={postId}
                    entityData={entityData1}
                    isUser={subRedditName === null}
                    createdAt={postCreatedAt}
                    viewContext={viewContext}
                />

                {/* Post Title */}
                <h2 href={link} className='m-0 mb-2 line-clamp-3 text-ellipsis text-base font-semibold
                 leading-5 text-[var(--color-neutral-content)] no-underline hover:no-underline'>
                    {postTitle}
                </h2>

                {/* Comment Component */}
                <div className='group relative mb-2 w-full rounded-[16px] bg-[var(--color-neutral-background-weak)]'>
                    <div className='relative p-4'>
                        {/* TODO: To update it to user icon not subreddit */}
                        {/* header {user icon and name. Time posted. Hovercard} */}
                        <PosthHeader
                            postId={postId}
                            entityData={entityData2}
                            isUser={true}
                            createdAt={commentCreatedAt}
                            viewContext={viewContext}
                        />

                        {/* Comment Content */}
                        <div className='max-h-[260px] overflow-hidden text-ellipsis
                        text-[var(--color-neutral-content-strong)] no-underline hover:no-underline'>
                            <p>
                                {commentText}
                            </p>
                        </div>

                        {/* Comment Footer */}
                        <p className="text-xs text-[var(--color-neutral-content-weak)]">
                            <span>
                                {`${commentUpvotes} votes`}
                            </span>
                        </p>
                    </div>
                </div>

                {/* Goto Thread Link */}
                <a className="relative mb-2  text-xs font-semibold text-[var(--color-primary-plain)]
                            no-underline hover:text-[var(--color-a-hover)]"
                href={link}>Go To Thread</a>

                {/* Post footer. votes and comments */}
                <div className='text-xs text-[var(--color-neutral-content-weak)]'>
                    <span>
                        {`${postKarma} votes `}
                    </span>
                    <span className="mx-1">·</span>
                    <span>
                        {`${postCommentCount} comments`}
                    </span>


                </div>
            </div>
        </div>
    );
}

Comment.propTypes = {
    commentData: PropTypes.object.isRequired,
};

export {Comment};
