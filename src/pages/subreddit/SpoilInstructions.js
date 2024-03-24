import React from 'react';
import PropTypes from 'prop-types';
import {SubredditWidget} from './SubredditWidget';

/**
 * Renders the spoil instructions.
 * @param {string} instructions - The spoil instructions.
 * @param {boolean} isOwnerView - The flag to check if the user is viewing the feed.
 * @return {JSX.Element} The rendered component.
 */
export function SpoilInstructions({instructions, isOwnerView}) {
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

SpoilInstructions.propTypes = {
    instructions: PropTypes.arrayOf(PropTypes.string).isRequired,
    isOwnerView: PropTypes.bool,
};
