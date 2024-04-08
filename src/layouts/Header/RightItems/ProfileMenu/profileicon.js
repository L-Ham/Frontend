import React from 'react';
import {profileIconClasses as styles} from './profilemenu.styles';
import {useProfileIcon} from './profilemenu.hooks';
import PropTypes from 'prop-types';

/**
 * Profile icon component
 * @component
 * @param {string} statusColor - The status color
 * @example
 * // Render the profile icon
 * <ProfileIcon />
 * @return {JSX.Element} The profile icon component
 */
function ProfileIcon({statusColor = '#55bd46'}) {
    const {imgSrc} = useProfileIcon();
    return (
        <span className={styles.avatarWrapper}>
            <span className={styles.avatarContainer}>
                <img src={imgSrc} alt='User Avatar' className='max-w-full' />
                <span className={styles.status} style={{backgroundColor: statusColor}}>
                </span>
            </span>
        </span>
    );
}

ProfileIcon.propTypes = {
    statusColor: PropTypes.string,
};

export {ProfileIcon};
