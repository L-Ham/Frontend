import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {CommunityListDropdownGroup} from './CommunityListDropdownGroup/communitylistdropdowngroup.js';
import {axiosInstance as axios} from '../../../../../requests/axios.js';
import {API_ROUTES} from '../../../../../requests/routes.js';
import {classes} from './communitylistdropdown.styles.js';

/**
 * Renders the community list dropdown.
 * @param {Object} props - The component props.
 * @param {Array} props.userCommunities - The user's communities.
 * @param {string} props.searchInput - The search input.
 * @return {JSX.Element} The rendered component.
 */
export function CommunityListDropdown({searchInput}) {
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

    if (!userCommunities.length && !otherCommunities.length) return null;

    return (
        <div className={classes.communityListDropdownDiv}>
            <CommunityListDropdownGroup CommunitiesData={userCommunities} title='Your Communities'
                isContainButton={true} />
            <CommunityListDropdownGroup CommunitiesData={otherCommunities} title='others' />
        </div>
    );
}

CommunityListDropdown.propTypes = {
    userCommunities: PropTypes.array.isRequired,
    searchInput: PropTypes.string.isRequired,
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
