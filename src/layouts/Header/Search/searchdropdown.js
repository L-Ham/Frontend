import React from 'react';
import {SearchHistoryItem} from './searchhistoryitem.js';
import {SearchTrendingItem} from './searchtrendingitem.js';
import {useSearchDropDown} from './search.hooks.js';
import {searchDropDownClasses as styles} from './search.styles.js';
import PropTypes from 'prop-types';
import uuid from 'react-uuid';

/**
 * The search dropdown component
 * @component
 * @param {boolean} isDropdownVisible - Whether or not the search dropdown is visible
 * @param {array} TrendingItems - The trending search items
 * @param {array} HistoryItems - The search history items
 * @example
 * // Render the search dropdown
 * <SearchDropDown />
 * @return {JSX.Element} The search dropdown component
 * */
function SearchDropDown({isDropdownVisible = false, TrendingItems = [], HistoryItems = []}) {
    const {rootStyles, TrendingIcon} = useSearchDropDown({isDropdownVisible});
    return (
        <div className={rootStyles} data-testid='search-dropdown'>
            <ul className={styles.recentSearchList}>
                {
                    HistoryItems.map((item) => (
                        <React.Fragment key={uuid()}>
                            <li className={styles.listItem}>
                                <SearchHistoryItem {...item}/>
                            </li>
                        </React.Fragment>
                    ))
                }
            </ul>

            <div className={styles.trending}>
                <TrendingIcon/>
                TRENDING TODAY
            </div>
            <ul id='SearchDropdownList' className={styles.trendingList}>
                {
                    TrendingItems.map((item, index) => (
                        <React.Fragment key={uuid()}>
                            <li className={styles.listItem}>
                                <SearchTrendingItem {...item}/>
                            </li>
                            {index !== TrendingItems.length - 1 && <hr className={styles.listSeparator}/>}
                        </React.Fragment>
                    ))
                }
            </ul>
        </div>
    );
}

SearchDropDown.propTypes = {
    isDropdownVisible: PropTypes.bool,
    TrendingItems: PropTypes.array,
    HistoryItems: PropTypes.array,
};

export {SearchDropDown};
