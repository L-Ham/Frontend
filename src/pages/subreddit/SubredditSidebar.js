import React from 'react';
import PropTypes from 'prop-types';
import {SubredditInfo} from './SubredditInfo';
import {CommunityBookmarks} from './CommunityBookmarks';
import {UserFlair} from './UserFlair';
import {Flairs} from './Flairs';
import {SpoilInstructions} from './SpoilInstructions';
import {Rules} from './Rules';
import {SubredditModerators} from './SubredditModerators';
import './SubredditSidebar.css';


/**
 * Renders the subreddit sidebar.
 * @param {string} name - The name of the subreddit.
 * @param {string} description - The description of the subreddit.
 * @param {number} membersCount - The number of members in the subreddit.
 * @param {number} onlineCount - The number of members online in the subreddit.
 * @param {string} rank - The rank of the subreddit.
 * @param {string} username - The user flair.
 * @param {string} spoilInstructions - The spoil instructions.
 * @param {string} rules - The rules of the subreddit.
 * @param {string} moderators - The moderators of the subreddit.
 * @return {JSX.Element} The rendered component.
 */
export function SubredditSidebar({
    name,
    description,
    membersCount,
    onlineCount,
    rank,
    username,
    spoilInstructions,
    rules,
    moderators,
}) {
    return (
        <div className="subreddit-sidebar">
            <SubredditInfo
                name={name}
                description={description}
                membersCount={membersCount}
                onlineCount={onlineCount}
                rank={rank}
            />
            <UserFlair username={username}/>
            <CommunityBookmarks name={name}/>
            <Flairs name={name}/>
            <SpoilInstructions instructions={spoilInstructions}/>
            <Rules rules={rules}/>
            <SubredditModerators users={moderators} name={name}/>
        </div>
    );
}

SubredditSidebar.propTypes = {
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    membersCount: PropTypes.number.isRequired,
    onlineCount: PropTypes.number.isRequired,
    rank: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    spoilInstructions: PropTypes.string.isRequired,
    rules: PropTypes.string.isRequired,
    moderators: PropTypes.string.isRequired,
};
