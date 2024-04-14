import React from 'react';
import PropTypes from 'prop-types';
import {backClasses} from './back.styles.js';
import {useBackButton} from './back.hooks.js';
/**
 * BackButton component
 * @param {string} postId
 * @return {React.Component}
 */
export function BackButton({
    postId,
}) {
    const {
        handleBackClick,
        BackIcon,
    } = useBackButton();
    return (
        <button
            aria-label="Back"
            className={backClasses.button}
            onClick={handleBackClick}
            data-testid={`back-${postId}`}
            type="button"
        >
            <div className={backClasses.root}>
                <div className={backClasses.base}>
                    <BackIcon />
                </div>
            </div>
        </button>
    );
}

BackButton.propTypes = {
    postId: PropTypes.string.isRequired,
};
