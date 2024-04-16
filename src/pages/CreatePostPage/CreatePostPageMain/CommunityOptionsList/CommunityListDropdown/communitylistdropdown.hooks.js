import {useState, useEffect} from 'react';
import axios from 'axios';
import {API_ROUTES} from './apiRoutes';

export const useCommunityListDropDown = (searchInput) => {
    const [otherCommunities, setOtherCommunities] = useState([]);
    const [userCommunities, setUserCommunities] = useState([]);

    useEffect(() => {
        const loadData = async () => {
            try {
                const allUserCommunities = await getUserCommunities();
                const allCommunities = await getUserCommunities();
                // const allCommunities = await searchCommunities(searchInput);

                // TODO_BACKEND
                // const newOtherCommunities = allCommunities.filter((community) => {
                //     return !allUserCommunities.includes(community);
                // });

                // const newUserCommunities = allCommunities.filter((community) => {
                //     return allUserCommunities.includes(community);
                // });

                setOtherCommunities(allCommunities);
                setUserCommunities(allUserCommunities);
            } catch (error) {
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

// const searchCommunities = async (searchInput) => {
//     const response = await axios.get(API_ROUTES.searchCommunities, {
//         'search': searchInput,
//     });
//     const data = await response.data.communities;
//     return data;
// };
