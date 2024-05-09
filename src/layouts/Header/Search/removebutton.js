import React from 'react';
import {searchHistoryItemClasses} from './search.styles.js';
import {getIconComponent} from '../../../generic components/iconsmap.js';
import PropTypes from 'prop-types';

/**
 * Remove button component
 * @component
 * @param {function} handleClearClick - The function to handle the clear button click
 * @example
 * // Render the remove button
 * <RemoveButton />
 * @return {JSX.Element} The remove button component
 */
function RemoveButton({handleClearClick, iconFill=false}) {
    const RemoveIcon = getIconComponent('remove', iconFill);
    return (
        <span className={searchHistoryItemClasses.removeButtonWrapper}>
            <span className={searchHistoryItemClasses.removeButtonContainer}>
                <button className={searchHistoryItemClasses.removeButton}
                    tabIndex="-1" onMouseUp={handleClearClick}>
                    <span className={searchHistoryItemClasses.removeButtonIcon}>
                        <span className="flex">
                            <RemoveIcon />
                        </span>
                    </span>
                </button>
            </span>
        </span>
    );
}

RemoveButton.propTypes = {
    handleClearClick: PropTypes.func,
    iconFill: PropTypes.bool,
};

export {RemoveButton};
