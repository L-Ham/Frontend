import React from 'react';
import {SearchHistoryItem} from './searchhistoryitem';
import {SearchTrendingItem} from './searchtrendingitem';
import {getIconComponent} from '../../../generic components/iconsmap';
import PropTypes from 'prop-types';

/**
 * The search dropdown component
 * @component
 * @param {boolean} isSearchDropdownVisible - Whether or not the search dropdown is visible
 * @param {array} searchTrendingItems - The trending search items
 * @param {array} SearchHistoryItems - The search history items
 * @example
 * // Render the search dropdown
 * <SearchDropDown />
 * @return {JSX.Element} The search dropdown component
 * */
function SearchDropDown({isSearchDropdownVisible = false, searchTrendingItems = [], SearchHistoryItems = []}) {
    return (
        <div id='SearchDropdown' className={`max-h-[calc(100vh-56px-15px-10px)]
                                    ${isSearchDropdownVisible ? 'block' : 'hidden'}
                                    overflow-y-auto overflow-x-hidden rounded-b-[1.25rem]
                                    bg-white shadow-md`}>
            <ul className='m-0 border-none p-0'>
                {
                    SearchHistoryItems.map((item, index) => (
                        <>

                            <li key={index} className='relative mt-0 list-none '>
                                <SearchHistoryItem {...item}/>
                            </li>
                            <hr className='mx-4 my-0 border-x-0 border-b-0
                                border-t-[0.0625rem] border-solid border-[#0000001a]'/>
                        </>
                    ))
                }
            </ul>

            <hr className='my-0 border-x-0 border-b-0
                                    border-t-[0.0625rem] border-solid border-[#0000001a]'/>


            <div className="mb-1 ml-4 mt-3 flex items-center text-[#576f76]">
                {getIconComponent('trending', false)}
                                    TRENDING TODAY
            </div>


            <ul id='SearchDropdownList' className='my-0 list-none p-0'>
                {
                    searchTrendingItems.map((item, index) => (
                        <>

                            <li key={index} className='relative mt-0 list-none'>
                                <SearchTrendingItem {...item}/>
                            </li>
                            <hr className='mx-4 my-0 border-x-0 border-b-0
                                border-t-[0.0625rem] border-solid border-[#0000001a]'/>
                        </>
                    ))
                }
            </ul>
        </div>
    );
}

SearchDropDown.propTypes = {
    isSearchDropdownVisible: PropTypes.bool,
    searchTrendingItems: PropTypes.array,
    SearchHistoryItems: PropTypes.array,
};

export {SearchDropDown};
