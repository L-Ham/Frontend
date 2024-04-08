import React from 'react';
import {useSearchBar} from './search.hooks';
import {searchBarClasses as styles} from './search.styles';
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
    const {SearchIcon, rootStyles, formWrapperStyles, handleSearchSubmit} = useSearchBar({isSearchDropdownVisible});
    return (
        <div className={rootStyles}>
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
    isSearchDropdownVisible: PropTypes.bool,
};

export {SearchBar};
