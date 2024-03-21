import React from 'react';
import PropTypes from 'prop-types';
import './ProfileActionCard.css';

/**
 * Renders the user flair.
 * @param {string} name - The username of the user.
 * @param {string} pictureSrc - The source of the profile picture.
 * @return {JSX.Element} The rendered component.
 */
export function ProfileActionCard({name, pictureSrc}) {
    return (
        <div className="profile-action-card">
            <img src={pictureSrc}
                alt="picture"/>
            <span>{name}</span>
        </div>
    );
}

ProfileActionCard.propTypes = {
    name: PropTypes.string.isRequired,
    pictureSrc: PropTypes.string.isRequired,
};
