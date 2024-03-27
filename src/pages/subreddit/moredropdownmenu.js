import React from 'react';
import PropTypes from 'prop-types';
import {DropdownMenu} from '../../generic components/dropdownmenu';
import {useSubreddit} from './subredditcontext';

/**
 * MoreDropdownMenu component.
 * @param {Object} props - Component props.
 * @param {boolean} props.isMuted - Whether the subreddit is muted.
 * @param {function} props.onMuteClick - Function to handle mute click.
 * @param {boolean} props.isFavourite - Whether the subreddit is a favourite.
 * @param {function} props.onFavouriteClick - Function to handle favourite click.
 * @param {string} props.className - The class name.
 * @return {JSX.Element} MoreDropdownMenu component.
 */
export function MoreDropdownMenu({
    isMuted,
    onMuteClick,
    isFavourite,
    onFavouriteClick,
    className}) {
    const {subredditName} = useSubreddit();
    const menuItems = [
        {
            content: {
                text: (isFavourite ? 'Remove from Favourites' : 'Add to Favourites'),
            },
            onClick: onFavouriteClick,
        },
        {
            content: {
                text: (isMuted ? `Unmute r/${subredditName}` : `Mute r/${subredditName}`),
            },
            onClick: onMuteClick,
        },
    ];

    return (
        <DropdownMenu menuItems={menuItems} className={className}/>
    );
}

MoreDropdownMenu.propTypes = {
    isMuted: PropTypes.bool.isRequired,
    onMuteClick: PropTypes.func.isRequired,
    isFavourite: PropTypes.bool.isRequired,
    onFavouriteClick: PropTypes.func.isRequired,
    className: PropTypes.string,
};

MoreDropdownMenu.defaultProps = {
    className: '',
};
