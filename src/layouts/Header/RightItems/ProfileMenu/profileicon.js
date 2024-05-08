import React from 'react';
import {profileIconClasses as styles} from './profilemenu.styles.js';
import {useProfileIcon} from './profilemenu.hooks.js';
import PropTypes from 'prop-types';

/**
 * Profile icon component
 * @component
 * @param {boolean} isOnline - The status of the user
 * @example
 * // Render the profile icon
 * <ProfileIcon />
 * @return {JSX.Element} The profile icon component
 */
function ProfileIcon({isOnline}) {
    const {imgSrc} = useProfileIcon();
    return (
        <span className={styles.avatarWrapper} data-testid='profile-icon'>
            <span className={styles.avatarContainer} data-testid='avatar-container'>
                <img src={imgSrc} alt='User Avatar' className={styles.avatar} data-testid='avatar-image' />
                {isOnline && <span className={styles.status} data-testid='status'></span>}
            </span>
        </span>
    );
}

ProfileIcon.propTypes = {
    isOnline: PropTypes.bool.isRequired,
};

export {ProfileIcon};
