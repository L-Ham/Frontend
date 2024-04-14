import {DATA} from '../data';

export const usePostInfo = ({subredditName}) => {
    // request
    const {isMember, avatar, subredditId} = DATA[subredditName];
    return {
        isMember,
        subredditAvatar: avatar,
        subredditId,
    };
};
