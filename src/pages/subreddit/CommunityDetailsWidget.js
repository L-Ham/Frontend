import React, {useEffect, useState} from 'react';
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
    const [description, setDescription] = useState('');

    const {
        name: subredditName,
        isOwnerView: isCustomizable,
    } = useSubreddit();

    useEffect(() => {
        getDescription(subredditName).then((description) => {
            setDescription(description);
        });
    }, []);

    return (
        <SubredditWidget title={subredditName} isCustomizable={isCustomizable} useDivForTitle={false}>
            <div className="mb-4 flex flex-col">
                <p>
                    {description}
                </p>
            </div>
            <CommunityStats/>
        </SubredditWidget>
    );
}

/**
 * Fetches the description from the Reddit API.
 * @param {string} subredditName The name of the subreddit.
 * @return {Promise} The promise object representing the API call.
 * @return {string} The description.
 * */
async function getDescription(subredditName) {
    // TODO: Fetch the description from the Reddit API.
    // MOCKED DATA
    return `Welcome to r/OnePiece, the community for Eiichiro Oda's manga and anime series One Piece.
            From the East Blue to the New World,
            anything related to the world of One Piece belongs here!
            If you've just set sail with the Straw Hat Pirates,
            be wary of spoilers on this subreddit!`;
}

