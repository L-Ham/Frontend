import {getIconComponent} from '../../../iconsmap.js';
import {DATA} from '../../data.js';
import {formatNumber} from '../../../utils.js';

export const useVote = ({postId}) => {
    const {score} = DATA[postId];
    return {
        score: formatNumber(score),
        UpvoteIcon: getIconComponent('upvote', false),
        DownvoteIcon: getIconComponent('downvote', false),
    };
};
