import React, {useState, useRef, useEffect} from 'react';
import {getIconComponent} from '../../generic components/iconsmap';
import {SearchDropDown} from './Search/searchdropdown';
import {ProfileMenu} from './UserMenu/profilemenu';
import {SearchBar} from './Search/searchbar';
import './appbar.css';
/**
 * Main application component
 * @component
 * @example
 * // Render the application
 * <App />
 * @return {JSX.Element} The main application component
 */
function AppBar() {
    const [isSearchDropdownVisible, setIsSearchDropdownVisible] = useState(false);
    const searchBarRef = useRef();
    const MenuIcon = getIconComponent('menu', false);
    const RedditLogo = getIconComponent('reddit-logo', false);
    const RedditName = getIconComponent('reddit-name', false);
    const AddvertiseIcon = getIconComponent('advertise', false);
    const ChatIcon = getIconComponent('chat', false);
    const CreatePostIcon = getIconComponent('create-post', false);
    const InboxIcon = getIconComponent('inbox', false);

    useEffect(() => {
        const closeDropdown = (e) => {
            if (searchBarRef.current && !searchBarRef.current.contains(e.target)) {
                setIsSearchDropdownVisible(false);
            }
        };
        document.addEventListener('click', closeDropdown);

        return () => {
            document.removeEventListener('click', closeDropdown);
        };
    });

    const searchTrendingItems = [];
    for (let i = 0; i < 6; i++) {
        searchTrendingItems.push(
            {
                title: 'Trending Item',
                description: 'Description of the trending item',
                subredditIconURL: 'https://www.redditstatic.com/desktop2x/img/favicon/apple-icon-57x57.png',
                subredditName: 'r/Popular',
                imageURL: 'https://www.redditstatic.com/desktop2x/img/favicon/apple-icon-57x57.png',
            },
        );
    }

    const SearchHistoryItems = [];
    for (let i = 0; i < 3; i++) {
        SearchHistoryItems.push(
            {
                subredditIconURL: 'https://www.redditstatic.com/desktop2x/img/favicon/apple-icon-57x57.png',
                label: 'History Item',
                link: '/test',
            },
        );
    }
    for (let i = 0; i < 3; i++) {
        SearchHistoryItems.push(
            {
                subredditIconURL: '',
                label: 'History Item',
                link: '/test',
            },
        );
    }


    return (
        <header className='pointer-events-auto bg-white px-4'>
            <nav className='flex h-[56px] items-center border-x-0
                border-b-[0.0625rem] border-t-0 border-solid border-[#00000033]'>

                <div className='flex items-center justify-start gap-2 pr-6'>

                    <button className="button-medium inline-flex size-10 items-center
                    justify-center rounded-full px-2 hover:bg-[#e2e7e9] active:bg-[#d2dadd]
                     nd:hidden " id="navbar-menu-button" type="button">
                        <span className="flex items-center justify-center">
                            <span className="flex">
                                <MenuIcon />
                            </span>

                        </span>
                    </button>

                    <a href='/' className='flex items-center'>
                        <span className='flex items-center pr-0 s:pr-2'>
                            <RedditLogo/>
                        </span>
                        <span >
                            {/* <RedditName className='h-[22px]' style={{color: '#ff4500'}} /> */}
                            <RedditName className='h-[22px]' style={{color: '#ff4500'}} />
                        </span>
                    </a>

                </div>

                <div id='SearchContainer' className='flex h-[40px] w-full justify-stretch pb-2'>

                    <div className='flex w-full flex-col justify-stretch'>


                        <div ref={searchBarRef} className={`${isSearchDropdownVisible ?
                            ' sh-sm w-full max-w-[750px] justify-stretch rounded-[1.25rem] bg-white' +
                            ' nd:mx-auto nd:w-[560px]' :
                            'w-full max-w-[750px] justify-stretch rounded-[1.25rem] nd:mx-auto nd:w-[560px]'}`}
                        onClick={() => setIsSearchDropdownVisible(true)}>
                            <SearchBar isSearchDropdownVisible={isSearchDropdownVisible} />

                            {/* SearchDropdown, should be hidden by default and
                             shown when the user types in the search input */}
                            <SearchDropDown
                                SearchHistoryItems={SearchHistoryItems}
                                searchTrendingItems={searchTrendingItems}
                                isSearchDropdownVisible={isSearchDropdownVisible}
                            />


                        </div>
                    </div>
                </div>

                <div className='flex items-center justify-end gap-2 pl-6'>
                    <div className='flex h-[40px]'>
                        <a href='/chat' className='button-medium hidden w-10 items-center
                        justify-center gap-2 rounded-full px-2 hover:bg-[#e2e7e9] nd:inline-flex'>
                            <span className='flex size-8 items-center justify-center text-xl leading-4'>
                                <AddvertiseIcon />
                            </span>
                        </a>
                        <a href='/chat' className='button-medium inline-flex w-10 items-center
                        justify-center gap-2 rounded-full px-2 hover:bg-[#e2e7e9]'>
                            <span className='flex size-8 items-center justify-center text-xl leading-4'>
                                <ChatIcon />
                            </span>
                        </a>

                        {/* <span className='contents'> */}

                        <a href='/#' className='button-medium
                                                inline-flex items-center justify-center
                                                rounded-full
                                                pl-2.5 pr-3.5
                                                no-underline hover:bg-[#e2e7e9] hover:no-underline active:no-underline'>
                            <span className='flex items-center justify-center'>
                                <span className='mr-2 flex'>
                                    <CreatePostIcon />
                                </span>
                                <span className='flex items-center gap-2'>Create</span>
                            </span>
                        </a>
                        {/* </span> */}
                        <a href='/chat' className='button-medium inline-flex w-10 items-center
                        justify-center gap-2 rounded-full px-2 hover:bg-[#e2e7e9]'>
                            <span className='flex size-8 items-center justify-center text-xl leading-4'>
                                <InboxIcon />
                            </span>
                        </a>

                        <ProfileMenu />
                    </div>
                </div>
                {/* <SearchTrendingItem /> */}
            </nav>
        </header>
    );
}

export {AppBar};
