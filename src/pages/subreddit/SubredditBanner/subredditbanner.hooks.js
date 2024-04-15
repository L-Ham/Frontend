import {useSubreddit} from '../subredditcontext.js';
import {useNavigate} from 'react-router-dom';
import {getIconComponent} from '../../../generic components/iconsmap.js';

export const useSubredditBanner = () => {
    const {about} = useSubreddit();
    const navigate = useNavigate();

    if (!about) return {};


    const {
        communityDetails: {
            bannerImage: bannerBackgroundImage,
            avatarImage: communityIcon,
            name,
            currentlyViewingCount: activeUserCount,
            membersCount: subscribersCount,
        },
    } = about;

    // constants
    const PlusIcon = getIconComponent('plus', true);
    const primaryColor = '#0079d3';
    const displayNamePrefixed = `r/${name}`;

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
