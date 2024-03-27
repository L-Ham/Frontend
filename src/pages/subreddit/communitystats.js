import React from 'react';
import PropTypes from 'prop-types';
// components
import {CommunityStatsItem} from './communitystatsitem';
// icons
import {getIconComponent} from '../../generic components/iconsmap';

/**
 * Renders the CommunityStats.
 * @param {number} subscribersCount - The number of members in the subreddit.
 * @param {number} currentlyViewingCount - The number of members online in the subreddit.
 * @param {string} rank - The rank of the subreddit by size.
 * @param {object} isSmallView - The isSmallView.
 * @return {JSX.Element} The rendered component.
 */
export function CommunityStats({subscribersCount,
    currentlyViewingCount, rank, isSmallView}) {
    if (!subscribersCount || !currentlyViewingCount) {
        return null;
    }

    const currentlyViewingText = 'Online';
    const subscribersText = 'Members';
    const OnlineIcon = getIconComponent('online', true);
    const ExternalIconOutline = getIconComponent('external', false);
    const data = [
        {
            text: subscribersText,
            title: numberToString(subscribersCount),
        },
        {
            text: currentlyViewingText,
            title: numberToString(currentlyViewingCount),
            icon: <OnlineIcon className='mr-1' style={{r: 4, cx: 4, cy: 5}} />,
        },
        ...(rank ? [{
            text: 'Rank by size',
            title: rank,
            icon: <ExternalIconOutline className='ml-0.5'/>,
        }] : []),
    ];

    return (
        <div className='flex flex-row'>
            {
                data.map((item) => <CommunityStatsItem key={item.title} item={item} isSmallView={isSmallView}/>)
            }
        </div>
    );
}

CommunityStats.propTypes = {
    subscribersCount: PropTypes.number,
    currentlyViewingCount: PropTypes.number,
    rank: PropTypes.string,
    isSmallView: PropTypes.bool,
};

CommunityStats.defaultProps = {
    rank: null,
    isSmallView: false,
    subscribersCount: 0,
    currentlyViewingCount: 0,
};

/**
 * Renders the CommunityStats.
 * @return {JSX.Element} The rendered component.
 */

const numberToString = (number) => {
    if (number > 1000000) {
        return `${(number / 1000000).toFixed(1)}m`;
    } else if (number > 1000) {
        return `${(number / 1000).toFixed(1)}k`;
    }
    return number.toString();
};
