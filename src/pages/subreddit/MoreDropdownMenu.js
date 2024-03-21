import React from 'react';
import PropTypes from 'prop-types';
import {DropdownMenu} from '../../generic components/DropdownMenu';

/**
 * MoreDropdownMenu component.
 * @param {Object} props - Component props.
 * @param {string} props.name - Name of the subreddit.
 * @param {boolean} props.isMuted - Whether the subreddit is muted.
 * @param {function} props.onMuteClick - Function to handle mute click.
 * @param {boolean} props.isFavourite - Whether the subreddit is a favourite.
 * @param {function} props.onFavouriteClick - Function to handle favourite click.
 * @return {JSX.Element} MoreDropdownMenu component.
 */
export function MoreDropdownMenu({
    name,
    isMuted,
    onMuteClick,
    isFavourite,
    onFavouriteClick}) {
    const menuItems = [
        {
            content: {
                text: (isFavourite ? 'Remove from Favourites' : 'Add to Favourites'),
            },
            onClick: onFavouriteClick,
        },
        {
            content: {
                text: (isMuted ? `Unmute r/${name}` : `Mute r/${name}`),
            },
            onClick: onMuteClick,
        },
    ];

    return (
        <DropdownMenu menuItems={menuItems}/>
    );
}

MoreDropdownMenu.propTypes = {
    name: PropTypes.string.isRequired,
    isMuted: PropTypes.bool.isRequired,
    onMuteClick: PropTypes.func.isRequired,
    isFavourite: PropTypes.bool.isRequired,
    onFavouriteClick: PropTypes.func.isRequired,
};
