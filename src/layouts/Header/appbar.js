import React, {useState, useRef, useEffect} from 'react';
import {ReactComponent as RedditLogo} from '../../assets/images/reddit-logo.svg';
import {ReactComponent as RedditName} from '../../assets/images/reddit-name.svg';
import {ReactComponent as SearchIcon} from '../../assets/images/search-icon.svg';
import {ReactComponent as AddvertiseIcon} from '../../assets/images/advertise-icon.svg';
import {ReactComponent as ChatIcon} from '../../assets/images/chat-icon.svg';
import {ReactComponent as InboxIcon} from '../../assets/images/inbox-icon.svg';
import {ReactComponent as CreatePostIcon} from '../../assets/images/create-icon.svg';
import {ReactComponent as SearchTrendingIcon} from '../../assets/images/trending-icon.svg';
import {ReactComponent as HambugerMenuIcon} from '../../assets/images/hamburger-menu-icon.svg';
import {SearchTrendingItem} from './searchtrendingitem';
import {SearchHistoryItem} from './searchhistoryitem';
import {ProfileMenu} from './profilemenu';
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
            <li className='relative mt-0 list-none'>
                <SearchTrendingItem />
            </li>,
            <hr className='mx-4 my-0 border-x-0 border-b-0
            border-t-[0.0625rem] border-solid border-[#0000001a]'/>,
        );
    }


    return (
        <header className='pointer-events-auto bg-white px-4'>
            <nav className='flex h-[56px] items-center border-x-0
                border-b-[0.0625rem] border-t-0 border-solid border-[#00000033]'>

                <div id='LogoContainer' className='flex items-center justify-start gap-2 pr-6'>

                    <button className="button-medium inline-flex size-10 items-center
                    justify-center rounded-full px-2 hover:bg-[#e2e7e9] active:bg-[#d2dadd]
                     nd:hidden " id="navbar-menu-button" type="button">
                        <span className="flex items-center justify-center">
                            <span className="flex">
                                <HambugerMenuIcon />
                            </span>

                        </span>
                    </button>

                    <a href='/' className='flex items-center'>
                        <span className='flex items-center pr-0 s:pr-2'>
                            <RedditLogo />
                        </span>
                        <span >
                            <RedditName className='h-[22px]' style={{color: '#ff4500'}} />
                        </span>
                    </a>

                </div>

                <div id='SearchContainer' className='flex h-[40px] w-full justify-stretch pb-2'>

                    <div className='flex w-full flex-col justify-stretch'>

                        {/* eslint-disable-next-line max-len */}
                        <div ref={searchBarRef} className={`  w-full max-w-[750px] justify-stretch nd:pointer-events-auto
                                                nd:mx-auto nd:w-[560px] rounded-[1.25rem]
                                                ${isSearchDropdownVisible ? 'sh-sm bg-white' : ''}
                                                `} onClick={() => setIsSearchDropdownVisible(true)}>
                            {/* eslint-disable-next-line max-len */}
                            <div className={`${isSearchDropdownVisible ? 'border-x-0 border-b-[0.0625rem] border-t-0 border-solid border-[#0000001a] pb-[.45rem]' : ''} w-full`}>


                                <div className={`box-border inline-flex h-[40px] w-[inherit]
                                                    rounded-[1.25rem] bg-[#eaedef] hover:bg-[#e2e7e9] focus:bg-white
                                                    ${isSearchDropdownVisible ? 'bg-white' : ''}
                                                    `}>

                                    <form className='relative flex w-[inherit] items-center text-[#0f1a1c]'>
                                        <div className='flex px-4'>

                                            <span id='SearchIcon' className='mr-2 inline-flex items-center'>
                                                <SearchIcon />
                                            </span>
                                            {/* <form id='SearchForm' className='flex w-full items-center gap-2'> */}
                                            <span id='SearchInputContainer' className='flex w-full items-center'>
                                                <input id='SearchInput' type='text' className='size-full bg-transparent
                                            focus:outline-none' placeholder='Search Reddit'
                                                autoComplete='off'/>
                                            </span>
                                            {/* </form> */}
                                        </div>
                                    </form>
                                </div>
                            </div>

                            {/* SearchDropdown, should be hidden by default and
                             shown when the user types in the search input */}
                            <div id='SearchDropdown' className={`max-h-[calc(100vh-56px-15px-10px)]
                                    ${isSearchDropdownVisible ? 'block' : 'hidden'}
                                    overflow-y-auto overflow-x-hidden rounded-b-[1.25rem]
                                    bg-white shadow-md`}>

                                <SearchHistoryItem />

                                <hr className='my-0 border-x-0 border-b-0
                                    border-t-[0.0625rem] border-solid border-[#0000001a]'/>


                                <div className="mb-1 ml-4 mt-3 flex items-center text-[#576f76]">
                                    <SearchTrendingIcon />
                                    TRENDING TODAY
                                </div>


                                <ul id='SearchDropdownList' className='my-0 list-none p-0'>
                                    {searchTrendingItems}
                                </ul>
                            </div>

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
