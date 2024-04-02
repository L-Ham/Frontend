import {getIconComponent} from '../../../iconsmap.js';
import {DATA} from '../../data.js';
import {formatNumber} from '../../../utils.js';

export const useComments = ({postId}) => {
    const {permalink, commentCount} = DATA[postId];
    return {
        permalink,
        commentCount: formatNumber(commentCount),
        CommentsIcon: getIconComponent('comments', false),
    };
};
