import {useEffect, useState} from 'react';
import {VIEW_CONTEXTS} from './data.js';
import {postClasses} from './post.styles.js';
import {API_ROUTES} from '../../requests/routes.js';
import {axiosInstance as axios} from '../../requests/axios.js';
export const usePost = ({isNSFW, isSpoiler, viewContext, userId, subredditName,
    creatorAvatar, creatorName, subRedditAvatar}) => {
    // viewContexts: AggregateFeed, CommentsPage, SubredditFeed
    // postTypes: gallery, text, image, link, video, multiMedia
    // viewType: cardView, compactView
    const [userData, setUserData] = useState({
        userId: userId,
        displayName: 'loading',
        username: creatorName || 'loading',
        commentKarma: 0,
        created: 0,
        postKarma: 0,
        isFriend: false,
        isBlocked: false,
        avatar: creatorAvatar || 'https://placehold.co/400',
        banner: 'https://placehold.co/400',
        About: 'loading',
    });
    const [subredditData, setSubredditData] = useState({
        name: subredditName,
        subredditId: 'loading',
        avatarImage: subRedditAvatar || 'https://placehold.co/400',
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
    const isCommentsPage = viewContext === VIEW_CONTEXTS.COMMENTS_PAGE;
    const classNames = `${postClasses.root} ${isCommentsPage ? 'px-0 py-1' : postClasses.rootC}`;
    const tag = isNSFW ? 'nsfw' : isSpoiler ? 'spoiler' : '';
    useEffect(() => {
        const fetchUser = async () => {
            try {
                const userResponse = await axios.get(API_ROUTES.userInfo(userId));
                if (subredditName) {
                    const subredditResponse = await axios.get(API_ROUTES.communityDetails(subredditName));
                    setSubredditData(subredditResponse.data.communityDetails);
                }
                setUserData(userResponse.data.user);
            } catch (error) {
                // console.error(error);
            }
        };
        fetchUser();
    }, []);
    return {
        isCommentsPage,
        classNames,
        tag,
        userData,
        subredditData,
    };
};
