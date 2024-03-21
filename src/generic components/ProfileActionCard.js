import React from 'react';
import PropTypes from 'prop-types';

/**
 * Renders the user flair.
 * @param {string} name - The username of the user.
 * @param {string} pictureSrc - The source of the profile picture.
 * @return {JSX.Element} The rendered component.
 */
export function ProfileActionCard({name, pictureSrc}) {
    return (
        <div className="mb-2 flex flex-row items-center">
            <img src={pictureSrc}
                alt="picture" className='mr-2 size-8 rounded-full'/>
            <span>{name}</span>
        </div>
    );
}

ProfileActionCard.propTypes = {
    name: PropTypes.string.isRequired,
    pictureSrc: PropTypes.string.isRequired,
};
