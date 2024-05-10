import React, {useState, useEffect} from 'react';
import {axiosInstance as axios} from '../../../../requests/axios.js';
import {API_ROUTES} from '../../../../requests/routes.js';
import {PopularCommunity} from './popularcommunity.js';

export const usePopularCommunities = () => {
    const [numberOfCommunities, setNumberOfCommunities] = useState(5);
    const [buttonLabel, setButtonLabel] = useState('See more');

    const handleClick = () => {
        if (numberOfCommunities === 5) {
            setNumberOfCommunities(20);
            setButtonLabel('See less');
        } else {
            setNumberOfCommunities(5);
            setButtonLabel('See more');
        }
    };

    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get(API_ROUTES.getPopularCommunities)
            .then((response) => {
                setData(response.data.popularCommunities);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    const popularCommunities = data.slice(0, numberOfCommunities).map((community, index) => (
        <PopularCommunity key={index}
            iconUrl={community.avatarImageUrl || 'https://www.redditstatic.com/avatars/avatar_default_02_24A0ED.png'}
            communityName={community.name}
            memberCount={community.memberCount}
        />
    ));

    return {
        popularCommunities,
        handleClick,
        buttonLabel,
    };
};
