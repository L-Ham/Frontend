import React from 'react';
import PropTypes from 'prop-types';
// components
import {SubredditWidget} from './SubredditWidget';
import {CommunityStats} from './CommunityStats';

/**
 * Renders the subreddit info.
 * @param {string} name - The name of the subreddit.
 * @param {string} description - The description of the subreddit.
 * @param {string} membersCount - The number of members in the subreddit.
 * @param {string} onlineCount - The number of members online in the subreddit.
 * @param {number} rank - The rank of the subreddit by size.
 * @param {boolean} isCustomizable - The flag to check if the widget is customizable.
 * @return {JSX.Element} The rendered component.
 */
export function CommunityDetailsWidget({
    name,
    description,
    membersCount,
    onlineCount,
    rank,
    isCustomizable,
}) {
    return (
        <SubredditWidget title={name} isCustomizable={isCustomizable} useDivForTitle={false}>
            <div className="mb-4 flex flex-col">
                <p>
                    {description}
                </p>
            </div>
            <CommunityStats membersCount={membersCount}
                onlineCount={onlineCount} rank={rank}/>
        </SubredditWidget>
    );
}

CommunityDetailsWidget.propTypes = {
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    membersCount: PropTypes.string.isRequired,
    onlineCount: PropTypes.string.isRequired,
    rank: PropTypes.string.isRequired,
    isCustomizable: PropTypes.bool,
};


