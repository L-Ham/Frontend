import React from 'react';
import {ProfileIcon} from './profileicon.js';
import {profileMenuClasses as styles} from './profilemenu.styles.js';
import {useProfileMenu} from './profilemenu.hooks.js';
import '../../appbar.css';
import uuid from 'react-uuid';

/**
 * Profile icon component
 * @component
 * @example
 * // Render the profile icon
 * <ProfileIcon />
 * @return {JSX.Element} The profile icon component
 */
function ProfileMenu() {
    const {isUserMenuOpen, setIsUserMenuOpen, UserMenuRef, userMenuDropdownStyles, tabSections} = useProfileMenu();
    return (
        <div ref={UserMenuRef} className={styles.root} data-testid='profile-menu'>

            <button className={styles.profileIconWrapper}
                onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}>
                <ProfileIcon isOnline={true}/>
            </button>

            <div className={userMenuDropdownStyles}>
                {tabSections.map((tabSection, index) => {
                    return (
                        <React.Fragment key={uuid()}>
                            <ul className={styles.userMenuList}>
                                {
                                    tabSection.map((tabItem, index) => {
                                        return (
                                            <li key={tabItem.key} className={styles.userMenuListItem}>
                                                {tabItem}
                                            </li>
                                        );
                                    })
                                }
                            </ul>
                            {index !== tabSections.length - 1 ? <hr className={styles.userMenuListSeparator}/> : null}
                        </React.Fragment>
                    );
                })}
            </div>
        </div>
    );
}

export {ProfileMenu};
