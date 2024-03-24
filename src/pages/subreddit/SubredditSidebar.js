import React from 'react';
import PropTypes from 'prop-types';
import {SubredditInfo} from './SubredditInfo';
import {CommunityBookmarks} from './CommunityBookmarks';
import {UserFlair} from './UserFlair';
import {Flairs} from './Flairs';
import {SpoilInstructions} from './SpoilInstructions';
import {Rules} from './Rules';
import {SubredditModerators} from './SubredditModerators';


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
        <div
            className="sticky top-0 m-0 flex h-screen w-80 flex-col
            overflow-y-auto rounded-lg bg-[#0c0700] font-sans text-xs text-[#b99617]">
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
    membersCount: PropTypes.string.isRequired,
    onlineCount: PropTypes.string.isRequired,
    rank: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    spoilInstructions: PropTypes.arrayOf(PropTypes.string).isRequired,
    rules: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string.isRequired,
        description: PropTypes.arrayOf(PropTypes.string).isRequired,
    })).isRequired,
    moderators: PropTypes.arrayOf(
        PropTypes.shape({
            username: PropTypes.string.isRequired,
            profilePictureSrc: PropTypes.string.isRequired,
        }),
    ).isRequired,
};
