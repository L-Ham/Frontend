import React from 'react';
import PropTypes from 'prop-types';

/**
 * Renders the user flair.
 * @param {string} name - The username of the user.
 * @param {string} pictureSrc - The source of the profile picture.
 * @param {boolean} isLink - The flag to check if the username is a link.
 * @return {JSX.Element} The rendered component.
 */export function ProfileActionCard({name, pictureSrc, isLink}) {
    return (
        <div className="mb-2 flex flex-row items-center" >
            <img src={pictureSrc}
                alt="picture" className='mr-2 size-8 rounded-full'/>
            <a className={`${isLink ? 'hover:underline' : ''}` }
                href={isLink ? `https://www.reddit.com/user/${name}/` : ''}>
                {`u/${name}`}
            </a>
        </div>
    );
}

ProfileActionCard.propTypes = {
    name: PropTypes.string.isRequired,
    pictureSrc: PropTypes.string.isRequired,
    isLink: PropTypes.bool,
};

ProfileActionCard.defaultProps = {
    isLink: false,
};
