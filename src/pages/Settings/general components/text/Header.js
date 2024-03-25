import React from 'react';
import PropTypes from 'prop-types';

const Header = ({text}) => {
    const headerStyle = {
        fontSize: '14px',
        fontWeight: 'bold', // Updated from 'fontWeight' to 'bold' for the actual value
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
};

Header.propTypes = {
    text: PropTypes.string.isRequired,
};

export {Header};
