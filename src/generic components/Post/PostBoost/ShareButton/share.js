import React from 'react';
import PropTypes from 'prop-types';
import {shareClasses, shareStyles} from './share.styles.js';
import {useShare} from './share.hooks.js';
import {Dropdown} from './Dropdown/dropdown.js';

/**
 * Share Button component
 * @param {string} postId
 * @param {string} url
 * @return {React.Component}
 */
export function Share({
    postId,
    url,
}) {
    const {
        ShareIcon,
        isOpen,
        setIsOpen,
    } = useShare();
    return (
        <>
            <button
                className={shareClasses.root}
                style={shareStyles.root}
                onClick={(e) => {
                    e.stopPropagation();
                    setIsOpen(!isOpen);
                }}
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
            <Dropdown
                postId={postId}
                url={url}
                isOpen={isOpen}
                setIsOpen={setIsOpen}
            />
        </>
    );
}

Share.propTypes = {
    postId: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
};
