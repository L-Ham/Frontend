import React from 'react';
import {SearchHistoryItem} from './searchhistoryitem.js';
import {SearchTrendingItem} from './searchtrendingitem.js';
import {useSearchDropDown} from './search.hooks.js';
import {searchDropDownClasses as styles} from './search.styles.js';
import PropTypes from 'prop-types';

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
                    HistoryItems.map((item, index) => (
                        <React.Fragment key={index}>
                            <li className={styles.listItem}>
                                <SearchHistoryItem {...item}/>
                            </li>
                            <hr className={styles.listSeparator}/>
                        </React.Fragment>
                    ))
                }
            </ul>
            <hr className={styles.sectionSeparator}/>

            <div className={styles.trending}>
                <TrendingIcon/>
                                    TRENDING TODAY
            </div>
            <ul id='SearchDropdownList' className={styles.trendingList}>
                {
                    TrendingItems.map((item, index) => (
                        <React.Fragment key={index}>
                            <li key={index} className={styles.listItem}>
                                <SearchTrendingItem {...item}/>
                            </li>
                            <hr className={styles.listSeparator}/>
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
