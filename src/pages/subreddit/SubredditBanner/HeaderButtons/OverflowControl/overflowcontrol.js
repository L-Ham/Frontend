import React from 'react';
import PropTypes from 'prop-types';
import {DropdownMenu} from '../../../General/Components/DropdownMenu/dropdownmenu.js';
import {buttonClasses} from '../../../subreddit.styles.js';
import {useOverflowControl} from './overflowcontrol.hooks';
import {classes} from './overflowcontrol.styles';

/**
 * Renders an OverflowControl.
 * @param {Object} props - The component props.
 * @param {boolean} props.isMuted - Whether the post is muted.
 * @param {Function} props.onMuteClick - The function to call when the mute button is clicked.
 * @param {boolean} props.isFavourite - Whether the post is a favourite.
 * @param {Function} props.onFavouriteClick - The function to call when the favourite button is clicked.
 * @return {JSX.Element} The rendered component.
 */
export function OverflowControl({
    isMuted = false,
    onMuteClick,
    isFavourite = false,
    onFavouriteClick},
) {
    const {isOtherOptionsVisible,
        handleOtherOptionsClick,
        menuItems,
        OverflowHorizontalIcon} = useOverflowControl(isMuted, onMuteClick, isFavourite, onFavouriteClick);

    return (
        <div className={classes.container}>
            <button
                className={buttonClasses.overflowControlButton}
                onClick={handleOtherOptionsClick}
            >
                <span className={classes.button}>
                    <span className={classes.iconContainer}>
                        <OverflowHorizontalIcon/>
                    </span>
                </span>
            </button>
            <DropdownMenu
                position="top-[48px] right-0"
                items={menuItems}
                isHidden={!isOtherOptionsVisible}/>
        </div>
    );
}

OverflowControl.propTypes = {
    isMuted: PropTypes.bool,
    onMuteClick: PropTypes.func,
    isFavourite: PropTypes.bool,
    onFavouriteClick: PropTypes.func,
};

