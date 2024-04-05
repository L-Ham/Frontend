import React from 'react';
import PropTypes from 'prop-types';
import {optionsClasses} from './options.styles.js';
import {useOptionsButton} from './options.hooks.js';
/**
 * OptionsButton component
 * @param {string} postId
 * @return {React.Component}
 */
export function OptionsButton({
    postId,
}) {
    const {
        ThreeDotsIcon,
    } = useOptionsButton();
    return (
        <button
            className={optionsClasses.root}
            type='button'
            data-testid={`more-${postId}`}
            onClick={(e) => e.stopPropagation()}
        >
            <ThreeDotsIcon />
        </button>
    );
}

OptionsButton.propTypes = {
    postId: PropTypes.string.isRequired,
};
