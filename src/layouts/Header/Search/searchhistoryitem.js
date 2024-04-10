import React from 'react';
import {useSearchHistoryItem} from './search.hooks.js';
import {searchHistoryItemClasses} from './search.styles.js';
import PropTypes from 'prop-types';

/**
 * Search history item component
 * @component
 * @param {string} subredditIconURL - The URL of the subreddit icon
 * @param {string} label - The label of the search history item
 * @param {string} link - The link to be redirected to
 * @example
 * // Render the search history item
 * <SearchHistoryItem />
 * @return {JSX.Element} The search history item component
 */
function SearchHistoryItem({subredditIconURL, label, href}) {
    const {HistoryIcon, RemoveIcon, handleClick} = useSearchHistoryItem();
    return (
        <a className={searchHistoryItemClasses.root} href={href} tabIndex="-1"
            data-testid={`search-history-item-${label}`}>

            <span className={searchHistoryItemClasses.itemWrapper}>
                <span className={searchHistoryItemClasses.iconWrapper}>
                    <span className={searchHistoryItemClasses.icon}>
                        {
                            subredditIconURL ?
                                <img src={subredditIconURL}
                                    alt="Icon for r/"
                                    className={searchHistoryItemClasses.iconImage} />:
                                <HistoryIcon />
                        }
                    </span>
                </span>
                <span className={searchHistoryItemClasses.labelWrapper}>
                    <span className={searchHistoryItemClasses.label}>
                        <div className={searchHistoryItemClasses.labelContainer}>
                            {label}
                        </div>
                    </span>
                </span>
            </span>
            <span className={searchHistoryItemClasses.removeButtonWrapper}>
                <span className={searchHistoryItemClasses.removeButtonContainer}>
                    <button className={searchHistoryItemClasses.removeButton}
                        tabIndex="-1"
                        onClick={(e) => {
                            handleClick(e, label);
                        }}>
                        <span className={searchHistoryItemClasses.removeButtonIcon}>
                            <span className="flex">
                                <RemoveIcon />
                            </span>
                        </span>
                    </button>
                </span>
            </span>
        </a>
    );
}

SearchHistoryItem.propTypes = {
    subredditIconURL: PropTypes.string,
    label: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
};

export {SearchHistoryItem};
