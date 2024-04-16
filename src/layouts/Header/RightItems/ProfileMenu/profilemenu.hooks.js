import React, {useEffect, useRef, useState} from 'react';
import {ProfileMenuListItem} from './profilemenulistitem.js';
import {ProfileMenuSwitchItem} from './profilemenuswitchitem.js';
import {ProfileMenuButtonItem} from './profilemenubuttonitem.js';
import {ProfileIcon} from './profileicon.js';
import {getIconComponent} from '../../../../generic components/iconsmap.js';
import {profileMenuClasses} from './profilemenu.styles.js';
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';
import {setTheme, logout} from '../../../../store/userSlice.js';
import {useNavigate} from 'react-router-dom';


export const useProfileMenu = () => {
    const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
    const isThemeDark = useSelector((state) => state.user.theme === 'dark');
    const UserMenuRef = useRef(null);
    const NightIcon = getIconComponent('night', false);
    const AvatarStyleIcon = getIconComponent('avatar-style', false);
    const LogOut = getIconComponent('logout', false);
    const WalletIcon = getIconComponent('wallet', false);
    const UpvoteIcon = getIconComponent('upvote', false);
    const PremiumIcon = getIconComponent('premium', false);
    const SettingsIcon = getIconComponent('settings', false);
    const AdvertiseIcon = getIconComponent('advertise', false);
    const userMenuDropdownStyles = `${profileMenuClasses.userMenuDropdown} ${isUserMenuOpen? 'block': 'hidden'} `;
    const username = useSelector((state) => state.user.username);
    const dispatch = useDispatch();
    const navigate = useNavigate();


    const contributorProgramSubLabel = (
        <span className='inline-flex'>
            <UpvoteIcon className='align-text-bottom'/>
            <span className='ml-1 text-xs text-[#576f76]'>
                0
            </span>
        </span>
    );

    const handleChange = (e) => {
        e.preventDefault();
        e.stopPropagation();
        dispatch(setTheme({theme: isThemeDark ? 'light': 'dark'}));
    };

    useEffect(() => {
        // get the div with id='root'
        const root = document.getElementById('root');
        // add 'theme-dark' to the class list of the element
        if (isThemeDark) {
            document.scrollingElement.className='theme-dark';
            root.className='theme-dark';
        } else {
            document.scrollingElement.className='theme-light';
            root.className='theme-light';
        }
    }, [isThemeDark]);

    const tabSections = [
        [
            (<ProfileMenuListItem
                key='view-profile'
                mainLabel='View Profile'
                subLabel={'u/' + username}
                icon={<ProfileIcon isOnline={true}/>}
                href={'/user/' + username}
            />),
            (<ProfileMenuListItem
                key='edit-avatar'
                mainLabel='Edit Avatar'
                icon={<AvatarStyleIcon/>}
                href='#'
            />),
            (<ProfileMenuListItem
                key='contributor-program'
                mainLabel='Contributor Program'
                subLabel={contributorProgramSubLabel}
                icon={<WalletIcon/>}
                href='#'
            />),
            (<ProfileMenuSwitchItem
                key='dark-mode'
                label='Dark Mode'
                icon={<NightIcon/>}
                checked={isThemeDark}
                onChange={handleChange}
            />),
            (<ProfileMenuButtonItem
                key='log-out'
                mainLabel='Log Out'
                icon={<LogOut/>}
                onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    dispatch(logout());
                    navigate('/login');
                }}
            />),
        ],
        [
            (<ProfileMenuListItem
                key='advertise'
                mainLabel='Advertise on Reddit'
                icon={<AdvertiseIcon/>}
                href='#'
            />),
        ],
        [
            (<ProfileMenuListItem
                key='settings'
                mainLabel='Settings'
                icon={<SettingsIcon/>}
                href='/settings'
            />),
        ],
        [
            (<ProfileMenuListItem
                key='premium'
                mainLabel='Premium'
                icon={<PremiumIcon/>}
                href='#'
            />),
        ],
    ];

    useEffect(() => {
        const closeDropdown = (e) => {
            if (UserMenuRef.current && !UserMenuRef.current.contains(e.target)) {
                setIsUserMenuOpen(false);
            }
        };
        document.addEventListener('click', closeDropdown);

        return () => {
            document.removeEventListener('click', closeDropdown);
        };
    });

    return {
        isUserMenuOpen,
        setIsUserMenuOpen,
        UserMenuRef,
        userMenuDropdownStyles,
        tabSections,
    };
};

export const useProfileIcon = () => {
    const avatar = useSelector((state) => state.user.avatar);
    const imgSrc = avatar || 'https://www.redditstatic.com/avatars/defaults/v2/avatar_default_1.png';

    return {imgSrc};
};
