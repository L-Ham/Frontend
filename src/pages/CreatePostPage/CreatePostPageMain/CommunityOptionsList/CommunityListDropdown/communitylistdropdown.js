import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {CommunityListDropdownGroup} from './CommunityListDropdownGroup/communitylistdropdowngroup.js';

/**
 * Renders the community list dropdown.
 * @param {Object} props - The component props.
 * @param {Array} props.userCommunites - The user's communities.
 * @param {string} props.searchInput - The search input.
 * @return {JSX.Element} The rendered component.
 */
export function CommunityListDropdown({searchInput}) {
    // TODO: fetch user communities
    const userCommunites = [{name: 'r/OnePiece', members: '3568954',
        icon: 'https://styles.redditmedia.com/t5_2rfz5/styles/communityIcon_0jgg9qqdkbxb1.png'}];

    const [otherCommunities, setOtherCommunities] = useState([]);

    useEffect(() => {
        // TODO fetch  other communities
        const newOtherCommunities = [{name: 'r/OnePieceTC', members: '79950',
            icon: 'https://styles.redditmedia.com/t5_2rfz5/styles/communityIcon_0jgg9qqdkbxb1.png'},
        {name: 'r/OnePiecePowerScaling', members: '43452',
            icon: 'https://styles.redditmedia.com/t5_2rfz5/styles/communityIcon_0jgg9qqdkbxb1.png'},
        {name: 'r/OnePieceSpoilers', members: '26092',
            icon: 'https://styles.redditmedia.com/t5_2rfz5/styles/communityIcon_0jgg9qqdkbxb1.png'},
        {name: 'r/OnePieceTCG', members: '49877',
            icon: 'https://styles.redditmedia.com/t5_2rfz5/styles/communityIcon_0jgg9qqdkbxb1.png'},
        {name: 'r/OnePieceLiveAction', members: '41536',
            icon: 'https://styles.redditmedia.com/t5_2rfz5/styles/communityIcon_0jgg9qqdkbxb1.png'},
        {name: 'r/OnePieceMG', members: '222141',
            icon: 'https://styles.redditmedia.com/t5_2rfz5/styles/communityIcon_0jgg9qqdkbxb1.png'},
        {name: 'r/OnePieceCircleHook', members: '124563',
            icon: 'https://styles.redditmedia.com/t5_2rfz5/styles/communityIcon_0jgg9qqdkbxb1.png'},
        {name: 'r/OnePiece', members: '1142455',
            icon: 'https://styles.redditmedia.com/t5_2rfz5/styles/communityIcon_0jgg9qqdkbxb1.png'}];

        setOtherCommunities(newOtherCommunities);
    }, [searchInput]);

    return (
        <div className='absolute
        -inset-x-px top-full z-[11]
         max-h-[400px] overflow-y-scroll rounded-[0_0_4px_4px]
          border-DEFAULT border-solid
           border-[color:var(--newCommunityTheme-line)]
           bg-[color:var(--newCommunityTheme-body)]
           shadow-[0_-3px_0_-1px_var(--newCommunityTheme-body),0_0_2px_1px_var(--newCommunityTheme-line)]'>
            <CommunityListDropdownGroup CommunitiesData={userCommunites} title='Your Communities'
                isContainButton={true} />
            <CommunityListDropdownGroup CommunitiesData={otherCommunities} title='others' />
        </div>
    );
}

CommunityListDropdown.propTypes = {
    userCommunites: PropTypes.array.isRequired,
    searchInput: PropTypes.string.isRequired,
};
