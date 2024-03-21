import React from 'react';
import PropTypes from 'prop-types';
import {SubredditSidebarItem} from './SubredditSidebarItem';
import './Flairs.css';

/**
 * Renders the flairs.
 * @param {string} name - The name of the subreddit.
 * @return {JSX.Element} The rendered component.
 */
export function Flairs({name}) {
    const flairs = [
        {name: 'Discussion', color: 'red'},
        {name: 'Theory', color: 'green'},
        {name: 'Powerscaling', color: 'yellow'},
        {name: 'Analysis', color: 'darkred'},
        {name: 'Fanart', color: 'purple'},
        {name: 'Cosplay', color: 'pink'},
        {name: 'Media', color: 'gray'},
        {name: 'Merchandise', color: 'blue'},
        {name: 'Big News', color: 'orange'},
    ];

    const handleFlairClick = (flair) => {
        window.open(`https://www.reddit.com/r/${name}/?f=flair_name="${flair}"`, '_blank');
    };

    return (
        <SubredditSidebarItem title='Flairs'>
            <div className="flairs">
                {flairs.map((flair) => (
                    <div key={flair.name} style={getFlairStyle(flair.color)} onClick={() => {
                        handleFlairClick(flair.name);
                    }}>
                        {flair.name}
                    </div>
                ))}
            </div>
        </SubredditSidebarItem>
    );
}

Flairs.propTypes =
{
    name: PropTypes.string.isRequired,
};

/**
 * Check if the color is light.
 * @param {string} color - The color to check.
 * @return {boolean} True if the color is light, false otherwise.
 */
function isLightColor(color) {
    const lightColors = ['red', 'green', 'yellow', 'purple', 'pink', 'blue', 'orange'];
    const darkColors = ['darkred', 'gray'];
    if (lightColors.includes(color)) {
        return true;
    }
    if (darkColors.includes(color)) {
        return false;
    }
    throw new Error('Color not recognized');
}

/**
 * Get the style for the flair.
 * @param {string} color - The color of the flair.
 * @return {Object} The style for the flair.
 */
function getFlairStyle(color) {
    return {
        backgroundColor: color,
        color: isLightColor(color) ? 'black' : 'white',
    };
}


