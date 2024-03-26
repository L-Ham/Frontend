import React from 'react';
import propTypes from 'prop-types';
// components
import {SubredditWidget} from './SubredditWidget';
import {CommunityStats} from './CommunityStats';
// hooks
import {useSubreddit} from './subredditContext';

/**
 * Renders the subreddit info.
 * @param {object} props - The props.
 * @param {string} props.id - The id of the widget.
 * @param {string} props.description - The description of the subreddit.
 * @param {number} props.currentlyViewingCount - The number of users currently viewing the subreddit.
 * @param {number} props.subscribersCount - The number of subscribers to the subreddit.
 * @return {JSX.Element} The rendered component.
 */
export function CommunityDetailsWidget({id, description, currentlyViewingCount, subscribersCount}) {
    const {about} = useSubreddit();

    if (!about | !id | !description | !currentlyViewingCount | !subscribersCount) return null;

    const {data: {user_is_moderator: isCustomizable, title}} = about;

    return (
        <SubredditWidget title={title} isCustomizable={isCustomizable} useDivForTitle={false} id={id}>
            <div className="mb-4 flex flex-col">
                <p>
                    {description}
                </p>
            </div>
            <CommunityStats currentlyViewingCount={currentlyViewingCount} subscribersCount={subscribersCount}/>
        </SubredditWidget>
    );
}

CommunityDetailsWidget.propTypes = {
    id: propTypes.string.isRequired,
    description: propTypes.string.isRequired,
    currentlyViewingCount: propTypes.number.isRequired,
    subscribersCount: propTypes.number.isRequired,
};
