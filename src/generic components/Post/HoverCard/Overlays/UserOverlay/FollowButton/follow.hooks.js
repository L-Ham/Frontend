import {getIconComponent} from '../../../../../iconsmap';

export const useFollow = () => {
    return {
        UnfollowIcon: getIconComponent('unfollow', false),
        FollowIcon: getIconComponent('follow', false),
    };
};
