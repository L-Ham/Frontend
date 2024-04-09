import {useSubreddit} from '../subredditcontext.js';
import {useNavigate} from 'react-router-dom';
import {getIconComponent} from '../../../generic components/iconsmap.js';

export const useSubredditBanner = () => {
    const {about} = useSubreddit();
    const navigate = useNavigate();

    if (!about) return {};

    const {
        data: {
            banner_background_image: bannerBgImg,
            community_icon: comIcon,
            display_name_prefixed: displayNamePrefixed,
            active_user_count: activeUserCount,
            subscribers: subscribersCount,
            primary_color: primaryColor,
        },
    } = about;

    // constants
    const bannerBackgroundImage = bannerBgImg.split('width')[0];
    const communityIcon = comIcon.split('width')[0];
    const PlusIcon = getIconComponent('plus', true);

    // functions
    const handleCreatePost = () => {
        navigate(`submit`);
    };

    return {
        bannerBackgroundImage,
        communityIcon,
        displayNamePrefixed,
        activeUserCount,
        subscribersCount,
        primaryColor,
        PlusIcon,
        handleCreatePost,
    };
};
