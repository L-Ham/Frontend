import React from 'react';
import PropTypes from 'prop-types';
import {shareClasses, shareStyles} from './share.styles.js';
import {useShare} from './share.hooks.js';
/**
 * Share Button component
 * @param {string} postId
 * @return {React.Component}
 */
export function Share({
    postId,
}) {
    const {ShareIcon} = useShare();
    return (
        <button
            className={shareClasses.root}
            style={shareStyles.root}
            onClick={(e) => e.stopPropagation()}
            type="button"
            data-testid={`share-button-${postId}`}
        >
            <div className={shareClasses.wrapper} data-testid={`share-wrapper-${postId}`}>
                <div className={shareClasses.icon} data-testid={`share-icon-${postId}`}>
                    <ShareIcon />
                </div>
                Share
            </div>
        </button>
    );
}

Share.propTypes = {
    postId: PropTypes.string.isRequired,
};
