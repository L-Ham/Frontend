import React from 'react';
import {useSearchBar} from './search.hooks.js';
import {searchBarClasses as styles} from './search.styles.js';
import PropTypes from 'prop-types';

/**
 * Search bar component
 * @component
 * @param {boolean} isDropdownVisible - Whether or not the search dropdown is visible
 * @example
 * // Render the search bar
 * <SearchBar />
 * @return {JSX.Element} The search bar component
 * */
function SearchBar({isDropdownVisible = false}) {
    const {SearchIcon, rootStyles, formWrapperStyles, handleSearchSubmit} = useSearchBar({isDropdownVisible});
    return (
        <div className={rootStyles} data-testid='search-bar'>
            <div className={formWrapperStyles}>
                <form className={styles.searchForm} onSubmit={handleSearchSubmit}>
                    <div className={styles.inputWrapper}>
                        <span className={styles.iconContainer}>
                            <SearchIcon />
                        </span>
                        <span className={styles.inputContainer}>
                            <input id='SearchInput' type='text' className={styles.input}
                                placeholder='Search Reddit'
                                autoComplete='off'/>
                        </span>
                    </div>
                </form>
            </div>
        </div>
    );
}

SearchBar.propTypes = {
    isDropdownVisible: PropTypes.bool,
};

export {SearchBar};
