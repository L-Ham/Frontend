import React from 'react';
import PropTypes from 'prop-types';
import {useJoinButton} from './joinbutton.hooks';

/**
 * JoinButton component
 * @component
 * @param {Object} props - The component props
 * @param {string} props.subscribeLabel - The subscribe label
 * @param {string} props.unSubscribeLabel - The unsubscribe label
 * @param {function} props.handleJoinClick - The handle join click function
 * @param {boolean} props.isSubscribed - The is subscribed status
 * @return {JSX.Element} The JoinButton component
 */
export function JoinButton({
    subscribeLabel,
    unSubscribeLabel,
    handleJoinClick,
    isSubscribed,
}) {
    const {
        handleClick,
        disabled,
        buttonClasses,
        buttonLabel,
    } = useJoinButton({handleJoinClick, isSubscribed, subscribeLabel, unSubscribeLabel});


    return (
        <button
            className={buttonClasses}
            onClick={handleClick}
            disabled={disabled}
        >
            {buttonLabel}
        </button>
    );
}

JoinButton.propTypes = {
    subscribeLabel: PropTypes.string.isRequired,
    unSubscribeLabel: PropTypes.string.isRequired,
    handleJoinClick: PropTypes.func.isRequired,
    isSubscribed: PropTypes.bool.isRequired,
};

