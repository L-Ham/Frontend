import React from 'react';
import PropTypes from 'prop-types';

/**
 * Profile icon component
 * @component
 * @param {string} imgSrc - The image source
 * @param {string} statusColor - The status color
 * @param {function} onClick - The onClick function for the button (optional)
 * @example
 * // Render the profile icon
 * <ProfileIcon />
 * @return {JSX.Element} The profile icon component
 */
function ProfileIcon({imgSrc = 'https://www.redditstatic.com/avatars/defaults/v2/avatar_default_1.png',
    statusColor = '#55bd46', onClick = () => {}}) {
    return (
        <button className='button-medium
            inline-flex size-10 max-w-[40px]
            items-center justify-center overflow-visible px-2 ' onClick={onClick}>

            <span className='flex'>
                <span className='inline-flex items-center justify-center'>
                    <span className='relative inline-block size-8 rounded-full
                         [&>:first-child]:mb-0 [&>:first-child]:rounded-full'>

                        <img src={imgSrc}
                            alt='User Avatar' className='max-w-full'></img>

                        <span className='absolute bottom-0 right-[0.0825rem]
                                flex size-[.5rem] rounded-full border-[0.0625rem] border-solid
                                border-white' style={{backgroundColor: statusColor}}>

                        </span>
                    </span>
                </span>
            </span>

        </button>
    );
}

ProfileIcon.propTypes = {
    imgSrc: PropTypes.string,
    statusColor: PropTypes.string,
    onClick: PropTypes.func,
};

export {ProfileIcon};
