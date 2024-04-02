import {DATA} from '../data';

export const usePostInfo = ({postId}) => {
    const {subreddit_id: subredditId} = DATA[postId];
    const {user_is_subscriber: isSubscriber} = DATA[subredditId];
    return {
        isSubscriber,
    };
};
