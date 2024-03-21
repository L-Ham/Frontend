import React from 'react';
import PropTypes from 'prop-types';
import {SubredditSidebarItem} from './SubredditSidebarItem';

/**
 * Renders the spoil instructions.
 * @param {string} instructions - The spoil instructions.
 * @return {JSX.Element} The rendered component.
 */
export function SpoilInstructions({instructions}) {
    return (
        <SubredditSidebarItem title="DON'T SPOIL OTHERS.">
            <ul className="m-0 px-5 py-0">
                {instructions.map((instruction, idx) => (
                    <li key={idx} className='mb-1.5 list-disc'><p>{instruction}</p></li>
                ))}
            </ul>
        </SubredditSidebarItem>
    );
}

SpoilInstructions.propTypes = {
    instructions: PropTypes.arrayOf(PropTypes.string).isRequired,
};
