import React from 'react';
import PropTypes from 'prop-types';

/**
 * Renders the user flair.
 * @param {string} name - The username of the user.
 * @param {string} displayName - The display name of the user.
 * @param {string} pictureSrc - The source of the profile picture.
 * @param {boolean} isLink - The flag to check if the username is a link.
 * @return {JSX.Element} The rendered component.
 */export function UserCard({name, displayName, pictureSrc, isLink}) {
    return (
        <div className="mb-2 flex flex-row items-center" >
            <img src={pictureSrc}
                alt="picture" className='mr-2 size-8 rounded-full'/>
            <div className='flex flex-col justify-center'>
                <a className={`${isLink ? 'hover:underline' : ''}` }
                    href={isLink ? `https://www.reddit.com/user/${name}/` : ''} target='_blank' rel="noreferrer">
                    {`u/${name}`}
                </a>
                {displayName && <span className='text-[10px]'>{displayName}</span>}
            </div>
        </div>
    );
}

UserCard.propTypes = {
    name: PropTypes.string.isRequired,
    displayName: PropTypes.string,
    pictureSrc: PropTypes.string.isRequired,
    isLink: PropTypes.bool,
};

UserCard.defaultProps = {
    isLink: false,
    displayName: '',
};
