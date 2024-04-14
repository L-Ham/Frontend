import {useState, useEffect} from 'react';
import {sectionClasses} from '../sidebarsection.styles.js';
import {getIconComponent} from '../../../../generic components/iconsmap.js';
import {axiosInstance as axios} from '../../../../requests/axios.js';
import {API_ROUTES} from '../../../../requests/routes.js';

// communities section hooks
export const useCommunitiesSection = () => {
    const [isOpen, setIsOpen] = useState(true);
    const rootStyles = isOpen ? `${sectionClasses.root} ${sectionClasses.open}` :
        `${sectionClasses.root} ${sectionClasses.close}`;

    // fetch communities
    const [Communities, setCommunities] = useState([]);
    useEffect(() => {
        axios.get(API_ROUTES.getCommunities)
            .then((response) => {
                setCommunities(response.data.communities);
            }).catch((error) => {
                console.error('Error fetching communities:', error);
            });
    }, []);


    return {
        isOpen,
        setIsOpen,
        rootStyles,
        Communities,
    };
};

// community item hooks
export const useCommunityItem = ({communityId, isFavorite}) => {
    const [starred, setStarred] = useState(isFavorite);
    // console.log({communityId, isFavorite});
    const StarIcon = getIconComponent('star', starred);

    /**
     * Handles the star button click
     * @param {Object} e - The event object
     * @return {undefined}
     * */
    function handleStar(e) {
        e.preventDefault();

        const toggleFavorite = (route) => {
            axios.patch(route, {
                subRedditId: communityId,
            }).catch((error) => {
                console.error(`Error:`, error);
            });
        };

        if (!starred) {
            toggleFavorite(API_ROUTES.setFavorite);
        } else {
            toggleFavorite(API_ROUTES.unsetFavorite);
        }

        // Toggle the state after the API call
        setStarred(!starred);
    }


    return {
        handleStar,
        StarIcon,
    };
};

// create community item hooks
export const useCreateCommunityItem = () => {
    const Icon = getIconComponent('add', false);

    /**
     * Handles the create community click event
     * @param {Object} e - The event object
     * @return {undefined}
     * */
    function onClick(e) {
        e.preventDefault();
        alert('Create Community');
    }

    return {
        Icon,
        onClick,
    };
};
