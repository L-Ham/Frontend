import React from 'react';
import PropTypes from 'prop-types';
import {optionsClasses} from './options.styles.js';
import {useOptionsButton} from './options.hooks.js';
import {Dropdown} from './Dropdown/dropdown.js';
/**
 * OptionsButton component
 * @param {string} postId
 * @param {boolean} isMember
 * @return {React.Component}
 */
export function OptionsButton({
    postId,
    isMember,
}) {
    const {
        ThreeDotsIcon,
        isOpen,
        setIsOpen,
    } = useOptionsButton();

    return (
        <>
            <button
                className={optionsClasses.root}
                type='button'
                data-testid={`more-${postId}`}
                onClick={(e) => {
                    e.stopPropagation(); setIsOpen(!isOpen);
                }}
            >
                <ThreeDotsIcon />
            </button>
            <Dropdown
                postId={postId}
                isSubscriber={isMember}
                setIsOpen={setIsOpen}
                isOpen={isOpen}
            />
        </>
    );
}

OptionsButton.propTypes = {
    postId: PropTypes.string.isRequired,
    isMember: PropTypes.bool.isRequired,
};
