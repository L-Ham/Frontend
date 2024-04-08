
import React from 'react';
import {ProfileIcon} from './profileicon.js';
import {profileMenuClasses} from './profilemenu.styles.js';
import {useProfileMenu} from './profilemenu.hooks.js';
import '../../appbar.css';

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
        <div ref={UserMenuRef} className={profileMenuClasses.root}>

            <button className={profileMenuClasses.profileIconWrapper}
                onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}>
                <ProfileIcon/>
            </button>

            <div className={userMenuDropdownStyles}>
                {tabSections.map((tabSection, index) => {
                    return (
                        <>
                            <ul key={index} className={profileMenuClasses.userMenuList}>
                                {
                                    tabSection.map((tabItem) => {
                                        return (
                                            <li key={tabItem.key} className={profileMenuClasses.usermenuListItem}>
                                                {tabItem}
                                            </li>
                                        );
                                    })
                                }
                            </ul>
                            <hr/>
                        </>
                    );
                })}
            </div>
        </div>
    );
}

export {ProfileMenu};
