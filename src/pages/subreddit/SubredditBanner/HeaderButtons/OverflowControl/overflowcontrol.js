import React from 'react';
import PropTypes from 'prop-types';
import {DropdownMenu} from '../../../General/Components/DropdownMenu/dropdownmenu.js';
import {buttonClasses} from '../../../subreddit.styles.js';
import {useOverflowControl} from './overflowcontrol.hooks.js';
import {classes} from './overflowcontrol.styles.js';

/**
 * Renders an OverflowControl.
 * @param {Object} props - The component props.
 * @param {boolean} props.isMuted - Whether the post is muted.
 * @param {Function} props.onMuteClick - The function to call when the mute button is clicked.
 * @param {boolean} props.isFavourite - Whether the post is a favourite.
 * @param {Function} props.onFavouriteClick - The function to call when the favourite button is clicked.
 * @param {Function} props.handleJoinClick - The function to call when the join button is clicked.
 * @param {boolean} props.isSubscribed - Whether the user is subscribed.
 * @return {JSX.Element} The rendered component.
 */
export function OverflowControl({
    isMuted,
    onMuteClick,
    isFavourite,
    onFavouriteClick,
    handleJoinClick,
    isSubscribed,
}) {
    const {isOtherOptionsVisible,
        handleOtherOptionsClick,
        menuItems,
        OverflowHorizontalIcon} = useOverflowControl({isMuted, onMuteClick, isFavourite, onFavouriteClick,
        handleJoinClick, isSubscribed});

    return (
        <div className={classes.container} data-testid="overflow-control-container">
            <button
                className={buttonClasses.overflowControlButton}
                onClick={handleOtherOptionsClick}
                data-testid="overflow-control-button"
            >
                <span className={classes.button} data-testid="button-span">
                    <span className={classes.iconContainer} data-testid="icon-container">
                        <OverflowHorizontalIcon data-testid="overflow-horizontal-icon"/>
                    </span>
                </span>
            </button>
            <DropdownMenu
                position="top-[48px] right-0"
                items={menuItems}
                isHidden={!isOtherOptionsVisible}
                data-testid="dropdown-menu"
            />
        </div>
    );
}

OverflowControl.propTypes = {
    isMuted: PropTypes.bool.isRequired,
    onMuteClick: PropTypes.func.isRequired,
    isFavourite: PropTypes.bool.isRequired,
    onFavouriteClick: PropTypes.func.isRequired,
    handleJoinClick: PropTypes.func.isRequired,
    isSubscribed: PropTypes.bool.isRequired,
};

