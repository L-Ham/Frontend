import React from 'react';
import PropTypes from 'prop-types';
import {CommunityStatsItem} from './CommunityStatsItem';
// hooks
import {useSubreddit} from './subredditContext';

/**
 * Renders the CommunityStats.
 * @param {number} membersCount - The number of members in the subreddit.
 * @param {number} currentlyViewingCount - The number of members online in the subreddit.
 * @param {number} rank - The rank of the subreddit by size.
 * @return {JSX.Element} The rendered component.
 */
export function CommunityStats() {
    const {
        membersCount,
        currentlyViewingCount,
        rank,
    } = useSubreddit();

    const data = [
        {
            text: 'Members',
            title: membersCount,
        },
        {
            text: 'Online',
            title: currentlyViewingCount,
            icon: 'online',
        },
        {
            text: 'Rank by size',
            title: rank,
            icon: 'link',
        },
    ];

    return (
        <div className='flex'>
            {
                data.map((item) => <CommunityStatsItem key={item.title} item={item} />)
            }
        </div>
    );
}

CommunityStats.propTypes = {
    membersCount: PropTypes.string.isRequired,
    currentlyViewingCount: PropTypes.string.isRequired,
    rank: PropTypes.string.isRequired,
};
