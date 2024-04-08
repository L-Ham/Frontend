import React from 'react';
import {SearchHistoryItem} from './searchhistoryitem';
import {SearchTrendingItem} from './searchtrendingitem';
import {useSearchDropDown} from './search.hooks';
import {searchDropDownClasses as styles} from './search.styles';
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
    const {rootStyles, TrendingIcon} = useSearchDropDown({isSearchDropdownVisible});
    return (
        <div className={rootStyles}>
            <ul className={styles.recentSearchList}>
                {
                    SearchHistoryItems.map((item, index) => (
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
                    searchTrendingItems.map((item, index) => (
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
    isSearchDropdownVisible: PropTypes.bool,
    searchTrendingItems: PropTypes.array,
    SearchHistoryItems: PropTypes.array,
};

export {SearchDropDown};
