import React from 'react';
import {VIEW_CONTEXTS} from '../../../generic components/Post/data';
import {NSFW} from '../Generic/nsfw';
import {PosthHeader} from '../Generic/postheader';
import {PostFooter} from '../Generic/postfooter';
import PropTypes from 'prop-types';


/**
 * Renders the post component.
 * @return {JSX.Element} The rendered post component.
 */
function Post({
    postData: {
        postId,
        title,
        type,
        text,
        image,
        video,
        URL,
        postUpvotes,
        postDownvotes,
        postCommentCount,
        postKarma,
        postCommentKarma,
        score,
        isUpvoted,
        isDownvoted,
        isNSFW,
        postCreatedAt,
        userId,
        userName,
        userAbout,
        userNickName,
        userAvatarImage,
        userBannerImage,
        userKarma,
        userCreatedAt,
        subreddit,
        subRedditId,
        avatarImageSubReddit,
        subredditBannerImage,
        subRedditDescription,
        subRedditMembers,
        subRedditNickName,
        subRedditCreated,
        subredditcurrentlyViewingNickname,
        isFriend,
        isMember,
    }}) {
    // const viewContext = VIEW_CONTEXTS.AGGREGATE_FEED;
    const isUser = subreddit === null;
    const link = subreddit? ` /r/${subreddit}/comments/${postId}`: `/user/${userName}/comments/${postId}`;
    const entityData = subreddit ? {
        name: subreddit,
        subredditId: subRedditId,
        avatarImage: avatarImageSubReddit,
        bannerImage: subredditBannerImage,
        description: subRedditDescription,
        membersNickname: subRedditNickName,
        membersCount: subRedditMembers,
        currentlyViewingNickname: subredditcurrentlyViewingNickname,
        currentlyViewingCount: 0,
        isMember: isMember,
        isFavorite: false,
        isMuted: false,
        createdAt: subRedditCreated,
    } : {
        userId: userId,
        displayName: userNickName,
        username: userName,
        commentKarma: userKarma,
        created: userCreatedAt,
        postKarma: userKarma,
        isFriend: isFriend,
        isBlocked: false,
        avatar: userAvatarImage,
        banner: userBannerImage,
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
                    entityData={entityData}
                    isUser={isUser}
                    createdAt={postCreatedAt}
                    viewContext={VIEW_CONTEXTS.AGGREGATE_FEED}
                />

                {/* NSFW icon */}
                { isNSFW && <NSFW/> }

                {/* Post Title */}

                <a href={link} className='mb-2 line-clamp-3 text-ellipsis text-base
                         font-semibold leading-5 text-[var(--color-neutral-content-strong)]
                         no-underline visited:text-[var(--color-neutral-content-weak)] hover:no-underline md:text-lg
                          md:leading-6'>
                    {title}
                </a>

                {/* Post footer. votes and comments */}
                <PostFooter score={score} commentCount={postCommentCount} />
            </div>

            {/* Post media */}
            { image &&
                <a href={link}>
                    <div className='inline overflow-hidden rounded-DEFAULT'>
                        <div className={`h-[60px] w-[80px] rounded-DEFAULT object-cover
                        md:h-[90px]  md:w-[120px] ${isNSFW ? 'blur-md' : ''}`}>

                            <div className='size-[inherit]'>
                                <img src={image} alt="post media"
                                    className='size-[inherit] object-cover'
                                />
                            </div>
                        </div>
                    </div>
                </a>
            }

        </div>
    );
}

Post.propTypes = {
    postData: PropTypes.object.isRequired,
};

export {Post};
