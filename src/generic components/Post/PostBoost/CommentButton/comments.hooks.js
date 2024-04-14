import {getIconComponent} from '../../../iconsmap.js';
import {formatNumber} from '../../../utils.js';

export const useComments = ({commentCount}) => {
    return {
        count: formatNumber(commentCount),
        CommentsIcon: getIconComponent('comments', false),
    };
};
