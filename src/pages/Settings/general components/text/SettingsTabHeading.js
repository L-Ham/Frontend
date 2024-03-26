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
function SettingsTabHeading({text}) {
    const headerStyle = {
        fontSize: '14px',
        fontWeight: 'bold',
        marginBottom: '20px',
        fontFamily: 'Arial',
        color: 'grey',
        textAlign: 'left',
        borderBottom: '1px solid grey',
        paddingBottom: '10px',
    };

    return (
        <div style={headerStyle}>
            {text}
        </div>
    );
}

SettingsTabHeading.propTypes = {
    text: PropTypes.string.isRequired,
};

export {SettingsTabHeading};
