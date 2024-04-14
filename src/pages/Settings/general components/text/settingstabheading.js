import React from 'react';
import PropTypes from 'prop-types';

/**
 * SettingsTabHeading function component displays a heading for a settings tab.
 * It styles the heading text to stand out as a section title within the settings interface.
 *
 * @param {Object} props - Component props
 * @param {string} props.text - The text to display as the heading of the settings tab.
 * @return {React.Component} A styled div element containing the heading text.
 */
function SettingsTabHeading({text, id}) {
    return (
        <div
            className='mb-8 border-b border-solid border-b-[color:var(--newCommunityTheme-line)] pb-1.5 text-[10px]
        font-bold uppercase leading-3 tracking-[0.5px] text-[color:var(--newCommunityTheme-metaText)]'
            style={{
                fontFamily: '"IBM Plex Sans", sans-serif',
            }}
        >
            {text}
        </div>
    );
}

SettingsTabHeading.propTypes = {
    text: PropTypes.string.isRequired,
    id: PropTypes.string,
};

export {SettingsTabHeading};
