import React from 'react';
// components
import {SubredditWidget} from './SubredditWidget';
import {CommunityStats} from './CommunityStats';
// hooks
import {useSubreddit} from './subredditContext';

/**
 * Renders the subreddit info.
 * @return {JSX.Element} The rendered component.
 */
export function CommunityDetailsWidget() {
    const {
        name,
        description,
        isOwnerView: isCustomizable,
    } = useSubreddit();

    return (
        <SubredditWidget title={name} isCustomizable={isCustomizable} useDivForTitle={false}>
            <div className="mb-4 flex flex-col">
                <p>
                    {description}
                </p>
            </div>
            <CommunityStats/>
        </SubredditWidget>
    );
}


