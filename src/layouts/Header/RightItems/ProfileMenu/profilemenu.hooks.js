import React, {useEffect, useRef, useState} from 'react';
import {ProfileMenuListItem} from './profilemenulistitem.js';
import {ProfileMenuSwitchItem} from './profilemenuswitchitem.js';
import {ProfileIcon} from './profileicon.js';
import {getIconComponent} from '../../../../generic components/iconsmap.js';
import {profileMenuClasses} from './profilemenu.styles.js';
import {useSelector} from 'react-redux';
import {axiosInstance as axios} from '../../../../requests/axios.js';
import {API_ROUTES} from '../../../../requests/routes.js';
import {useDispatch} from 'react-redux';
import {setAvatar} from '../../../../store/userSlice.js';

export const useProfileMenu = () => {
    const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
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

    const contributorProgramSubLabel = (
        <span className='inline-flex'>
            <UpvoteIcon className='align-text-bottom'/>
            <span className='ml-1 text-xs text-[#576f76]'>
                0
            </span>
        </span>
    );

    const tabSections = [
        [
            (<ProfileMenuListItem
                key='view-profile'
                mainLabel='View Profile'
                subLabel='u/Cute-Area64'
                icon={<ProfileIcon/>}
                href='#'
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
            />),
            (<ProfileMenuListItem
                key='log-out'
                mainLabel='Log Out'
                icon={<LogOut/>}
                href='#'
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
                href='#'
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
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user);
    const imgSrc = user.avatarImage || 'https://www.redditstatic.com/avatars/defaults/v2/avatar_default_1.png';

    useEffect(() => {
        const fetchAvatar = async () => {
            if (user.token && !user.avatarImage) {
                try {
                    console.log('fetching avatar');
                    const response = await axios.get(API_ROUTES.getAvatar, {
                        headers: {
                            Authorization: `Bearer ${user.token}`,
                        },
                    });
                    const avatarImage = response.data.url;
                    dispatch(setAvatar({avatarImage}));
                } catch (e) {
                    console.error(e);
                }
            }
        };

        fetchAvatar();
    }, [user, dispatch]);

    return {imgSrc};
};
