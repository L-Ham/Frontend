import {useState, useEffect} from 'react';
import {axiosInstance as axios} from '../../../../../requests/axios';
import {API_ROUTES} from '../../../../../requests/routes';
import {useNotifications} from '../../../../../generic components/Notifications/notificationsContext';

export const useCommunityListDropDown = (searchInput) => {
    const [otherCommunities, setOtherCommunities] = useState([]);
    const [userCommunities, setUserCommunities] = useState([]);
    const {addNotification} = useNotifications();

    useEffect(() => {
        const loadData = async () => {
            try {
                // remove r/ from the searchInput if it exists
                searchInput = searchInput.replace('r/', '');

                const allUserCommunities = await getUserCommunities();
                const allCommunities = await searchCommunities(searchInput);


                const restructuredAllCommunities = allCommunities.matchingNames.map((community) => {
                    const avatar = community ?
                        community.appearance ? community.appearance.avatarImage ?
                            community.appearance.avatarImage.url : null : null : null;
                    return {
                        communityAvatar: avatar,
                        communityId: community._id,
                        communityName: community.name,
                        isFavourite: false,
                        memberCount: community.membersCount,
                    };
                });

                // Filter for communities the user is not a member of
                const newOtherCommunities = restructuredAllCommunities.filter((community) =>
                    !allUserCommunities.some((userCommunity) => userCommunity.communityId === community.communityId),
                );

                // Filter for communities the user is a member of
                const newUserCommunities = restructuredAllCommunities.filter((community) =>
                    allUserCommunities.some((userCommunity) => userCommunity.communityId === community.communityId),
                );


                console.log('allCommunities', allCommunities);
                console.log('allUserCommunities', allUserCommunities);
                console.log('restructuredAllCommunities', restructuredAllCommunities);
                console.log('newOtherCommunities', newOtherCommunities);
                console.log('newUserCommunities', newUserCommunities);

                setOtherCommunities(newOtherCommunities);
                setUserCommunities(newUserCommunities);
            } catch (error) {
                addNotification({type: 'failure',
                    message: 'Failed to fetch communitites data, please try again later'});
                console.error('Failed to fetch communitites data', error);
            }
        };
        loadData();
    }, [searchInput]);

    return {
        otherCommunities,
        userCommunities,
    };
};

const getUserCommunities = async () => {
    const response = await axios.get(API_ROUTES.getUserCommunities);
    const data = await response.data.communities;
    return data;
};

const searchCommunities = async (searchInput) => {
    const response = await axios.get(API_ROUTES.searchCommunities(searchInput));
    const data = await response.data;
    return data;
};
