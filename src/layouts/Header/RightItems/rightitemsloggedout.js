/* eslint-disable max-len */
import React, {useState, useEffect, useRef} from 'react';
import {createPostButtonClasses as styles} from './Buttons/buttons.styles.js';
import {getIconComponent} from '../../../generic components/iconsmap.js';
import {ProfileMenuListItem} from './ProfileMenu/profilemenulistitem.js';
import '../appbar.css';

/**
 * The right items of the header
 * @component
 * @example
 * // Render the right items of the header
 * <RightItems />
 * @return {JSX.Element} The right items of the header
 */
function RightItemsLoggedout() {
    const QRCodeIcon = getIconComponent('qrcode');
    const LogOutIcon = getIconComponent('logout', false);
    const AddvertiseIcon = getIconComponent('advertise', false);
    const ShopIcon = getIconComponent('topic-marketplace', false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef(null);
    useEffect(() => {
        const handleClick = (e) => {
            // console.log(isMenuOpen);
            if (menuRef.current && !menuRef.current.contains(e.target)) {
                setIsMenuOpen(false);
            }
        };
        document.addEventListener('click', handleClick);
        return () => {
            document.removeEventListener('click', handleClick);
        };
    }, []);
    return (
        <div className="flex items-center justify-end gap-2 pl-6">
            <span className="contents">
                <span className="hidden nd:block">
                    <button className="inline-flex h-10 items-center justify-center rounded-full bg-[var(--color-secondary-background)]
                                pl-2.5 pr-3.5 text-[var(--color-button-plain-text)] no-underline hover:bg-[var(--color-secondary-background-hover)]
                                hover:no-underline active:bg-[var(--color-interactive-pressed)] active:no-underline">
                        <span className={styles.content}>
                            <span className={styles.iconContainer}>
                                <QRCodeIcon />
                            </span>
                            <span className="flex items-center gap-2 whitespace-nowrap text-sm font-semibold">
                                Get App
                            </span>
                        </span>
                    </button>
                </span>
            </span>

            <span className="contents">
                <a className="inline-flex h-10 items-center justify-center rounded-full bg-[var(--color-brand-background)]
                                px-3 text-[var(--color-danger-content-default)] no-underline hover:bg-[var(--color-brand-background-hover)]
                                hover:no-underline active:bg-[var(--color-brand-background-active)] active:no-underline" href='/login'>
                    <span className={styles.content}>
                        <span className="flex items-center gap-2 whitespace-nowrap text-sm font-semibold">
                                Log In
                        </span>
                    </span>
                </a>
            </span>


            <div className="flex size-[40px] items-center justify-center">

                <button className="
                        inline-flex size-[40px] items-center
                        justify-center rounded-full
                        px-[var(--rem8)] text-[var(--color-button-plain-text)] hover:bg-[var(--color-secondary-background-hover)]
                        active:bg-[var(--color-interactive-pressed)]"
                onClick={(event) => {
                    event.stopPropagation();
                    event.preventDefault();
                    setIsMenuOpen(!isMenuOpen);
                }}
                >
                    <span className="flex items-center justify-center">
                        <span className="flex"><svg fill="currentColor" height="20" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.5 10a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM10 8.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Zm6 0a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Z"></path>
                        </svg></span>

                    </span>
                </button>

                <div className={`menu-shadow absolute right-2 top-[56px] min-w-[256px]
                rounded-[15px] bg-[var(--color-neutral-background-strong)] ${!isMenuOpen? 'hidden':''}`}
                ref={menuRef}>

                    <ul className="m-0 my-2 w-full list-none p-0">
                        <li className="relative mt-0 list-none " id="login-list-item" role="presentation">
                            <ProfileMenuListItem
                                icon={<LogOutIcon />}
                                mainLabel="Log In / Sign Up"
                                href="/login"
                            />
                        </li>
                        <li className="relative mt-0 list-none " id="login-list-item" role="presentation">
                            <ProfileMenuListItem
                                icon={<AddvertiseIcon />}
                                mainLabel="Addvertise on Reddit"
                                href="https://ads.reddit.com?utm_source=web3x_consumer&utm_name=user_menu_cta"
                            />
                        </li>
                        <li className="relative mt-0 list-none " id="login-list-item" role="presentation">
                            <ProfileMenuListItem
                                icon={<ShopIcon />}
                                mainLabel="Shop Collectable Avatars"
                                href="/avatar/shop"
                            />
                        </li>
                    </ul>

                </div>
            </div>
        </div>
    );
}

export {RightItemsLoggedout};
