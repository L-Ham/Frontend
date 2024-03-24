import React from 'react';
import {SubredditWidget} from './SubredditWidget';
// hooks
import {useSubreddit} from './subredditContext';

/**
 * Renders the spoil instructions.
 * @return {JSX.Element} The rendered component.
 */
export function SpoilInstructions() {
    const {spoilInstructions: instructions, isOwnerView} = useSubreddit();
    return (
        <SubredditWidget title="DON'T SPOIL OTHERS." isOwnerView={isOwnerView}>
            <ul className="m-0 px-5 py-0">
                {instructions.map((instruction, idx) => (
                    <li key={idx} className='mb-1.5 list-disc'><p>{instruction}</p></li>
                ))}
            </ul>
        </SubredditWidget>
    );
}

