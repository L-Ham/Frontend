import React from 'react';

import PropTypes from 'prop-types';
/* eslint-disable max-len */
/**
 * SettingsButton component.
 * @component
 * @example
 * // Render the SettingsButton.
 * <SettingsButton />
 * @return {JSX.Element} The SettingsButton component.
 */
function Date({date = 'now'}) {
    return (
        <div>
            <div className='flex flex-row px-[var(--spacer-md)] py-[var(--spacer-xs)] font-semibold text-[color:var(--color-tone-3)]'>
                {date}
            </div>

        </div>
    );
}

export {Date};

// write prop valid
Date.propTypes = {
    date: PropTypes.string,
};
