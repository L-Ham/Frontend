/* eslint-disable no-unused-vars */
import {React, useState, useRef, useEffect} from 'react';
import {ProfileIcon} from './profileicon';
import {UserDrawerElement} from './userdrawerelement';
import {ReactComponent as DarkModeIcon} from '../../assets/images/dark-mode-icon.svg';
import {CustomSwitch} from './switch';
import './appbar.css';

/**
 * Profile icon component
 * @component
 * @example
 * // Render the profile icon
 * <ProfileIcon />
 * @return {JSX.Element} The profile icon component
 */
function ProfileMenu() {
    const [isUserMenuOpen, setIsUserMenuOpen] = useState(true);
    const UserMenuRef = useRef();

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


    return (
        <div ref={UserMenuRef} className='flex size-[40px] items-center justify-center'>
            <ProfileIcon onClick={() => {
                setIsUserMenuOpen(!isUserMenuOpen);
            }}/>
            <div className={`absolute right-2 top-0 z-50 min-w-[256px] translate-y-[56px]
            rounded-b-[1.25rem] border-[0.0625rem] border-t-0 border-solid border-[#0000001a] bg-white pb-[.45rem]
            shadow-md ${isUserMenuOpen? 'block': 'hidden'} `}>
                <ul className='m-0 my-2 w-full list-none p-0'>
                    <li className='relative mt-0 list-none'>
                        <UserDrawerElement
                            textMain='View Profile'
                            textWeak='u/Cute-Area64'
                            icon={<ProfileIcon/>}
                            href='#'
                        />
                    </li>
                    <li className='relative mt-0 list-none'>
                        <UserDrawerElement
                            textMain='View Profile'
                            textWeak='u/Cute-Area64'
                            icon={<ProfileIcon/>}
                            href='#'
                        />
                    </li>
                    <li className='relative mt-0 list-none'>
                        <UserDrawerElement
                            textMain='View Profile'
                            textWeak='u/Cute-Area64'
                            icon={<ProfileIcon/>}
                            href='#'
                        />
                    </li>
                </ul>


                <hr/>

                <ul>
                    <li className='relative mt-0 list-none'>
                        <UserDrawerElement
                            textMain='Dark Mode'
                            icon={<DarkModeIcon/>}
                            component2={<CustomSwitch sx={{m: 1}} defaultChecked />}
                        />
                    </li>
                </ul>
            </div>
        </div>
    );
}

export {ProfileMenu};
