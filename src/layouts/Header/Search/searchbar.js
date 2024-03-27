import React from 'react';
import {ReactComponent as SearchIcon} from '../../assets/images/search-icon.svg';
import PropTypes from 'prop-types';

/**
 * Search bar component
 * @component
 * @param {boolean} isSearchDropdownVisible - Whether or not the search dropdown is visible
 * @example
 * // Render the search bar
 * <SearchBar />
 * @return {JSX.Element} The search bar component
 * */
function SearchBar({isSearchDropdownVisible = false}) {
    return (
        <div className={`${isSearchDropdownVisible ? `border-x-0 border-b-[0.0625rem]
                         border-t-0 border-solid border-[#0000001a] pb-[.45rem]` : ''} 
                         w-full`}>

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
    );
}

SearchBar.propTypes = {
    isSearchDropdownVisible: PropTypes.bool,
};

export {SearchBar};
