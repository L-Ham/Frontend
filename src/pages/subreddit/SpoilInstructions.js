import React from 'react';
import PropTypes from 'prop-types';
import {SubredditSidebarItem} from './SubredditSidebarItem';
import './SpoilInstructions.css';

/**
 * Renders the spoil instructions.
 * @param {string} instructions - The spoil instructions.
 * @return {JSX.Element} The rendered component.
 */
export function SpoilInstructions({instructions}) {
    return (
        <SubredditSidebarItem title="DON'T SPOIL OTHERS.">
            <ul className="spoil-instructions">
                {instructions.map((instruction, idx) => (
                    <li key={idx}><p>{instruction}</p></li>
                ))}
            </ul>
        </SubredditSidebarItem>
    );
}

SpoilInstructions.propTypes = {
    instructions: PropTypes.arrayOf(PropTypes.string).isRequired,
};
