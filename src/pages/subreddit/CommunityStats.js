import React from 'react';
import PropTypes from 'prop-types';
import {CommunityStatsItem} from './CommunityStatsItem';
import './CommunityStats.css';

/**
 * Renders the CommunityStats.
 * @param {number} membersCount - The number of members in the subreddit.
 * @param {number} onlineCount - The number of members online in the subreddit.
 * @param {number} rank - The rank of the subreddit by size.
 * @return {JSX.Element} The rendered component.
 */
export function CommunityStats({
    membersCount,
    onlineCount,
    rank,
}) {
    const data = [
        {
            text: 'Members',
            title: membersCount,
        },
        {
            text: 'Online',
            title: onlineCount,
            icon: 'online',
        },
        {
            text: 'Rank by size',
            title: rank,
            icon: 'link',
        },
    ];

    return (
        <div className='subredditinfo__CommunityStats'>
            {
                data.map((item) => <CommunityStatsItem key={item.title} item={item} />)
            }
        </div>
    );
}

CommunityStats.propTypes = {
    membersCount: PropTypes.number.isRequired,
    onlineCount: PropTypes.number.isRequired,
    rank: PropTypes.number.isRequired,
};
