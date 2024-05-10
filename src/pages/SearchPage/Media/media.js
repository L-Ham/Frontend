import React from 'react';
import {VIEW_CONTEXTS} from '../../../generic components/Post/data';
import {HoverCard} from '../../../generic components/Post/HoverCard/hovercard';
import PropTypes from 'prop-types';

/**
 * Selectors component
 * @return {React.Component}
 */
function Media({
    postData: {
        postId,
        title,
        type,
        text,
        image,
        video,
        URL,
        postCommentCount,
        userName,
        userId,
        userAbout,
        userAvatarImage,
        subreddit,
        subRedditId,
        avatarImageSubReddit,
        subredditBanner,
        subRedditDescription,
        subRedditMembers,
        subRedditNickName,
        subRedditCreated,
        score,
        isUpvoted,
        isDownvoted,
        commentCount,
        isNSFW,
        createdAt,
    },
}) {
    const isUser = subreddit === null;
    const link = subreddit? ` /r/${subreddit}/comments/${postId}`: `/user/${userName}/comments/${postId}`;
    const entityData = subreddit ? {
        name: subreddit,
        subredditId: subRedditId,
        avatarImage: avatarImageSubReddit,
        bannerImage: subredditBanner,
        description: subRedditDescription,
        membersNickname: subRedditNickName,
        membersCount: subRedditMembers,
        currentlyViewingNickname: 'Online',
        currentlyViewingCount: 0,
        isMember: false,
        isFavorite: false,
        isMuted: false,
        createdAt: subRedditCreated,
    } : {
        userId: 'loading',
        displayName: 'loading',
        username: userName,
        commentKarma: 0,
        created: 0,
        postKarma: 0,
        isFriend: false,
        isBlocked: false,
        avatar: userAvatarImage,
        banner: 'https://placehold.co/400',
        About: userAbout,
    };
    return (
        <div className='my-4'>
            <a className='text-[var(--color-neutral-content-weak)] no-underline' href={link}>
                <div className='w-full overflow-hidden rounded-[8px] bg-[var(--color-neutral-background-weak)]'>
                    <img src={image}
                        alt='media' className='w-full object-cover' />
                </div>
            </a>
            <div className='mt-1'>
                <HoverCard
                    postId={postId}
                    viewContext={VIEW_CONTEXTS.AGGREGATE_FEED}
                    isUser={isUser}
                    entityData={entityData}
                />
            </div>
            <a href={link} className="mt-1 line-clamp-2 text-sm font-semibold text-[var(--color-neutral-content-strong)]
            hover:underline">
                {title}
            </a>
        </div>
    );
}

Media.propTypes = {
    postData: PropTypes.object.isRequired,
};

export {Media};
